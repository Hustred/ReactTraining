import {Fragment} from "react";
import {TextField} from "@mui/material";

const EmailPassword = ({emailValue, passwordValue, emailCorrect, passwordCorrect, emailOnChange, passwordOnChange}) => {

    return <Fragment>
        <TextField label="Email" type="text" id="email" value={emailValue} error={!emailCorrect}
                   onChange={e => emailOnChange(e.target.value)}></TextField>
        <TextField label="Password" type="text" id="password" value={passwordValue} error={!passwordCorrect}
                   onChange={e => passwordOnChange(e.target.value)}></TextField>
    </Fragment>;
}

export default EmailPassword;
