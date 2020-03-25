import React, {useState} from 'react';

const MultipleChoice = ({dictionary, lesson, questionNumber, score, incrementQuestion, incrementScore}) => {
    
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

    const onClickHandler = e => {
        e.preventDefault();
        e.target.blur();
        if (e.target.value === questions[questionNumber]) {
            incrementScore();
        }
        incrementQuestion();
        setOptions(shuffleArray(dictionary));
    }

    return (
        <div className="col-5 mx-auto">   
            <h1>{lesson}</h1>
            <img src={"/img/Hiragana_"+questions[questionNumber]+".png"} alt="Hiragana" className="img-thumbnail"/>
            <p className="my-2">What vowel does this hiragana represent?</p>
            <div className="d-flex flex-row p-2 justify-content-between">
                {options.map((option, i) => 
                <button key={i} type="button" className="btn btn-outline-success col-1 mx-2" value={option} onClick={onClickHandler}>{option}</button>)}
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

export default MultipleChoice;