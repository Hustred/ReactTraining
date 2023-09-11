import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../redux/RootState";
import React, {FC} from "react";
import {setBattlePlayerName} from "../redux/battle/battle.slice";

const PlayerInput: FC<{ id: string, label: string, onSubmit: Function }> = ({ id, label, onSubmit }) => {
    const dispatch = useDispatch();
    const userNameOne = useSelector((state: RootState) => state.battle.playerOneName);
    const userNameTwo = useSelector((state: RootState) => state.battle.playerTwoName);

    const getUserName = () => {
        if (id === "playerOne") {
            return userNameOne;
        }
        if (id === "playerTwo") {
            return userNameTwo;
        }
        return "";
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (id === "playerOne") {
            onSubmit(id, userNameOne);
        } else {
            onSubmit(id, userNameTwo);
        }
    };

    return (
        <form className="column" onSubmit={handleSubmit}>
            <label className="header" htmlFor={id}>
                {label}
            </label>
            <input
                type="text"
                id={id}
                placeholder="GitHub Username"
                autoComplete="off"
                value={getUserName()}
                onChange={(event) =>
                    dispatch(setBattlePlayerName({ name: event.target.value, id }))
                }
            />
            <button className="button" disabled={!getUserName().length}>
                Submit
            </button>
        </form>
    );
};
export default PlayerInput;
