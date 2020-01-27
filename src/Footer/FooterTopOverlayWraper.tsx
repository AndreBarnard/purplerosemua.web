import * as React from 'react';
import FooterMiddel from './FooterMiddel';
import ContactInfo from './ContactInfo';

export interface IAppProps {
}

function FooterTopOverlayWraper() {

    return 		<div className="footer-top overlay-wraper">
    <div className="overlay-main"></div>
    <div className="container">
        <FooterMiddel />
        <ContactInfo />
    </div>
</div>
}


export default FooterTopOverlayWraper