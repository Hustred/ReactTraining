import {Fragment, useEffect} from "react";
import {makeBattle} from "../../utils/api";
import Loading from "../Loading";
import PlayerDetails from "./PlayerDetails";
import {useDispatch, useSelector} from "react-redux";
import {defineWinnerAndLoser, setBattleResultLoading, setPlayerName} from "../redux/battle/battle.actions";
import {useLocation} from "react-router-dom";

const BattleResult = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const playerOneName = useSelector(state => state.battle.playerOneName)
    const playerTwoName = useSelector(state => state.battle.playerTwoName)
    const winner = useSelector(state => state.battle.winner)
    const loser = useSelector(state => state.battle.loser)
    const loading = useSelector(state => state.battle.loadingBattleResult)

    useEffect(() => {
        dispatch(setBattleResultLoading(true))
        const searchParams = new URLSearchParams(location.search);
        if (!playerOneName) {
            dispatch(setPlayerName({name: [searchParams.get('playerOneName')], id: 'playerOne'}))
        }
        if (!playerTwoName) {
            dispatch(setPlayerName({name: [searchParams.get('playerTwoName')], id: 'playerTwo'}))
        }
        makeBattle([playerOneName, playerTwoName])
            .then(([winner, loser]) => {
                console.log(winner);
                dispatch(defineWinnerAndLoser({winner: winner, loser: loser}))
            })
            .finally(() => dispatch(setBattleResultLoading(false))
            )
    }, [dispatch, location.search, playerOneName, playerTwoName])

    return (
        <div className='row'>
            <Loading isLoading={loading}/>
            {winner && loser ?
                <Fragment>
                    <PlayerDetails label='Winner' score={winner.score} profile={winner.profile}/>
                    <PlayerDetails label='Loser' score={loser.score} profile={loser.profile}/>
                </Fragment> : null
            }
        </div>
    );
}

export default BattleResult;