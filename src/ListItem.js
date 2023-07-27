import {useEffect, useState} from "react";

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

    return (
        <div>
            <li contentEditable="true" onInput={event => onUpdate(elementId, event.currentTarget.textContent)}> {text}
            </li> <button onClick={() => onDelete(elementId)}>Delete</button>
        </div>
    );
}

export default ListItem;
