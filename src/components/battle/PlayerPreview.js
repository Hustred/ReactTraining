import {memo} from "react";

const PlayerPreview = memo(({avatar, userName, children}) => {
    return (
        <div>
            <div className='column'>
                <img className='avatar' src={avatar} alt='Avatar'/>
                <h2 className='username'>@{userName}</h2>
            </div>
            {children ? children : null}
        </div>
    );
})
export default PlayerPreview;