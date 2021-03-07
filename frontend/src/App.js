import './App.css';
import Question from './components/Question';
import Timer from './components/Timer';
import QuestionCounter from './components/QuestionCounter';
import QuitButton from './components/QuitButton';

function App() {
    return (
        <div className="App">
            <div>
                <h1 className="question-header">
                    Pytanie{' '}
                    <img
                        alt="management"
                        className="icon-class"
                        src="https://img.icons8.com/color/100/000000/commercial-development-management.png"
                    />
                </h1>
                <Question />
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
