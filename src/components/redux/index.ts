import {configureStore} from "@reduxjs/toolkit";
import battleSlice from "./battle/battle.slice";
import popularSlice from "./popular/popular.slice";
import homeSlice from "./home/home.slice";

const store = configureStore({
    reducer: {
        popular: popularSlice,
        battle: battleSlice,
        home: homeSlice
    }
})

export default store;