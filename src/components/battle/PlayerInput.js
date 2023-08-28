import {useDispatch, useSelector} from "react-redux";
import {setPlayerName} from "../redux/battle/battle.actions";

const PlayerInput = ({id, label, onSubmit}) => {
    const dispatch = useDispatch();
    const userNameOne = useSelector(state => state.battle.playerOneName)
    const userNameTwo = useSelector(state => state.battle.playerTwoName)

    const getUserName = () => {
        if (id === 'playerOne') {
            return userNameOne
        }
        if (id === 'playerTwo') {
            return userNameTwo
        }
        return '';
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (id === 'playerOne') {
            onSubmit(id, userNameOne);
        } else {
            onSubmit(id, userNameTwo);
        }
    }

    return (
        <form className='column' onSubmit={handleSubmit}>
            <label className='header' htmlFor={id}>{label}</label>
            <input
                type='text'
                id={id}
                placeholder='GitHub Username'
                autoComplete='off'
                value={getUserName()}
                onChange={(event) => dispatch(setPlayerName({name: event.target.value, id}))}
            />
            <button className='button' disabled={!getUserName().length}>Submit</button>
        </form>
    );
}
export default PlayerInput;