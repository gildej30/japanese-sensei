import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import MultipleChoice from '../components/MultipleChoice';
import MatchGame from '../components/MatchGame';
import Axios from 'axios';

const Lesson = ({lesson, scoreUpdate, userScores}) => {

    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [questionType, setQuestionType] = useState(0);
    const [dictionary, setDictionary] = useState(["a","e","i","o","u"]);
    const [loaded, setLoaded] = useState([false]);
    
    // useEffect(() => {
    //     Axios.get("http://localhost:8000/api/hiragana/dictionaries/" + (lesson-1))
    //         .then(res => {
    //             let temp = [];
    //             for (let i = 0; i < res.data.length; i++) {
    //                 temp.push(res.data[i].romanji);
    //             }
    //             setDictionary(temp)
    //             setLoaded(true)
    //         })
    //         .catch(err => console.log(err))
    // }, [lesson])

    const incrementQuestion = () => {
        setQuestionNumber(questionNumber + 1);
        setQuestionType(Math.round(Math.random(0,1)));
    }
    
    const incrementScore = () => {
        setScore(score + 1);
    }
    
    const dashboardReturn = e => {
        e.preventDefault();
        scoreUpdate(lesson, score);
        navigate("/");
    }

    return (
        <div>
            {questionNumber < 5 ?
                questionType === 0 ? 
                    <MultipleChoice dictionary={dictionary}
                    lesson={userScores[lesson-1].lessonName}
                    questionNumber={questionNumber}
                    score={score}
                    incrementQuestion={incrementQuestion}
                    incrementScore={incrementScore} />
                    : 
                    <MatchGame dictionary={dictionary}
                    lesson={userScores[lesson-1].lessonName}
                    questionNumber={questionNumber}
                    score={score}
                    incrementQuestion={incrementQuestion}
                    incrementScore={incrementScore} />
                :
                <div className="col-5 mx-auto">
                    <h2>Final Score: {score}</h2>
                    <h3>Great Job!</h3>
                    <button className="btn btn-success" onClick={dashboardReturn}>Continue</button>
                </div>}
        </div>
    )

}

export default Lesson;