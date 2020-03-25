import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import NavBar from '../components/NavBar';
import {Link, navigate} from '@reach/router';

const Dashboard = ({userScores, style}) => {
    const [hiraganas, setHiraganas] = useState([]);
    const [username, setUsername] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    useEffect(() => {
        Axios.get("http://localhost:8000/api/hiragana", { withCredentials: true })
            .then(res => {
                setIsAuthorized(true);
                setHiraganas(res.data);
                setUsername(res.data.nickname);
            })
            .catch(err => navigate("/"))
    }, [hiraganas]);
    return (
        isAuthorized && 
            <div>
            <NavBar username={username} style={style}/>
                {userScores.map((lesson, i) => 
                    <Link key={i} to={`/lesson/${i+1}`} className={`btn btn-${lesson.lessonColor} mx-2 ${i>0 && userScores[i-1].highScore<5 && "disabled"}`}>{lesson.lessonName}</Link>
                )}
            </div>
    )
}

export default Dashboard;