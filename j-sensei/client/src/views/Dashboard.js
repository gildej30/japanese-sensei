import React from 'react';
import {Link} from '@reach/router';

const Dashboard = ({userScores}) => {

    return (
        <div>
            <div className="col-6 mx-auto justify-content-between" style={{backgroundImage: "url('/img/tokyo-tower.jpg'", backgroundSize: "100% 100%"}}>
                {userScores.map((lesson, i) => 
                    <Link key={i} to={`/lesson/${i}`} className={`btn btn-${lesson.lessonColor} ${lesson.type==="lesson" ? "col-4" : "col-9"} mx-2 my-3 
                        ${i>0 && userScores[i-1].lessonColor !== "success" && "disabled"}`}>{lesson.lessonName}</Link>
                )}
            </div>
        </div>
    )
}

export default Dashboard;