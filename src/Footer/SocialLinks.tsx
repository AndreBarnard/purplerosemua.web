import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import FooterSectionHeading from './FooterSectionHeading';

export interface IAppProps {
}

function SocialLinks() {

    return <div className="widget widget_social_inks">
    <FooterSectionHeading heading="Social Links" />
    <ul className="social-icons social-square social-darkest">
        <li><a href="https://www.facebook.com/purplerosemua/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href="https://www.instagram.com/purplerosemuacpt/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="https://www.youtube.com/user/jeanerieng" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></li>
    </ul>
</div>
}


export default SocialLinks