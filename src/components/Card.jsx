/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import {
    faPencil,
    faInfoCircle,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { supabase } from '../client';

function Card({ creator, onDelete }) {
    const handleDelete = async (e) => {
        e.preventDefault();

        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', `${creator.id}`);

        if (error) {
            console.error('Error deleting data: ', error);
        } else {
            console.log('Data successfully deleted.');
            if (onDelete) onDelete(creator.id);
        }
    };
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
                    <Link to={`/edit/${creator.id}`}>
                        <FontAwesomeIcon icon={faPencil} className="icons" />
                    </Link>
                    <FontAwesomeIcon
                        icon={faTrash}
                        className="icons"
                        onClick={(e) => handleDelete(e)}
                    />
                </div>
            </div>
            <div className="icons-container">
                <a href={`${creator.url}`} target="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitch} className="icons" />
                </a>
            </div>
            <p className="description">{creator.description}</p>
        </div>
    );
}

export default Card;
