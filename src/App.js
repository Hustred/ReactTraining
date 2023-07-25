import {useState} from "react";

import './App.css';

const App = () => {

  const [data, setData] = useState({name: 'Stepan', age: 25, textHidden: false, buttonHidden: false})

  const changeNameAndAge = () => {
    setData((prevState) => ({
      ...prevState,
      name: 'Mykola',
      age: 30
    }))
  }

  const changeTextVisibility = () => {
    setData((prevState) => ({
      ...prevState,
      textHidden: !prevState.textHidden,

    }))
  }

  const changeButtonVisibility = () => {
    setData((prevState) => ({
      ...prevState,
      buttonHidden: !prevState.buttonHidden,
    }))
  }

  return (
      <div className="App">
        {data.textHidden ? null :
            <header>
              <p>{data.name} age is {data.age} years</p>
            </header>
        }
        <button onClick={changeNameAndAge}>Change name and age</button>
        <button onClick={changeTextVisibility}>Change text visibility</button>
        <button onClick={changeButtonVisibility}>{data.buttonHidden ? 'Hidden' : 'Visible'}</button>
      </div>
  );
}

export default App;
