import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import MultipleChoice from '../components/MultipleChoice';
import MatchGame from '../components/MatchGame';
import Axios from 'axios';

const Lesson = ({lesson, scoreUpdate, userScores}) => {

    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [pick, setPick] = useState(0);
    const [questionType, setQuestionType] = useState(0);
    const [dictionary, setDictionary] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/hiragana/dictionaries/" + lesson)
            .then(res => {
                let temp = [];
                for (let i = 0; i < res.data.length; i++) {
                    temp.push(res.data[i].romanji);
                }
                setDictionary(temp)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [lesson])

    const incrementQuestion = () => {
        setQuestionNumber(questionNumber + 1);
        setQuestionType(userScores[lesson].type === "lesson" ? Math.round(Math.random(0,1)) : 0);
        setPick(Math.floor(Math.random(0,dictionary.length)*dictionary.length));
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
            {questionNumber < 10 ?
                questionType === 0 && loaded ?
                    <MultipleChoice dictionary={dictionary}
                    lessonName={userScores[lesson].lessonName}
                    questionNumber={questionNumber}
                    score={score}
                    incrementQuestion={incrementQuestion}
                    incrementScore={incrementScore} 
                    alphabet={userScores[lesson].alphabet}
                    type={userScores[lesson].type} 
                    pick={pick} />
                    : loaded &&
                    <MatchGame dictionary={dictionary}
                    lessonName={userScores[lesson].lessonName}
                    questionNumber={questionNumber}
                    score={score}
                    incrementQuestion={incrementQuestion}
                    incrementScore={incrementScore}
                    alphabet={userScores[lesson].alphabet} />
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