import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import Profiles from "./Profiles";
import {getProfileStars} from "../../../utils/api";

const initialState: Profiles = {
    profiles: []
}

export const getProfileStarsThunk = createAsyncThunk('home/getProfileStarsThunk' , async () => {
    return await getProfileStars()
})

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProfileStarsThunk.fulfilled , (state, action) => {
            return {
                ...state,
                profiles: action.payload
            };
        })
    }
})

export default homeSlice.reducer