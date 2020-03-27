import React, {useState, useEffect, useContext} from 'react';
import Axios from 'axios';
import NavBar from '../components/NavBar';
import {Link, navigate} from '@reach/router';
import MyContext from '../contexts/MyContext';
import Audio from '../components/Audio';

const Dashboard = ({userScores, style, h}) => {

    const [hiragana, setHiragana] = useState([]);
    const context = useContext(MyContext);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/hiragana", { withCredentials: true })
            .then(res => {
                setIsAuthorized(true);
                setHiragana(res.data.hiragana);
                context.setVal(res.data.nickname);
            })
            .catch(err => navigate("/"))
    }, []);

    return (
        isAuthorized && 
        <div>
            <NavBar username={context.val} style={style}/>
            <div className="col-6 mx-auto justify-content-between" style={{backgroundImage: "url('/img/tokyo-tower.jpg'", backgroundSize: "100% 100%"}}>
                {userScores.map((lesson, i) => 
                    <Link key={i} to={`/lesson/${i}`} className={`btn btn-${lesson.lessonColor} ${lesson.type==="lesson" ? "col-4" : "col-9"} mx-2 my-3 
                        ${i>0 && userScores[i-1].lessonColor !== "success" && "disabled"}`}>{lesson.lessonName}</Link>
                )}
            </div>
{/* 
            {hiragana.map((h, idx) => {
                return <Audio key={idx} label={h} />
            })}  */}
        </div>
    )
}

export default Dashboard;