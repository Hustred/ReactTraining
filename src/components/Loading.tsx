import { Backdrop, CircularProgress } from "@mui/material";
import React, { memo, ReactNode } from "react";

interface LoadingProps {
    isLoading: boolean;
}

const Loading = memo(({ isLoading }: LoadingProps): ReactNode => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
        >
            <ul className='loader'>
                <CircularProgress size={150} />
            </ul>
        </Backdrop>
    );
});

export default Loading;