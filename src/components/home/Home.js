import LeaderboardTable from "./LeaderboardTable";
import {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfileStarsThunk} from "../redux/home/home.thunks";

const React = require('react');

const Home = () => {
    const dispatch = useDispatch();
    const profiles = useSelector(state => state.home.profiles)

    useEffect(() => {
        dispatch(getProfileStarsThunk());
    }, [dispatch])
    return (
        <Fragment>
            <h2>
                Leaderboard
            </h2>
            <LeaderboardTable profiles={profiles}/>
        </Fragment>
    )
}

export default Home;