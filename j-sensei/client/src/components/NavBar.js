import React from 'react';
import { Link } from '@reach/router';
import Logout from './Logout';

const NavBar = ({ style, username }) => {
    return (
        <nav style={style.navbar} className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand mr-auto" to="/dashboard">J-Sensei!</Link>
            <Link className="navbar-brand mr-auto" to="/dashboard">Learn</Link>
            <div className="dropdown show">
                <a className="navbar-brand dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Welcome, {username}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link className="dropdown-item" to="#">Account pofile</Link>
                    <Logout />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;