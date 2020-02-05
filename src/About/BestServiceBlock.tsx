import * as React from 'react';
import {Link} from "react-router-dom";

export interface IProps {
    flaticon : string
    heading : string
    desc : string
    route? : string
}

function BestServiceBlock(props : IProps) {
    const routePath = props.route || "/";
    return <div className="col-md-4 col-sm-6 animate_line">
    <div className="wt-icon-box-wraper  p-a30 center bg-white m-a5">
        <div className="icon-md text-primary m-b20">
        <Link to={routePath} className="icon-cell"><i className={props.flaticon} aria-hidden="true"></i></Link>
        </div>
        <div className="icon-content">
            <h5 className="wt-tilte text-uppercase">{props.heading}</h5>
            <p>{props.desc}</p>
        </div>
    </div>
</div>
}

export default BestServiceBlock