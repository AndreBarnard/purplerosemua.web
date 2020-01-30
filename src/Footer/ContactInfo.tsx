import * as React from 'react';
import ContactInfoDetail from './ContactInfoDetail';
import ContactQRCode from './ContactQRCode';
import QRCodeImg from '../Images/qr-codes/purplesorecontactdetails.png';

export interface IAppProps {
}

function ContactInfo() {

    return <div className="row">
    <ContactInfoDetail imageClass="iconmoon-travel"	infoTitle="Address" contactLine1="Parkland, Tableview" contactLine2="Cape Town" />
    <ContactInfoDetail imageClass="iconmoon-smartphone-1"	infoTitle="Phone" contactLine1="+27 79 766 2397" contactLine2="+27 72 546 2359" />
    <ContactInfoDetail imageClass="iconmoon-email" infoTitle="Email" contactLine1="purplerosemuacpt" contactLine2="@gmail.com" />
    <ContactQRCode qrCodeImg={QRCodeImg} infoTitle="Contact Info" infoDesc="Scan QR code for Purple Rose MUA contact info." />
</div>
}


export default ContactInfo