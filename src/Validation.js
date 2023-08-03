const validateName = (name) => {
    var regex = /\d+/g;
    var matches = name.match(regex);
    return name.length > 2 && matches == null;
};

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validatePassword = (password) => {
    return String(password)
        .match(
            /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
        ) && password.length > 5 && password.length < 11;
};

export { validateName, validateEmail, validatePassword };