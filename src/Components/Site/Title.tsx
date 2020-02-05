import * as React from 'react';

export interface IProps {
    heading : string   
    paragraph? : string 
}

function Title(props : IProps) {
    return <div className="section-head text-center">
    <h2 className="text-uppercase">{props.heading}</h2>
    <div className="wt-separator style-icon">
        <i className="fa fa-leaf text-black"></i>
        <span className="separator-left pr-bg-color"></span>
        <span className="separator-right pr-bg-color"></span>
    </div>  
    <p>{props.paragraph}</p>
</div>
}

export default Title