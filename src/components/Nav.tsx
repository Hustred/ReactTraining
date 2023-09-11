import { NavLink, Outlet } from 'react-router-dom';
import React from "react";

const Nav = () => {
    return (
        <>
            <ul className='nav'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/popular'>Popular</NavLink></li>
                <li><NavLink to='/battle'>Battle</NavLink></li>
                <li><NavLink to='/battle/result'>Battle Result</NavLink></li>
            </ul>
            <Outlet/>
        </>
    )
}

export default Nav;