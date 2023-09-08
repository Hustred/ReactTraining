import {
    POPULAR_SET_ERRORS,
    POPULAR_SET_LOADING,
    POPULAR_SET_REPOS,
    POPULAR_SET_SELECTED_LANGUAGE
} from "./popular.constants";

const initialState = {
    selectedLanguageIndex: 0,
    loading: false,
    repos: [],
    error: false
}

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR_SET_SELECTED_LANGUAGE:
            return {
                ...state,
                selectedLanguageIndex: action.payload
            };
        case POPULAR_SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case POPULAR_SET_REPOS:
            return {
                ...state,
                repos: action.payload
            };
        case POPULAR_SET_ERRORS:
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state;
    }
}

export default popularReducer