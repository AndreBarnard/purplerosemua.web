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
            <li><FontAwesomeIcon icon={faAngleRight}/><Link to="/services"> Services</Link></li>
            <li><FontAwesomeIcon icon={faAngleRight}/><Link to="/portfolio"> Portfolio</Link></li>
            <li><FontAwesomeIcon icon={faAngleRight}/><Link to="/about"> Our Team</Link></li>
            <li><FontAwesomeIcon icon={faAngleRight}/><Link to="/blog"> Blog</Link></li>
            <li><FontAwesomeIcon icon={faAngleRight}/><Link to="/contact"> Contact</Link></li>
        </ul>
    </div>
</div>
}


export default UsefulLinks