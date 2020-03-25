import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import {Link} from '@reach/router';


const LoginForm = ({style}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const signIn = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", {email, password},{withCredentials:true})
            .then(res => {
                res.data.msg === "success" ? navigate("/dashboard") : setErrors(res.data);
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="card col-4" style={style.card}>
                    <form onSubmit={e => signIn(e)}>
                        <div className="form-group">
                            <label style={style.label}>Email:</label>
                            <input className="form-control"
                                type="email"
                                onChange={e => { setEmail(e.target.value) }}
                                value={email} />
                            <div style={style.invalid}>{errors.msg ? errors.msg : null}</div>
                        </div>
                        <div className="form-group">
                            <label style={style.label}>Password:</label>
                            <input className="form-control"
                                type="password"
                                onChange={e => { setPassword(e.target.value) }}
                                value={password} />
                        </div>
                        <input className="btn btn-primary" type="submit" value="Sign in" />
                    </form>
                </div>
            </div>
            <Link to="/register">Create an account</Link>
        </div>

    )
}

export default LoginForm;