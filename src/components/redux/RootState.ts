import PopularState from "./popular/PopularState";
import BattleState from "./battle/BattleState";
import Profiles from "./home/Profiles";

export interface RootState {
    popular: PopularState;
    battle: BattleState;
    home: Profiles
}
