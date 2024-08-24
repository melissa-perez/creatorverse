/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faPencil, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Card({ creator }) {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), 
                 rgba(0, 0, 0, 0.45)),
                 url(${creator.imageURL})`,
            }}
            className="card-container"
        >
            <div className="name-icons-container">
                <p className="creator-username">{creator.name}</p>
                <div className="icons-container">
                    <FontAwesomeIcon icon={faInfoCircle} className="icons" />
                    <FontAwesomeIcon icon={faPencil} className="icons" />
                </div>
            </div>
            <div className="icons-container">
                <FontAwesomeIcon icon={faTwitch} className="icons" />
            </div>
            <p>{creator.description}</p>
        </div>
    );
}

export default Card;
