import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faPencil, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Card() {
    return (
        <div className="card-container">
            <div className="name-icons-container">
                <p className="creator-username">The Korean Vegam</p>
                <div className="icons-container">
                    <FontAwesomeIcon icon={faInfoCircle} className="icons" />
                    <FontAwesomeIcon icon={faPencil} className="icons" />
                </div>
            </div>
            <div className="icons-container">
                <FontAwesomeIcon icon={faYoutube} className="icons" />
                <FontAwesomeIcon icon={faTwitter} className="icons" />
                <FontAwesomeIcon icon={faInstagram} className="icons" />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque volutpat, magna eu commodo dictum, dolor nulla
                laoreet felis, eget lobortis arcu nisi vel augue. Fusce eget
                risus accumsan libero feugiat imperdiet a vel justo. Praesent ut
                quam turpis. Aliquam vitae magna sed enim mattis faucibus{' '}
            </p>
        </div>
    );
}

export default Card;
