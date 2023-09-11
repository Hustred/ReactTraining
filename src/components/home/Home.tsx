import LeaderboardTable from "./LeaderboardTable";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../redux/RootState";
import {getProfileStarsThunk} from "../redux/home/home.slice";

const Home = (): JSX.Element => {
    const dispatch = useDispatch<ThunkDispatch<unknown, unknown, AnyAction>>();
    const profiles = useSelector((state: RootState) => state.home.profiles);

    useEffect(() => {
        dispatch(getProfileStarsThunk());
    }, [dispatch]);

    return (
        <Fragment>
            <h2>
                Leaderboard
            </h2>
            <LeaderboardTable profiles={profiles} />
        </Fragment>
    );
}

export default Home;