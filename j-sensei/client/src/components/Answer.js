import React from 'react';

const Answer = ({onClickHandler, answer, correct}) => {

    return (
        <div>
            <div>
                {!correct ?
                <div>
                    <h3 className="text-danger">Sorry, that's incorrect.</h3>
                    <h3>The correct answer is: {answer}</h3>
                </div>
                :
                <div>
                    <h3 className="text-success">That's correct!</h3>
                </div>}
            </div>
            <button className="btn btn-secondary" onClick={onClickHandler}>Continue</button>
        </div>
    )
}

export default Answer;