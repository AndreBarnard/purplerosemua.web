import * as React from 'react';

export interface IProps {
    heading : string
    desc : string
    fontAwesome : string
}

function WhyItsBestItem(props : IProps) {
    return   <div className="wt-icon-box-wraper bx-style-2 m-l40 m-b10 p-a10 left">
    <div className="wt-icon-box-sm text-primary bg-white radius bdr-2">
        <a href="javascript:void(0);" className="icon-cell"><i className={props.fontAwesome}></i></a>
    </div>
    <div className="icon-content p-l40">
        <h5 className="wt-tilte text-uppercase">{props.heading}</h5>
        <p>{props.desc}</p>
    </div>
</div>
}

export default WhyItsBestItem