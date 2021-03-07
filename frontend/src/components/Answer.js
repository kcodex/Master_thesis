import React, { useState } from 'react';

const Answer = (props) => {
    const [choice, setChoice] = useState(0);

    const onButtonClick = () => {
        setChoice(choice + 1);
    };

    return (
        <div className="answer">
            <button onClick={onButtonClick} className="answer-button ui button big teal">
                {props.content}, klik: {choice}
            </button>
        </div>
    );
};

export default Answer;
