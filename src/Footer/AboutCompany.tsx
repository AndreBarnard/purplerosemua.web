import * as React from 'react';
import FooterSectionHeading from './FooterSectionHeading';
import logo from '../Images/PurpleRoseMUA_CapeTown_Makeup_Artist_Small.jpg';
import {Link} from "react-router-dom";

export interface IAppProps {
}

function AboutCompany() {

    return <div className="col-md-3 col-sm-6">  
    <div className="widget widget_about">
        <FooterSectionHeading heading="About Company" />
        <figure className="logo-footer clearfix p-b15">
            <Link to="/" ><img src={logo} width="230" height="67" alt="" className="pr-logo-footer-round"/></Link>
        </figure>
        <p>Purple Rose MUA was founded in 2012, we are a Cape Town, based professional makeup artistry. We take great pride in our work ethic and professionalism to deliver a unique experience for every client.
        </p>  
    </div>
</div> 
}


export default AboutCompany