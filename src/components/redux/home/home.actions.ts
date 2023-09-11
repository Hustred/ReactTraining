import {
    HOME_GET_PROFILE_STARTS
} from "./home.constants";

export const getProfileStarts = (payload: []) => ({
    type: HOME_GET_PROFILE_STARTS,
    payload
})
