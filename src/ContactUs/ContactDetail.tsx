import * as React from 'react';
import SectionHeadSmall from '../Components/Site/SectionHeadSmall';
import ContactTile from './ContactTile';

export interface IAppProps {
}

function ContactDetail() {

    return <div className="wt-box col-md-6">
    <SectionHeadSmall heading="Contact Detail " />
    <div className="row">    
        <ContactTile title="Phone" value="+27(0) 79 766 2397" fontawesomeclass="fa fa-phone" />
        <ContactTile title="Email" value="purplerosemuacpt@gmail.com" fontawesomeclass="fa fa-envelope" />
        <ContactTile title="Address" value="Cape Town, South Africa" fontawesomeclass="fa fa-map-marker" />
        <ContactTile title="Instagram" value="@purplerosemuacpt" fontawesomeclass="fab fa-instagram" />
    </div>
</div>
    
}


export default ContactDetail