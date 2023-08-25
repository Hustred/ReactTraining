import {useLocation} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {makeBattle} from "../../utils/api";
import Loading from "../Loading";
import PlayerDetails from "./PlayerDetails";

const BattleResult = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);

    useEffect(() => {
        setLoading(true);
        const searchParams = new URLSearchParams(location.search);
        makeBattle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')])
            .then(([winner, loser]) => {
                console.log(winner);
                setWinner(winner);
                setLoser(loser);
            })
            .finally(() => setLoading(false))
    }, [location.search])

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