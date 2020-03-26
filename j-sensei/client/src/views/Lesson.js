import React, {useState, useContext} from 'react';
import {navigate} from '@reach/router';
import MultipleChoice from '../components/MultipleChoice';
import NavBar from '../components/NavBar';
import MatchGame from '../components/MatchGame';
import MyContext from '../contexts/MyContext';

const Lesson = ({id, scoreUpdate, userScores, style}) => {

    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [questionType, setQuestionType] = useState(0);
    const context = useContext(MyContext);

    const dictionary = ["a", "e", "i", "o" ,"u"];

    const incrementQuestion = () => {
        setQuestionNumber(questionNumber + 1);
        setQuestionType(Math.round(Math.random(0,1)));
    }
    
    const incrementScore = () => {
        setScore(score + 1);
    }
    
    const dashboardReturn = e => {
        e.preventDefault();
        scoreUpdate(id, score);
        navigate("/dashboard");
    }

    return (
        <div>
            <NavBar username={context.val} style={style}/>
            {questionNumber < 5 ?
                questionType === 0 ? 
                    <MultipleChoice dictionary={dictionary}
                    lesson={userScores[id-1].lessonName}
                    questionNumber={questionNumber}
                    score={score}
                    incrementQuestion={incrementQuestion}
                    incrementScore={incrementScore} />
                    : 
                    <MatchGame dictionary={dictionary}
                    lesson={userScores[id-1].lessonName}
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