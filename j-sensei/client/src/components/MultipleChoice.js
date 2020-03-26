import React, {useState} from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const MultipleChoice = ({dictionary, lessonName, questionNumber, score, incrementQuestion, incrementScore, alphabet, type, pick}) => {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


    const[questions, setQuestions] = useState(dictionary);
    const[options, setOptions] = useState(dictionary);

    const onClickHandler = e => {
        e.preventDefault();
        e.target.blur();
        if (e.target.value === questions[pick]) {
            incrementScore();
        }
        incrementQuestion();
    }

    return (
        <div className="col-5 mx-auto">   
            <h1>{lessonName}</h1>
            {type==="lesson" && <img src={"/img/"+alphabet+"_"+questions[pick]+".png"} alt={alphabet} className="img-thumbnail" title={questions[pick]}/>}
            {type==="quiz" && <img src={"/img/"+alphabet+"_"+questions[pick]+".png"} alt={alphabet} className="img-thumbnail"/>}
            <p className="my-2">{`What syllable does this character represent?`}</p>
            <div className="d-flex flex-row flex-wrap p-2 justify-content-between col-12 mx-auto">
                {options.map((option, i) => 
                <button key={i} type="button" className="btn btn-outline-success col-2 mx-2 my-1" value={option} onClick={onClickHandler}>{option}</button>)}
            </div>
            <hr />
            <h3>Score: {score} / {questionNumber}</h3>
            <h3>Lesson Progress</h3>
            <div className="progress">
                <div className="progress-bar bg-success" style={{width: `${questionNumber/10*100}%`}} role="progressbar"></div>
            </div>
        </div>
    )

}

export default MultipleChoice;