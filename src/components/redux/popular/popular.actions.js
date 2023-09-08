import {
    POPULAR_SET_ERRORS,
    POPULAR_SET_LOADING,
    POPULAR_SET_REPOS,
    POPULAR_SET_SELECTED_LANGUAGE
} from "./popular.constants";

export const setSelectedLanguage = (payload) => ({
    type: POPULAR_SET_SELECTED_LANGUAGE,
    payload
})

export const setLoading = (payload) => ({
    type: POPULAR_SET_LOADING,
    payload
})

export const setRepos = (payload) => ({
    type: POPULAR_SET_REPOS,
    payload
})

export const setErrors = (payload) => ({
    type: POPULAR_SET_ERRORS,
    payload
})