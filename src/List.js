import {useEffect, useRef, useState} from "react";
import ListItem from './ListItem.js';

const List = () => {

    const [data, setData] = useState({
        listItems: [],
        loaded: false
    });
    const ref = useRef(null);

    useEffect(() => {
        if (!data.loaded) {
            getListData();
        }
    });

    const getListData = () => {
        fetch("http://localhost:3002/listItems", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(response => response.json())
            .then(data => {
                    const listItems = data.map((listItem) => (
                        {id: listItem.id, text: listItem.text}
                    ));
                    setData({listItems: listItems, loaded: true});
                }
            )
    }

    const createListItem = (listItemId, listItemText) => {
        fetch("http://localhost:3002/listItems/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: listItemId, text: listItemText})
        }).then(response => {
            if (response.ok) {
                setData({listItems: data.listItems.concat({id: listItemId, text: listItemText}).sort((a, b) => a.id - b.id), loaded: true})
            }
        })
    }

    const updateListItem = (listItemId, listItemText) => {
        fetch("http://localhost:3002/listItems/" + listItemId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: listItemId, text: listItemText})
        }).then(response => {
            if (response.ok) {
                setData({listItems: data.listItems
                        .filter(item => item.id !== listItemId)
                        .concat({id: listItemId, text: listItemText})
                        .sort((a, b) => a.id - b.id),
                    loaded: true})
            }
        })
    }

    const deleteListItem = (listItemId) => {
        fetch("http://localhost:3002/listItems/" + listItemId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(response => {
            if (response.ok) {
                setData({listItems: data.listItems.filter(item => item.id !== listItemId), loaded: true})
            }
        })
    }

    return (
        <div>
            <div>
                <input id="create_input" ref={ref} type="text"></input>
                <button onClick={() => createListItem(data.listItems.length + 1, ref.current.value)}>Create</button>
            </div>
            <ul>{data.listItems.map((listItemObj) => <ListItem elementId={listItemObj.id} text={listItemObj.text} onUpdate={updateListItem} onDelete={deleteListItem}/>)}</ul>
        </div>
    );
}

export default List;
