import {
    HOME_GET_PROFILE_STARTS,
} from "./home.constants";
import Profiles from "./Profiles";

const initialState: Profiles = {
    profiles: []
}

const homeReducer = (state: Profiles = initialState, action: any) => {
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