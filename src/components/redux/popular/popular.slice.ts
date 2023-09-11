import { createSlice } from '@reduxjs/toolkit'
import PopularState from "./PopularState";

const initialState: PopularState = {
    selectedLanguageIndex: 0,
    loading: false,
    repos: [],
    error: false
}

const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        setSelectedLanguage(state: PopularState, action: {  payload: number, type: string }) {
            return {
                ...state,
                selectedLanguageIndex: action.payload
            };
        },
        setLoading(state: PopularState,  action: { payload: boolean, type: string }) {
            return {
                ...state,
                loading: action.payload
            };
        },
        setRepos(state: PopularState, action: { payload: [], type: string }) {
            return {
                ...state,
                repos: action.payload
            };
        },
        setErrors(state: PopularState, action: { payload: boolean, type: string }) {
            return {
                ...state,
                errors: action.payload
            };
        }
    }
})

export const { setSelectedLanguage, setLoading, setRepos,  setErrors} = popularSlice.actions

export default popularSlice.reducer