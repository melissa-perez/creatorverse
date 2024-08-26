import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

function ViewCreator({ creators }) {
    const { id } = useParams();
    const creator = creators
        ? creators.filter((c) => c.id === parseInt(id))
        : null;

    if (!creator) {
        return <div>Loading...</div>;
    }
    return (
        <div className="creator-container">
            <div className="creator-information">
                {creator[0].imageURL && (
                    <img src={creator[0].imageURL} className="img-creator" />
                )}
                <div>
                    <h1>{creator[0].name}</h1>
                    <p className="description">{creator[0].description}</p>
                    <a href={`${creator[0].url}`} target="no_blank">
                        <FontAwesomeIcon icon={faTwitch} className="icons" />
                    </a>
                    <span>{creator[0].name}</span>
                </div>
            </div>
        </div>
    );
}

export default ViewCreator;
