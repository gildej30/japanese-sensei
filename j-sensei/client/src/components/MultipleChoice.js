import React, {useState} from 'react';
import Answer from './Answer';

const MultipleChoice = ({dictionary, lessonName, questionNumber, score, incrementQuestion, incrementScore, alphabet, type, pick, reverse}) => {

    const shuffleArray = (array) => {
        let newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    const[questions] = useState(dictionary);
    const[options, setOptions] = useState(shuffleArray(dictionary));
    const[answered, setAnswered] = useState(false);
    const[correct, setCorrect] = useState(false);
    const[blurTarget, setBlurTarget] = useState("");

    const onClickHandler = e => {
        e.preventDefault();
        setBlurTarget(e.target);
        if (!reverse) { 
            if (e.target.value === questions[pick].romanji) {
                setCorrect(true);
            }
        }
        else {
            if (alphabet === "hiragana") {
                if (e.target.value === questions[pick].hiragana) {
                    setCorrect(true);
                }
            }
            else {
                if (e.target.value === questions[pick].katakana) {
                    setCorrect(true);
                }
            }
        }
        setAnswered(true);
    }
    
    const proceedClick = e => {
        e.preventDefault();
        if (correct) {
            incrementScore();
        }
        setOptions(shuffleArray(dictionary));
        setCorrect(false);
        setAnswered(false);
        incrementQuestion();
        blurTarget.blur();
    }

    return (
        <div>
            {!reverse && <div className="col-5 mx-auto">   
                <h1>{lessonName}</h1>
                {/* {type==="lesson" && <img src={"/img/"+alphabet+"_"+questions[pick].romanji+".png"} alt={alphabet+"-"+questions[pick].romanji} 
                    className="img-thumbnail" title={questions[pick].romanji}/>}
                {type==="quiz" && <img src={"/img/"+alphabet+"_"+questions[pick].romanji+".png"} alt={alphabet} className="img-thumbnail"/>} */}
                <h1 className="display-3" title={type === "lesson" ? questions[pick].romanji : ""}>{alphabet === "hiragana" ? questions[pick].hiragana : questions[pick].katakana}</h1>
                <p className="my-2">Which syllable does this character represent?</p>
                <div className="d-flex flex-row flex-wrap p-2 justify-content-between col-12 mx-auto">
                    {options.map((option, i) => 
                    <button key={i} type="button" className="btn btn-lg btn-outline-success col-2 mx-2 my-1" value={option.romanji} onClick={onClickHandler}>{option.romanji}</button>)}
                </div>
                <hr />
                <h3>Score: {score} / {questionNumber}</h3>
                <h3>Lesson Progress</h3>
                <div className="progress">
                    <div className="progress-bar bg-success" style={{width: `${questionNumber/10*100}%`}} role="progressbar"></div>
                </div>
            </div>}
            {reverse && <div className="col-5 mx-auto">   
                <h1>{lessonName}</h1>
                <h1 className="display-3">{questions[pick].romanji}</h1>
                <p className="my-2">Which character represents this syllable?</p>
                <div className="d-flex flex-row flex-wrap p-2 justify-content-between col-12 mx-auto">
                    {options.map((option, i) =>
                    <button key={i} type="button" className="btn btn-lg btn-outline-success col-2 mx-2 my-1" value={alphabet === "hiragana" ? option.hiragana : option.katakana} 
                        onClick={onClickHandler}>{alphabet === "hiragana" ? option.hiragana : option.katakana}</button>)}
                </div>
                <hr />
                <h3>Score: {score} / {questionNumber}</h3>
                <h3>Lesson Progress</h3>
                <div className="progress">
                    <div className="progress-bar bg-success" style={{width: `${questionNumber/10*100}%`}} role="progressbar"></div>
                </div>
            </div>}
            <hr />
            <div>
                {answered && !reverse && <Answer onClickHandler={proceedClick} answer={questions[pick].romanji} correct={correct} />}
                {answered && reverse && <Answer onClickHandler={proceedClick} answer={alphabet === "hiragana" ? questions[pick].hiragana : questions[pick].katakana} 
                    correct={correct} />}
            </div>
        </div>
    )

}

export default MultipleChoice;