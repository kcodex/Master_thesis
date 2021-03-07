import { Link } from 'react-router-dom';

const ChooseMethod = () => {
    return (
        <div>
            <div className="page-in-making">Strona w budowie, przepraszamy :)</div>
            <Link to="/">
                <button className="choose-method-button ui teal big button">Przejdź do strony głównej</button>
            </Link>
        </div>
    );
};

export default ChooseMethod;
