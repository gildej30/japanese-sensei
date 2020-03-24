import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';

const Lesson = ({id, userScores, scoreUpdate}) => {

    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [answer, setAnswer] = useState("");
    
    const questions = [
        [{
            q: "What is your name?",
            a: "Lancelot"
        },
        {
            q: "What is your quest?",
            a: "To seek the Holy Grail"
        },
        {
            q: "What is your favorite color?",
            a: "Blue"
        }],
        [{
            q: "What is your name?",
            a: "Sir Robin"
        },
        {
            q: "What is your quest?",
            a: "To seek the Holy Grail"
        },
        {
            q: "What is the capital of Assyria?",
            a: "Assur"
        }],
        [{
            q: "What is your name?",
            a: "Arthur"
        },
        {
            q: "What is your quest?",
            a: "To seek the Holy Grail"
        },
        {
            q: "What is the air-speed velocity of an unladen swallow?",
            a: "African or European?"
        }],
    ]

    const onChangeHandler = e => {
        setAnswer(e.target.value)
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        if (answer === questions[id-1][questionNumber].a) {
            setScore(score + 1);
        }
        setQuestionNumber(questionNumber+1);
        setAnswer("");
    };

    const onClickHandler = e => {
        e.preventDefault();
        scoreUpdate(id, score);
        navigate("/");
    }

    return (
        <div>
            {questionNumber < 3 ?
                <div>
                    <h1>{userScores[id-1].lessonName}</h1>
                    <form className="col-5 mx-auto" onSubmit={onSubmitHandler}>
                        <div className="form-group">
                            <label>{questions[id-1][questionNumber].q}</label>
                            <input type="text" name="answer" value={answer} className="form-control" onChange={onChangeHandler}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Answer</button>
                    </form>
                    <hr />
                    <h3>Score: {score}</h3>
                    <div className="progress">
                        <div className="progress-bar bg-success" style={{width: `${questionNumber/3*100}%`}} role="progressbar"></div>
                    </div>
                </div>
                :
                <div className="col-5 mx-auto">
                    <h2>Final Score: {score}</h2>
                    <h3>Great Job!</h3>
                    <button className="btn btn-success" onClick={onClickHandler}>Continue</button>
                </div>}
        </div>
    )

}

export default Lesson;