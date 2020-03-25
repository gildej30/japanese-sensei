import React from 'react';
import {Link} from '@reach/router';

const Dashboard = ({userScores}) => {

    return (
        <div>
            {userScores.map((lesson, i) => 
                <Link key={i} to={`/lesson/${i+1}`} className={`btn btn-${lesson.lessonColor} mx-2 ${i>0 && userScores[i-1].highScore<5 && "disabled"}`}>{lesson.lessonName}</Link>
            )}
        </div>
    )
}

export default Dashboard;