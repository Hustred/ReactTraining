import {useEffect, useRef, useState} from "react";
import ListItem from './ListItem.js';
import logo from './logo.svg';
import ConfirmNotification from "./ConfirmNotification";

const List = () => {

    const [data, setData] = useState({
        listItems: [],
        loaded: false,
        openDialog: false,
        elementIdForDeletion: null
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
                    setData({listItems: listItems, loaded: true, openDialog: false, elementIdForDeletion: null});
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
                setData({
                    listItems: data.listItems.concat({
                        id: listItemId,
                        text: listItemText,
                        openDialog: false,
                        elementIdForDeletion: null
                    }).sort((a, b) => a.id - b.id), loaded: true
                })
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
                setData({
                    listItems: data.listItems
                        .filter(item => item.id !== listItemId)
                        .concat({id: listItemId, text: listItemText})
                        .sort((a, b) => a.id - b.id),
                    loaded: true,
                    openDialog: false,
                    elementIdForDeletion: null
                })
            }
        })
    }

    const handleClose = () => {
        setData((prevState) => ({
            ...prevState,
            listItems: prevState.listItems,
            loaded: prevState.loaded,
            openDialog: false,
            elementIdForDeletion: null
        }))
    };

    const openDialogBox = (elementId) => {
        setData((prevState) => ({
            ...prevState,
            listItems: prevState.listItems,
            loaded: prevState.loaded,
            openDialog: true,
            elementIdForDeletion: elementId
        }))
    };

    const deleteListItem = (listItemId) => {
        fetch("http://localhost:3002/listItems/" + listItemId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(response => {
            if (response.ok) {
                setData({listItems: data.listItems.filter(item => item.id !== listItemId), loaded: true, openDialog: false, elementIdForDeletion: null})
            }
        })
    }

    if (data.loaded) {
        return (
            <div>
                <div>
                    <input id="create_input" ref={ref} type="text"></input>
                    <button onClick={() => createListItem(Math.max.apply(Math, data.listItems.map(listItem => listItem.id)) + 1, ref.current.value)}>Create</button>
                </div>
                <ul>{data.listItems.map((listItemObj) => <ListItem elementId={listItemObj.id} key={listItemObj.id} text={listItemObj.text}
                                                                   onUpdate={updateListItem}
                                                                   onDelete={openDialogBox}/>)}</ul>
                <ConfirmNotification show={data.openDialog} onOk={deleteListItem} onClose={handleClose} elementId={data.elementIdForDeletion}/>
            </div>
        );
    } else {
        return <img src={logo} className="App-logo" alt="logo"/>
    }
}

export default List;
