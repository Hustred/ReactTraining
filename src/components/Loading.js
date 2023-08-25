import {Backdrop, CircularProgress} from "@mui/material";
import {memo} from "react";

const Loading = memo(({isLoading}) => {
    return (
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={isLoading}>
            <ul className='loader'>
                <CircularProgress size={150}/>
            </ul>
        </Backdrop>    );
})

export default Loading;