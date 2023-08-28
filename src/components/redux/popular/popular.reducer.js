import {POPULAR_SET_SELECTED_LANGUAGE} from "./popular.constants";

const initialState = {
    selectedLanguageIndex: 0
}

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR_SET_SELECTED_LANGUAGE:
            return {
                ...state,
                selectedLanguageIndex: action.payload
            };
        default:
            return state;
    }
}

export default popularReducer