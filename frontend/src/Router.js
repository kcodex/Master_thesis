import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import MainPage from './MainPage';

const Router = () => {
    return (
        <div>
            <div className="flag-container">
                <i className="flag pl" />
                <i className="flag gb" />
            </div>
            <BrowserRouter>
                <Route path="/" exact component={MainPage} />
                <Route path="/quiz" component={App} />
            </BrowserRouter>
        </div>
    );
};

export default Router;
