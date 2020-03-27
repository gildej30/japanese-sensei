import React, { useContext } from 'react';
import { Link } from '@reach/router';
import Logout from './Logout';
import MyContext from '../contexts/MyContext';

const NavBar = ({ style, username }) => {
    const context = useContext(MyContext);
    return (
        <nav style={style.navbar} className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand mr-auto" to="/dashboard">J-Sensei!</Link>
            <Link className="navbar-brand mr-auto" to="/dashboard">Learn</Link>
            <div className="dropdown show">
                <a className="navbar-brand dropdown-toggle" href="/dashboard" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Welcome, {username}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link className="dropdown-item" to="#">Account profile</Link>
                    <Logout />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;