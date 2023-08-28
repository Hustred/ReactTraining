import {
    BATTLE_DEFINE_WINNER_AND_LOSER,
    BATTLE_SET_BATTLE_RESULT_LOADING,
    BATTLE_SET_PLAYER_NAME,
    BATTLE_SET_PLAYER_NAME_AND_AVATAR,
} from "./battle.constants";

const initialState = {
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: null,
    playerTwoImage: null,
    winner: null,
    loser: null,
    loadingBattleResult: true
}

const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case BATTLE_SET_PLAYER_NAME: {
            if (action.payload.id === 'playerOne') {
                return {
                    ...state,
                    playerOneName: action.payload.name
                };
            }
            if (action.payload.id === 'playerTwo') {
                return {
                    ...state,
                    playerTwoName: action.payload.name
                };
            }
            return state
        }
        case BATTLE_SET_PLAYER_NAME_AND_AVATAR: {
            if (action.payload.id === 'playerOne') {
                return {
                    ...state,
                    playerOneName: action.payload.name,
                    playerOneImage: action.payload.image
                };
            }
            if (action.payload.id === 'playerTwo') {
                return {
                    ...state,
                    playerTwoName: action.payload.name,
                    playerTwoImage: action.payload.image
                };
            }
            return state
        }
        case BATTLE_DEFINE_WINNER_AND_LOSER: {
            return {
                ...state,
                winner: action.payload.winner,
                loser: action.payload.loser,
                loadingBattleResult: false
            };
        }
        case BATTLE_SET_BATTLE_RESULT_LOADING: {
            return {
                ...state,
                loadingBattleResult: action.payload
            };
        }
        default:
            return state
    }
}

export default battleReducer