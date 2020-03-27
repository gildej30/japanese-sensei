import React, { useContext } from 'react';
import { Link } from '@reach/router';
import Logout from './Logout';
import MyContext from '../contexts/MyContext';

const NavBar = ({ style }) => {
    const context = useContext(MyContext);
    return (
        <nav style={style.navbar} className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand mr-auto" to="/dashboard">J-Sensei!</Link>
            <Link className="navbar-brand mr-auto" to="/dashboard">Learn</Link>
            <div className="dropdown show">
                <Link className="navbar-brand dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Welcome, {context.val}
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link className="dropdown-item" to="#">Account pofile</Link>
                    <Logout />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;