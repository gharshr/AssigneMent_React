import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar(props) {
    return (
        <div className={props.className}>
            <button type="click">
                <NavLink to="/">Login</NavLink>
            </button>
            <button type="click">
                <NavLink to="/Register">Register</NavLink>
            </button>
        </div>
    )
}

export default Navbar;