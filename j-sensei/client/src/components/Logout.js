import React from 'react';
import {Link, navigate} from '@reach/router';
import Axios from 'axios';

const Logout = () => {
    const leave = () => {
        Axios.get("http://localhost:8000/api/logout",{withCredentials:true})
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return(
        <button className="btn btn-primary" onClick={() => leave()}>Logout</button>
    )
}

export default Logout;