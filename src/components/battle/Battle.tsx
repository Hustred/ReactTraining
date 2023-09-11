import React, {useCallback} from "react";
import PlayerPreview from "./PlayerPreview";
import PlayerInput from "./PlayerInput";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/RootState";
import {setBattlePlayerNameAndAvatar} from "../redux/battle/battle.slice";

const Battle = (): JSX.Element => {
    const dispatch = useDispatch();
    const playerOneName = useSelector((state: RootState) => state.battle.playerOneName);
    const playerTwoName = useSelector((state: RootState) => state.battle.playerTwoName);
    const playerOneImage = useSelector((state: RootState) => state.battle.playerOneImage);
    const playerTwoImage = useSelector((state: RootState) => state.battle.playerTwoImage);


    const handleSubmit = useCallback(
        (id: string, userName: string) => {
            dispatch(
                setBattlePlayerNameAndAvatar({
                    name: userName,
                    id,
                    image: `https://github.com/${userName}.png?size200`,
                })
            );
        },
        [dispatch]
    );

    const handleReset = (id: string) => {
        dispatch(setBattlePlayerNameAndAvatar({name: "", id, image: null}));
    };

    return (
        <div>
            <div className="row">
                {playerOneImage ? (
                    <PlayerPreview
                        id="playerOne"
                        avatar={playerOneImage}
                        userName={playerOneName}
                    >
                        <button className="reset" onClick={() => handleReset("playerOne")}>
                            Reset
                        </button>
                    </PlayerPreview>
                ) : (
                    <PlayerInput
                        id="playerOne"
                        label="Player 1"
                        onSubmit={handleSubmit}
                    />
                )}
                {playerTwoImage ? (
                    <PlayerPreview
                        id="playerTwo"
                        avatar={playerTwoImage}
                        userName={playerTwoName}
                    >
                        <button className="reset" onClick={() => handleReset("playerTwo")}>
                            Reset
                        </button>
                    </PlayerPreview>
                ) : (
                    <PlayerInput
                        id="playerTwo"
                        label="Player 2"
                        onSubmit={handleSubmit}
                    />
                )}
            </div>
            {playerOneImage && playerOneImage ? (
                <Link
                    to={{
                        pathname: "result",
                        search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
                    }}
                    className="button"
                >
                    Battle
                </Link>
            ) : null}
        </div>
    );
}

export default Battle;