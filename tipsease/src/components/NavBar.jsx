import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            Tipsease
            <NavLink to='/home'>Home</Link>
            <NavLink to='/profile'></NavLink>
            <button>Logout</button>
        </div>
    )
}