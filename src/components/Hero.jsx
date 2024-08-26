import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function Hero() {
    return (
        <div className="hero-add-container">
            <h1 className="hero-title">Creatorverse</h1>
            <div className="add-button">
                <Link to={`/add`}>
                    <FontAwesomeIcon icon={faPlus} className="icons" />
                    <span className="add-text">Add new creator</span>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
