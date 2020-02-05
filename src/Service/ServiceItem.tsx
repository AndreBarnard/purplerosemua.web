import * as React from 'react';
import {Link} from "react-router-dom";

export interface IProps {
    img : string
    name : string
    desc: string
}

function ServiceItem(props : IProps) {
    return  <div className="col-md-4 col-sm-4 p-tb15">
    <div className="wt-box bg-white">
        <div className="wt-media">
            <Link to="/servicedetail"><img src={props.img} alt="" /></Link>
        </div>
        <div className="wt-info p-a30 bg-gray">
            <h4 className="wt-title m-t0"><Link to="/servicedetail">{props.name}</Link></h4>
            <p>{props.desc}</p>
            <Link to="/servicedetail" className="site-button ">More <i className="fa fa-angle-double-right"></i></Link>
        </div>
    </div>
</div>
}

export default ServiceItem