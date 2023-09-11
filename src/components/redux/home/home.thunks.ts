import {getProfileStars} from "../../../utils/api";
import {getProfileStarts} from "./home.actions";

export const getProfileStarsThunk = () => {
    return (dispatch: Function) => {
        getProfileStars().then((profiles) => dispatch(getProfileStarts(profiles)))
    }
}