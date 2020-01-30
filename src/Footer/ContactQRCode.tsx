import * as React from 'react';
import ImagePopUpModel from '../Components/Images/ImagePopUpModel';
export interface IAppProps {
}

function ContactQRCode(props: {qrCodeImg : string, infoTitle : string, infoDesc : string}) {

    return     <div className="col-md-3 col-sm-6  p-tb20">
    <div className="wt-icon-box-wraper left  bdr-1 bdr-gray-dark p-tb15 p-lr10 clearfix">
         <div className="icon-md text-primary-contact-info">
             {/* <figure>
                 <img src={props.qrCodeImg} alt="Purple Rose MUA contact info" />
            </figure> */}
            <ImagePopUpModel img={props.qrCodeImg}/>
         </div>
         <div className="icon-content">
             <h5 className="wt-tilte text-uppercase m-b0">{props.infoTitle}</h5>
             <p className="m-b0">{props.infoDesc}</p>
         </div>
    </div>
 </div>
}


export default ContactQRCode