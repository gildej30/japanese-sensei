import React from 'react';
import RegForm from '../components/RegForm';
import {Link} from '@reach/router';

const Register = ({style}) => {
    return(
        <div className="container">
            <h1>Registration</h1>
            <RegForm style={style}/>
            <Link to="/">I already have an account</Link>
        </div>
    )
}

export default Register;