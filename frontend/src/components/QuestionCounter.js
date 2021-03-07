import React, { useState, useEffect } from 'react';

const QuestionCounter = () => {
    const [questionNumber, setQuestionNumber] = useState(0);

    return (
        <div className="counter">
            <p onClick={() => setQuestionNumber(questionNumber + 1)}>{questionNumber}/20</p>
        </div>
    );
};

export default QuestionCounter;
