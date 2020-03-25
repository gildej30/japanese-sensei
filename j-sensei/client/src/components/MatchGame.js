import React, {useState} from 'react';

const MatchGame = ({dictionary, lesson, questionNumber, score, incrementQuestion, incrementScore}) => {
    
    const shuffleArray = (array) => {
        let newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    const[questions, setQuestions] = useState(shuffleArray(dictionary));
    const[options, setOptions] = useState(shuffleArray(dictionary));
    const[matches, setMatches] = useState(0);
    const[prevTarget, setPrevTarget] = useState("");


    const onClickHandler = e => {
        e.preventDefault();
        if (prevTarget === "") {
            setPrevTarget(e.target.name);
        }
        else {
            if(e.target.name === prevTarget) {
                if (matches === 4) {
                    setMatches(0);
                    incrementScore();
                    incrementQuestion();
                }
                else {
                    setMatches(matches + 1);
                }
            }
            setPrevTarget("");
            e.target.blur();
        }
    }

    return (
        <div className="col-5 mx-auto">   
            <h1>{lesson}</h1>
            <p className="my-2">Match the hiragana with the vowel sounds:</p>
            <div className="row justify-content-center">
                <div className="d-inline-flex flex-column justify-content-between col-2">
                    {questions.map((question, i) => 
                    <input key={i} type="button" className="btn btn-outline-success my-2" name={question} onClick={onClickHandler}
                        style={{backgroundImage: "url('/img/Hiragana_"+question+".png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}/>
                    )}
                </div>
                <div className="d-inline-flex flex-column justify-content-between col-2">
                    {options.map((option, i) => 
                    <input key={i} type="button" className="btn btn-outline-success my-2" name={option} value={option} onClick={onClickHandler} />)}
                </div>
            </div>
            <hr />
            <h3>Score: {score} / {questionNumber}</h3>
            <h3>Lesson Progress</h3>
            <div className="progress">
                <div className="progress-bar bg-success" style={{width: `${questionNumber/5*100}%`}} role="progressbar"></div>
            </div>
        </div>
    )

}

export default MatchGame;