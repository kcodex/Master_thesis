import Answer from './Answer';

const Question = () => {
    return (
        <div className="question-container">
            <div className="question">
                <h2>Tutaj będzie pytanko!</h2>
            </div>
            <div>
                <Answer content="Tutaj będzie pytanie nr 1" />
                <Answer content="Tutaj będzie pytanie nr 2" />
                <Answer content="Tutaj będzie pytanie nr 3" />
                <Answer content="Tutaj będzie pytanie nr 4" />
            </div>
        </div>
    );
};

export default Question;
