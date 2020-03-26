import React, { useEffect, useState } from 'react';
import Logout from '../components/Logout';
import Audio from '../components/Audio';
import Axios from 'axios';
import { navigate } from '@reach/router';


const Main = () => {
    const [actions, setActions] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/api/actions", { withCredentials: true })
            .then(res => setActions(res.data))
            .catch(err => navigate("/"))
    }, []);
    return (
        <div>
            <h1>This is main page</h1>
            <Logout />
            <Audio id={} />
        </div>
    )
}

export default Main;