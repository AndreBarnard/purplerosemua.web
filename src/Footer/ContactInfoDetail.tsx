import * as React from 'react';

export interface IAppProps {
}

function ContactInfoDetail(props: {imageClass : string, infoTitle : string, contactLine1 : string, contactLine2 : string;}) {

    return     <div className="col-md-3 col-sm-6  p-tb20">
    <div className="wt-icon-box-wraper left  bdr-1 bdr-gray-dark p-tb15 p-lr10 clearfix">
         <div className="icon-md text-primary-contact-info">
             <span className={props.imageClass}></span>
         </div>
         <div className="icon-content">
             <h5 className="wt-tilte text-uppercase m-b0">{props.infoTitle}</h5>
             <p className="m-b0">{props.contactLine1}</p>
             <p>{props.contactLine2}</p>
         </div>
    </div>
 </div>
}


export default ContactInfoDetail