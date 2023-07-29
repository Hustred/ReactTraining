import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect, useState} from "react";
import logo from "./logo.svg";

export default function ConfirmNotification({show, onOk, onClose, elementId}) {

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

    if (data.loaded) {
        return (
            <div>
                <Dialog
                    open={show}
                    onClose={() => onClose()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure that you want to delete list item?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={() => onClose()}>Disagree</Button>
                        <Button onClick={() => onOk(elementId)} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    } else {
        return <img src={logo} className="App-logo" alt="logo"/>
    }
}