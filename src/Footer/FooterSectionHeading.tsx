import * as React from 'react';

export interface IAppProps {
}

function FooterSectionHeading(props : {heading : string, }) {

    return <>
        <h4>{props.heading}</h4>
        <div className="wt-separator style-icon m-b0">
            <i className="fa fa-leaf text-white"></i>
            <span className="separator-right pr-bg-color"></span>
        </div>  
    </>
}


export default FooterSectionHeading