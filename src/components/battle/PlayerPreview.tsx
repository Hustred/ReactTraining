import React, {FC, memo} from "react";
import {PlayerPreviewProps} from "./PlayerPreviewProps";

const PlayerPreview: FC<PlayerPreviewProps> =  memo((props):JSX.Element => {
    return (
        <div id = {props.id}>
            <div className="column">
                <img className="avatar" src={props.avatar} alt="Avatar" />
                <h2 className="username">@{props.userName}</h2>
            </div>
            {props.children ? props.children : null}
        </div>
    );
});
export default PlayerPreview;
