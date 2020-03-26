import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = ({style}) => {
    return(
        <div className="container">
            <h1>J-Sensei</h1>
            <LoginForm style={style}/>
        </div>
    )
}

export default Login;