import { createSlice } from '@reduxjs/toolkit'
import BattleState from "./BattleState";

const initialState = {
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: '',
    playerTwoImage: '',
    winner: null,
    loser: null,
    loadingBattleResult: true
} as BattleState

const battleSlice = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        setBattlePlayerName(state: BattleState, action: { payload: { id: string, name: string | null}, type: string }) {
            if (action.payload.id === 'playerOne') {
                return {
                    ...state,
                    playerOneName: action.payload.name!
                };
            }
            if (action.payload.id === 'playerTwo') {
                return {
                    ...state,
                    playerTwoName: action.payload.name!
                };
            }
            return state
        },
        setBattlePlayerNameAndAvatar(state: BattleState,  action: { payload: { id: string, name: string | null , image: string | null}, type: string }) {
            if (action.payload.id === 'playerOne') {
                return {
                    ...state,
                    playerOneName: action.payload.name!,
                    playerOneImage: action.payload.image!
                };
            }
            if (action.payload.id === 'playerTwo') {
                return {
                    ...state,
                    playerTwoName: action.payload.name!,
                    playerTwoImage: action.payload.image!
                };
            }
            return state
        },
        defineBattleWinnerAndLoser(state: BattleState, action: { payload:  {winner: any, loser: any}, type: string }) {
            return {
                ...state,
                winner: action.payload.winner!,
                loser: action.payload.loser!,
                loadingBattleResult: false
            };
        },
        setBattleResultLoading(state: BattleState, action: { payload: boolean, type: string }) {
            return {
                ...state,
                loadingBattleResult: action.payload!
            };
        }
    }
})

export const { setBattlePlayerName, setBattlePlayerNameAndAvatar, defineBattleWinnerAndLoser,  setBattleResultLoading} = battleSlice.actions

export default battleSlice.reducer