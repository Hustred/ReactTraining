import {Fragment, useState} from "react";
import {TextField} from "@mui/material";
import {validateName} from "./Validation";

const FirstLastName = ({allValidated}) => {

    const [data, setData] = useState({
        firstNameCorrect: false,
        lastNameCorrect: false
    });

    const validateFirstName = (value) => {
        var newValue = validateName(value);
        setData((prevState) => ({
            ...prevState,
            firstNameCorrect: newValue,
        }))
        allValidated(newValue && data.lastNameCorrect)
    }

    const validateLastName = (value) => {
        var newValue = validateName(value);
        setData((prevState) => ({
            ...prevState,
            lastNameCorrect: newValue,
        }))
        allValidated(data.firstNameCorrect && newValue)
    }

    return <Fragment>
        <TextField label="First Name" type="text" id="firstName" error={!data.firstNameCorrect}
                   onChange={e => validateFirstName(e.target.value)}></TextField>
        <TextField label="Last Name" type="text" id="lastName" error={!data.lastNameCorrect}
                   onChange={e => validateLastName(e.target.value)}></TextField>
    </Fragment>;
}

export default FirstLastName;
