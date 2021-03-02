import './App.css';
import Question from './components/Question';
import Answer from './components/Answer';
import Timer from './components/Timer';
import QuestionCounter from './components/QuestionCounter';
import QuitButton from './components/QuitButton';

function App() {
    return (
        <div className="App">
            <div>
                <h1>Question</h1>
                <Question>
                    <Answer />
                    <Answer />
                    <Answer />
                    <Answer />
                </Question>
            </div>
            <div className="right">
                <Timer />
                <QuestionCounter />
                <QuitButton />
            </div>
        </div>
    );
}

export default App;
