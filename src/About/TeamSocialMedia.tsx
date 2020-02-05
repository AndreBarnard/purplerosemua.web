import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faTwitter, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons'
import {IconProp } from '@fortawesome/fontawesome-svg-core'

export interface IProps {
    facebookURL? : string
    instagramURL? : string
    youtubeURL? : string
    twitterURL? : string
    linkedinURL? : string
    webURL? : string
}

function TeamSocialMedia(props : IProps) {

    const facebookLink =  props.facebookURL || "";
    const instagramLink =  props.instagramURL || "";
    const youtubeLink =  props.youtubeURL || "";
    const twitterLink =  props.twitterURL || "";
    const linkedinLink =  props.linkedinURL || "";
    const webLink =  props.webURL || "";

    const renderSocialLink = (url : string, icon : IconProp,) => {
        let result : any = ""
        if(url.length > 0)
        {
        result = <li><a href={url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon} /></a></li>;
        }
        return result;
    }

    return <div className="wt-team-skew-block">
                <div className="social-icons-outer p-a20">
                    <ul className="social-icons social-square social-dark white-border m-b0">
                    {renderSocialLink(facebookLink,faFacebook)}
                    {renderSocialLink(instagramLink,faInstagram)}
                    {renderSocialLink(youtubeLink,faYoutube)}
                    {renderSocialLink(twitterLink,faTwitter)}
                    {renderSocialLink(linkedinLink,faLinkedin)}
                    {renderSocialLink(webLink,faGoogle)}
                    </ul>
                </div>
            </div>
}

export default TeamSocialMedia