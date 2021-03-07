import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../src/cherry.png';

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="header">Zarządzanie Projektem Informatycznym</div>
            <Link to="/quiz">
                <button className="ui teal big button main-button-quiz">Przejdź do quizu!</button>
            </Link>
            <Link to="/choose-method">
                <button className="ui teal big button main-button-manago">Wybierz metodę zarządzania</button>
            </Link>
            <img className="main-page-img" src={myImage} />
        </div>
    );
};

export default MainPage;
