import {
    BATTLE_SET_PLAYER_NAME,
} from "./battle.constants";

const initialState = {
    playerOneName: '',
    playerTwoName: ''
}

const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case BATTLE_SET_PLAYER_NAME:
        {
            if(action.payload.id === 'playerOne') {
                return {
                    ...state,
                    playerOneName: action.payload.name
                };
            } else {
                return {
                    ...state,
                    playerTwoName: action.payload.name
                };
            }
        }
        default:
            return state
    }
}

export default battleReducer