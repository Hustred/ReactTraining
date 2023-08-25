import {Fragment, memo} from "react";

const languages = ['All', 'Javascript', 'Java', 'Ruby', 'Python', 'CSS'];
const LanguageSelector = memo( ({selectedLanguage, handleLanguageIndexChange}) => {

    const selectedLanguageIndex = languages.indexOf(selectedLanguage);

    return (
        <Fragment>
            <ul className='languages'>
                {languages.map((language, index) => (
                    <li
                        key={index}
                        id={languages[index]}
                        style={{color: index === selectedLanguageIndex ? '#d0021b' : '#000000'}}
                        onClick={handleLanguageIndexChange}>
                        {language}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
});

export default LanguageSelector;