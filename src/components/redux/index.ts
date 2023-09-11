import {configureStore} from "@reduxjs/toolkit";
import popularReducer from "./popular/popular.reducer";
import battleReducer from "./battle/battle.reducer";
import homeReducer from "./home/home.reducer";

const store = configureStore({
    reducer: {
        popular: popularReducer,
        battle: battleReducer,
        home: homeReducer
    }
})

export default store;