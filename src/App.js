import './App.css';
import {Button, FormControl, FormLabel} from "@mui/material";
import FirstLastName from "./FirstLastName";
import {useState} from "react";
import EmailPassword from "./EmailPassword";
import {validateEmail, validatePassword} from "./Validation";

const App = () => {

    const [data, setData] = useState({
        firstAndLastNameCorrect: false,
        emailValue: "",
        passwordValue: "",
        emailCorrect: false,
        passwordCorrect: false
    });

    const firstAndLastNameValidation = (value) => {
        setData((prevState) => ({
            ...prevState,
            firstAndLastNameCorrect: value,
        }))
    }

    const updateEmail = (newValue) => {
        setData((prevState) => ({
            ...prevState,
            emailValue: newValue,
            emailCorrect: validateEmail(newValue)
        }))
    }

    const updatePassword = (newValue) => {
        setData((prevState) => ({
            ...prevState,
            passwordValue: newValue,
            passwordCorrect: validatePassword(newValue)
        }))
    }


    return (
        <FormControl>
            <FormLabel>Input all form values</FormLabel>
            <FirstLastName allValidated={firstAndLastNameValidation}/>
            <EmailPassword passwordValue={data.passwordValue} passwordCorrect={data.passwordCorrect}
                           passwordOnChange={updatePassword}
                           emailValue={data.emailValue} emailCorrect={data.emailCorrect} emailOnChange={updateEmail}/>
            <Button disabled={!data.firstAndLastNameCorrect || !data.emailCorrect || !data.passwordCorrect}>Submit</Button>
        </FormControl>
    );
}

export default App;
