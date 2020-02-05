import * as React from 'react';
import {Link} from "react-router-dom";

export interface IProps {
    flaticon : string
    heading : string
    desc : string
}

function ServiceType(props : IProps) {
    return <div className="col-md-6 col-sm-6 col-xs-6 col-xs-100pc p-tb20">
            <div className="wt-icon-box-wraper left">
                <div className="icon-md text-primary">
                    <Link to="/" className="icon-cell p-t5 center-block"><i className={props.flaticon}></i></Link>
                </div>
                <div className="icon-content">
                    <h5 className="wt-tilte text-uppercase m-b0">{props.heading}</h5>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
}

export default ServiceType