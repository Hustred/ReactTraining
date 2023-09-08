import {getProfileStars} from "../../../utils/api";
import {getProfileStarts} from "./home.actions";

export const getProfileStarsThunk = () => {
    return (dispatch) => {
        getProfileStars().then((profiles) => dispatch(getProfileStarts(profiles)))
    }
}