import {
    BATTLE_DEFINE_WINNER_AND_LOSER, BATTLE_SET_BATTLE_RESULT_LOADING,
    BATTLE_SET_PLAYER_NAME,
    BATTLE_SET_PLAYER_NAME_AND_AVATAR
} from "./battle.constants";

export const setPlayerName = (payload) => ({
    type: BATTLE_SET_PLAYER_NAME,
    payload
})

export const setPlayerNameAndImage = (payload) => ({
    type: BATTLE_SET_PLAYER_NAME_AND_AVATAR,
    payload
})

export const defineWinnerAndLoser = (payload) => ({
    type: BATTLE_DEFINE_WINNER_AND_LOSER,
    payload
})

export const setBattleResultLoading = (payload) => ({
    type: BATTLE_SET_BATTLE_RESULT_LOADING,
    payload
})