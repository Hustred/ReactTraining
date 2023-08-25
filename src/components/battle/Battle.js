import {useCallback, useState} from "react";
import PlayerPreview from "./PlayerPreview";
import PlayerInput from "./PlayerInput";
import {Link} from "react-router-dom";

const Battle = () => {
    const [playerData, setPlayerData] = useState({
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    });

    const handleSubmit = useCallback((id, userName) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: userName,
            [`${id}Image`]: `https://github.com/${userName}.png?size200`
        }))
    }, [] );

    const handleReset = (id) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: '',
            [`${id}Image`]: null
        }))
    }

    return (
        <div>
            <div className='row'>
                {playerData.playerOneImage ?
                    <PlayerPreview
                        id='playerOne'
                        avatar={playerData.playerOneImage}
                        userName={playerData.playerOneName}>
                        <button className='reset' onClick={() => handleReset('playerOne')}>Reset</button>
                    </PlayerPreview> :
                    <PlayerInput
                        id='playerOne'
                        label='Player 1'
                        onSubmit={handleSubmit}
                    />}
                {playerData.playerTwoImage ?
                    <PlayerPreview
                        id='playerTwo'
                        avatar={playerData.playerTwoImage}
                        userName={playerData.playerTwoName}>
                        <button className='reset' onClick={() => handleReset('playerTwo')}>Reset</button>
                    </PlayerPreview> :
                    <PlayerInput
                        id='playerTwo'
                        label='Player 2'
                        onSubmit={handleSubmit}
                    />}
            </div>
            {playerData.playerOneImage && playerData.playerOneImage ?
                <Link to={{
                    pathname: 'result',
                    search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`
                }} className='button'>Battle</Link> :
                null
            }
        </div>
    );
}

export default Battle