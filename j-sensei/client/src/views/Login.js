import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = ({style}) => {
    return(
        <div className="container">
            <h1>Welcome</h1>
            <LoginForm style={style}/>
        </div>
    )
}

export default Login;