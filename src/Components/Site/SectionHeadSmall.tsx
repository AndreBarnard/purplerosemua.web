import * as React from 'react';

export interface IProps {
    heading : string
}

function SectionHeadSmall(props : IProps) {
    return <>
        <h4 className="text-uppercase">{props.heading}</h4>
        <div className="wt-separator-outer m-b30">
        <div className="wt-separator style-icon">
            <i className="fa fa-leaf text-black"></i>
            <span className="separator-left pr-bg-color"></span>
            <span className="separator-right pr-bg-color"></span>
        </div>                            
        </div>
    </>
}

export default SectionHeadSmall