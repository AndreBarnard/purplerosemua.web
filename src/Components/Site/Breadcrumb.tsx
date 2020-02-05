import * as React from 'react';
import {Link} from "react-router-dom";

export interface IProps {
    heading : string
}

function Breadcrumb(props : IProps) {
    return <div className="bg-gray-light p-tb20">
    <div className="container">
        <ul className="wt-breadcrumb breadcrumb-style-2">
            <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
            <li>{props.heading}</li>
        </ul>
    </div>
</div>
}

export default Breadcrumb