import * as React from 'react';
import FooterSectionHeading from './FooterSectionHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

export interface IAppProps {
}

function UsefulLinks() {

    return <div className="col-md-3 col-sm-6">
    <div className="widget widget_services">
        <FooterSectionHeading heading="Useful links" />
        <ul>
            <li><FontAwesomeIcon icon={faAngleRight}/><Link to="/about"> About</Link></li>
            <li><FontAwesomeIcon icon={faAngleRight}/><a href="faq-1.html"> FAQ</a></li>
            <li><FontAwesomeIcon icon={faAngleRight}/><a href="career.html"> Career</a></li>
            <li><FontAwesomeIcon icon={faAngleRight}/><a href="our-team.html"> Our Team</a></li>
            <li><FontAwesomeIcon icon={faAngleRight}/><a href="services.html"> Services</a></li>
            <li><FontAwesomeIcon icon={faAngleRight}/><a href="gallery-grid-1.html"> Gallery</a></li>
        </ul>
    </div>
</div>
}


export default UsefulLinks