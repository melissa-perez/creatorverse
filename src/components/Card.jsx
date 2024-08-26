/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faPencil, faInfoCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

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
                    <Link to={`/view/${creator.id}`}>
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            className="icons"
                        />
                    </Link>
                    <FontAwesomeIcon icon={faPencil} className="icons" />
                    <FontAwesomeIcon icon={faTrash} className="icons" />

                </div>
            </div>
            <div className="icons-container">
                <a href={`${creator.url}`} target="no_blank">
                    <FontAwesomeIcon icon={faTwitch} className="icons" />
                </a>
            </div>
            <p className="description">{creator.description}</p>
        </div>
    );
}

export default Card;
