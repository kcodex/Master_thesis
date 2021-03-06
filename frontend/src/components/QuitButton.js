import React from 'react';
import { Link } from 'react-router-dom';

const QuitButton = () => {
    return (
        <Link to="/">
            <button className="quit-button ui teal large button">Wyjdź</button>
        </Link>
    );
};

export default QuitButton;
