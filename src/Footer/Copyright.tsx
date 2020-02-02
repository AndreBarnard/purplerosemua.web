import * as React from 'react';
import {Link} from "react-router-dom";

export interface IAppProps {
}

function Copyright(props: {CompanyName : string;}) {

    return <div className="footer-bottom overlay-wraper">
    <div className="overlay-main"></div>
    <div className="constrot-strip"></div>
    <div className="container p-t30">
        <div className="row">
            <div className="wt-footer-bot-left">
                <span className="copyrights-text">© 2020 {props.CompanyName}. All Rights Reserved. Developed By Spiderware.</span>
            </div>
            <div className="wt-footer-bot-right">
                <ul className="copyrights-nav pull-right"> 
                    <li><a href="javascript:void(0);">Terms & Condition</a></li>
                    <li><a href="javascript:void(0);">Privacy Policy</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </div>
</div>
}


export default Copyright