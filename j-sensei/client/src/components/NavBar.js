import React from 'react';
import {Link} from '@reach/router';

const NavBar = ({style, username}) => {
    return (
        <nav style={style.navbar} className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand mr-auto" to="/dashboard">J-Sensei!</Link>
            <Link className="navbar-brand mr-auto" to="/dashboard">Learn</Link>
            <span className="navbar-text">Welcome, {username}!</span>
        </nav>
    )
}

export default NavBar;