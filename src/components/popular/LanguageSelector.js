import {Fragment, memo} from "react";
import {useDispatch} from "react-redux";
import {setSelectedLanguage} from "../redux/popular/popular.actions";

const languages = ['All', 'Javascript', 'Java', 'Ruby', 'Python', 'CSS'];
const LanguageSelector = memo( ({selectedLanguageIndex}) => {

    const dispatch = useDispatch();
    return (
        <Fragment>
            <ul className='languages'>
                {languages.map((language, index) => (
                    <li
                        key={index}
                        id={languages[index]}
                        style={{color: index === selectedLanguageIndex ? '#d0021b' : '#000000'}}
                        onClick={() => dispatch(setSelectedLanguage(index))}>
                        {language}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
});

export default LanguageSelector;