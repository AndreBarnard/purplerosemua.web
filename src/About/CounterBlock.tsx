import * as React from 'react';

export interface IProps {
    heading : string
    count : number
    fontAwesome : string
}

function CounterBlock(props : IProps) {
    return <div className="col-md-3 col-sm-6">
    <div className="wt-icon-box-wraper right p-a10 text-white m-b30">
        <span className="icon-md p-t10">
            <i className={props.fontAwesome}></i>
        </span>
        <div className="icon-content">
            <div className="font-26 font-weight-800  m-b5"><span className="counter">{props.count}</span><b>+</b></div>
            <span className="text-uppercase">{props.heading}</span>
        </div>
    </div>
</div>
}

export default CounterBlock