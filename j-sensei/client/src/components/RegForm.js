import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const RegForm = ({style}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", {firstName, lastName, nickname, email, password, confirmPassword})
            .then(res => navigate("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    return(
        <div className="row justify-content-center">
            <div className="card col-4" style={style.card}>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label style={style.label}>First Name:</label>
                        <input className="form-control" 
                            type="text" 
                            onChange={e => { setFirstName(e.target.value)}} 
                            value={firstName}/>
                        <div style={style.invalid}>{errors.firstName ? errors.firstName.message : null}</div>
                    </div>
                    <div className="form-group">
                        <label style={style.label}>Last Name:</label>
                        <input className="form-control" 
                        type="text" 
                        onChange={e => { setLastName(e.target.value) }} 
                        value={lastName}/>
                        <div style={style.invalid}>{errors.lastName ? errors.lastName.message : null}</div>
                    </div>
                    <div className="form-group">
                        <label style={style.label}>Nickname:</label>
                        <input className="form-control" 
                        type="text" 
                        onChange={e => { setNickname(e.target.value) }} 
                        value={nickname}/>
                        <div style={style.invalid}>{errors.nickname ? errors.nickname.message : null}</div>
                    </div>
                    <div className="form-group">
                        <label style={style.label}>Email:</label>
                        <input className="form-control" 
                        type="email" 
                        onChange={e => { setEmail(e.target.value) }} 
                        value={email}/>
                        <div style={style.invalid}>{errors.email ? errors.email.message : null}</div>
                    </div>
                    <div className="form-group">
                        <label style={style.label}>Password:</label>
                        <input className="form-control" 
                            type="password" 
                            onChange={e => { setPassword(e.target.value) }} 
                            value={password}/>
                            <div style={style.invalid}>{errors.password ? errors.password.message : null}</div>
                    </div>
                    <div className="form-group">
                        <label style={style.label}>Confirm password:</label>
                        <input className="form-control" 
                            type="password" 
                            onChange={e => { setConfirmPassword(e.target.value) }} 
                            value={confirmPassword}/>
                            <div style={style.invalid}>{errors.confirmPassword ? errors.confirmPassword.message : null}</div>
                    </div>
                    <input className="btn btn-danger" type="submit" value="Register" />
                </form>
            </div>
        </div>
    )
}

export default RegForm;