import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            Tipsease
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <button>Logout</button>
        </div>
    )
}