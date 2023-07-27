import {useEffect, useState} from "react";
import logo from './logo.svg';

const ListItem = ({elementId, text, onDelete, onUpdate}) => {

    const [data, setData] = useState({
        loaded: false
    });

    const finishLoading = () => {
        setData((prevState) => ({
            ...prevState,
            loaded: true,
        }))
    }

    useEffect(() => {
        if (!data.loaded) {
            finishLoading();
        }
    });

    if(data.loaded) {
        return (
            <div>
                <li contentEditable="true"
                    onInput={event => onUpdate(elementId, event.currentTarget.textContent)}> {text}
                </li>
                <button onClick={() => onDelete(elementId)}>Delete</button>
            </div>
        );
    } else {
        return <img src={logo} className="App-logo" alt="logo" />
    }
}

export default ListItem;
