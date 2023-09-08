import {
    HOME_GET_PROFILE_STARTS,
} from "./home.constants";

const initialState = {
    profiles: []
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_GET_PROFILE_STARTS: {
            return {
                ...state,
                profiles: action.payload
            };
        }
        default:
            return state
    }
}

export default homeReducer