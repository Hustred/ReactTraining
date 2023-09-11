export default interface BattleState {
    playerOneName: string;
    playerTwoName: string;
    playerOneImage: string | null;
    playerTwoImage: string | null;
    winner: any;
    loser: any;
    loadingBattleResult: boolean;
}
