import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import Audio from '../components/Audio';
import Axios from 'axios';

const Dashboard = ({userScores, h}) => {

    const [hiragana, setHiragana] = useState([]);
    
    useEffect(() => {
        Axios.get("http://localhost:8000/api/hiragana/")
            .then(res => setHiragana(res.data))
    },[]) 

    return (
        <div>
            {userScores.map((lesson, i) => {
                return <Link key={i} to={`/lesson/${i+1}`} className={`btn btn-${lesson.lessonColor} mx-2 ${i>0 && userScores[i-1].highScore<5 && "disabled"}`}>{lesson.lessonName}</Link>
            }
            )}

            {hiragana.map((h, idx) => {
                return <Audio key={idx} label={h} />
            })} 
        </div>
    )
}


export default Dashboard;