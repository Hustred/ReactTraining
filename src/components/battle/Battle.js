import {useCallback} from "react";
import PlayerPreview from "./PlayerPreview";
import PlayerInput from "./PlayerInput";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPlayerNameAndImage} from "../redux/battle/battle.actions";

const Battle = () => {
    const dispatch = useDispatch();
    const playerOneName = useSelector(state => state.battle.playerOneName)
    const playerTwoName = useSelector(state => state.battle.playerTwoName)
    const playerOneImage = useSelector(state => state.battle.playerOneImage)
    const playerTwoImage = useSelector(state => state.battle.playerTwoImage)

    const handleSubmit = useCallback((id, userName) => {
        dispatch(setPlayerNameAndImage({name: userName, id, image: `https://github.com/${userName}.png?size200`}))
    }, [dispatch] );

    const handleReset = (id) => {
        dispatch(setPlayerNameAndImage({name: '', id, image: null}))
    }

    return (
        <div>
            <div className='row'>
                {playerOneImage ?
                    <PlayerPreview
                        id='playerOne'
                        avatar={playerOneImage}
                        userName={playerOneName}>
                        <button className='reset' onClick={() => handleReset('playerOne')}>Reset</button>
                    </PlayerPreview> :
                    <PlayerInput
                        id='playerOne'
                        label='Player 1'
                        onSubmit={handleSubmit}
                    />}
                {playerTwoImage ?
                    <PlayerPreview
                        id='playerTwo'
                        avatar={playerTwoImage}
                        userName={playerTwoName}>
                        <button className='reset' onClick={() => handleReset('playerTwo')}>Reset</button>
                    </PlayerPreview> :
                    <PlayerInput
                        id='playerTwo'
                        label='Player 2'
                        onSubmit={handleSubmit}
                    />}
            </div>
            {playerOneImage && playerOneImage ?
                <Link to={{
                    pathname: 'result',
                    search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                }} className='button'>Battle</Link> :
                null
            }
        </div>
    );
}

export default Battle