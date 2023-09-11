import React, { Fragment, memo } from "react";
import { useDispatch } from "react-redux";
import { setSelectedLanguage } from "../redux/popular/popular.slice";

const languages: string[] = ['All', 'Javascript', 'Java', 'Ruby', 'Python', 'CSS'];
const LanguageSelector = memo(({ selectedLanguageIndex }: { selectedLanguageIndex: number }) => {

    const dispatch = useDispatch();
    return (
        <Fragment>
            <ul className='languages'>
                {languages.map((language, index) => (
                    <li
                        key={index}
                        id={languages[index]}
                        style={{ color: index === selectedLanguageIndex ? '#d0021b' : '#000000' }}
                        onClick={() => dispatch(setSelectedLanguage(index))}>
                        {language}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
});

export default LanguageSelector;