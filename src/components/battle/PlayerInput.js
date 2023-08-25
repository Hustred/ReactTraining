import {useState} from "react";

const PlayerInput = ({id, label, onSubmit}) => {
    const [userName, setUserName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(id, userName);
    }

    return (
        <form className='column' onSubmit={handleSubmit}>
            <label className='header' htmlFor={id}>{label}</label>
            <input
                type='text'
                id={id}
                placeholder='GitHub Username'
                autoComplete='off'
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <button className='button' disabled={!userName.length}>Submit</button>
        </form>
    );
}
export default PlayerInput;