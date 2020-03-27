import React, { useState, useContext, useEffect } from 'react';
import { navigate } from '@reach/router';
import MultipleChoice from '../components/MultipleChoice';
import NavBar from '../components/NavBar';
import MatchGame from '../components/MatchGame';
import { LessonData } from '../data/LessonData';
import MyContext from '../contexts/MyContext';
import Axios from 'axios';

const Lesson = ({ lesson, scoreUpdate, style, currentProgress }) => {

    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [pick, setPick] = useState(0);
    const [questionType, setQuestionType] = useState(0);
    const context = useContext(MyContext);
    const [dictionary, setDictionary] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/hiragana/dictionaries/" + lesson)
            .then(res => {
                let temp = [];
                for (let i = 0; i < res.data.length; i++) {
                    temp.push(res.data[i]);
                }
                setDictionary(temp)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [lesson])

    const incrementQuestion = () => {
        setQuestionNumber(questionNumber + 1);
        setQuestionType(LessonData[lesson].type === "lesson" ? Math.floor(Math.random() * 5) : 0);
        setPick(Math.floor(Math.random(0, dictionary.length) * dictionary.length));
    }

    const incrementScore = () => {
        setScore(score + 1);
    }

    const dashboardReturn = e => {
        e.preventDefault();
        console.log(score);
        console.log(LessonData[lesson].type);
        if (((LessonData[lesson].type === "lesson" && score >= 9) || (LessonData[lesson].type === "quiz" && score === 10)) && parseInt(lesson) === currentProgress) {
            scoreUpdate(lesson);
        }
        navigate("/dashboard");
    }

    return (
        <div>
            <NavBar username={context.val} style={style} />
            {questionNumber < 10 ?
                questionType <= 3 && loaded ?
                    <MultipleChoice dictionary={dictionary}
                        lessonName={LessonData[lesson].lessonName}
                        questionNumber={questionNumber}
                        score={score}
                        incrementQuestion={incrementQuestion}
                        incrementScore={incrementScore}
                        alphabet={LessonData[lesson].alphabet}
                        type={LessonData[lesson].type}
                        pick={pick}
                        reverse={questionType <= 1 ? false : true} />
                    : loaded &&
                    <MatchGame dictionary={dictionary}
                        lessonName={LessonData[lesson].lessonName}
                        questionNumber={questionNumber}
                        score={score}
                        incrementQuestion={incrementQuestion}
                        incrementScore={incrementScore}
                        alphabet={LessonData[lesson].alphabet} />
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