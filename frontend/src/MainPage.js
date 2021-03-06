import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="header">Hello</div>
            <Link to="/quiz">
                <button className="ui teal big button main-button">Przejdź do quizu!</button>
            </Link>
        </div>
    );
};

export default MainPage;
