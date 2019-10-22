import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar({logout}) {
    return (
        <div>
            Tipsease
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='./register'>Sign Up</NavLink>
            <button onClick={logout}>Logout</button>
        </div>
    )
}