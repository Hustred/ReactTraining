import {combineReducers} from "redux";
import popularReducer from "./popular/popular.reducer";
import battleReducer from "./battle/battle.reducer";
import homeReducer from "./home/home.reducer";

export default combineReducers({
    popular: popularReducer,
    battle: battleReducer,
    home: homeReducer
})