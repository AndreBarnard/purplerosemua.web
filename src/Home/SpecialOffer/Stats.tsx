import * as React from 'react';

export interface IProps {
    counter : number
    heading : string
    flaticon : string
}

function Stats(props : IProps) {
    return <li>
        <div className="wt-icon-box-wraper left p-a10 text-secondry">
            <span className="icon-sm">
                <span className={props.flaticon}></span>
            </span>
            <div className="icon-content">
                <div className="font-20 font-weight-600"><span className="counter">{props.counter}</span><b>+</b></div>
                <span className="text-uppercase">{props.heading}</span>
            </div>
        </div>
    </li>
}

export default Stats