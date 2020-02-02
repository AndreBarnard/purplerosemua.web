import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export interface IAppProps {
}

function Expert(props: 
    {expertImg : string, 
    expertName : string,
    expertTitle : string,
    expertFacebookURL : string,
    experInstagramURL : string,
    experYoutubeURL : string,
    }) {


    return  <div className="col-md-4 col-sm-4 p-tb15">
    <div className="wt-team-one bg-white">
        <div className="wt-team-media">
            <a href="javascript:void(0);"><img src={props.expertImg} alt="" /></a>
        </div>
        <div className="wt-team-info text-center bg-white p-a10">
            <h4 className="wt-team-title"><a href="javascript:void(0);">{props.expertName}</a></h4>
            <p>{props.expertTitle}</p>
            <ul className="social-icons social-square social-dark">
                <li><a href={props.expertFacebookURL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href={props.experYoutubeURL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li><a href={props.experInstagramURL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
        </div>
    </div>
</div>
}


export default Expert