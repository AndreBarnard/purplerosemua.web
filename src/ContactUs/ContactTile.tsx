import * as React from 'react';

export interface IProps {
    title : string,
    value : string
    fontawesomeclass : string
}

function ContactTile(props : IProps) {

    return <div className="col-md-6 col-sm-6 m-b30">
    <div className="wt-icon-box-wraper bx-style-1 p-a15 left clearfix">
        <div className="wt-icon-box-sm pr-bg-color">
            <span className="icon-cell text-white">
                <i className={props.fontawesomeclass}></i>
            </span>
        </div>
        <div className="icon-content">
            <h5 className="wt-tilte text-uppercase">{props.title}</h5>
            <p>{props.value}</p>
        </div>
    </div>
</div>
    
}


export default ContactTile