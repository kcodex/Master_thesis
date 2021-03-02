const Question = (props) => {
    return (
        <div className="question-container">
            <div className="question">
                <h2>Tutaj będzie pytanko!</h2>
            </div>
            <div className>{props.children}</div>
        </div>
    );
};

export default Question;
