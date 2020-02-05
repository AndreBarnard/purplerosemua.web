import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {IconProp } from '@fortawesome/fontawesome-svg-core'

export interface IProps {
    facebookURL? : string
    instagramURL? : string
    youtubeURL? : string
    twitterURL? : string
    linkedinURL? : string
    webURL? : string
}

function SocialMedia(props : IProps) {

    const facebookLink =  props.facebookURL || "";
    const instagramLink =  props.instagramURL || "";
    const youtubeLink =  props.youtubeURL || "";
    const twitterLink =  props.twitterURL || "";
    const linkedinLink =  props.linkedinURL || "";

    const renderSocialLink = (url : string, icon : IconProp,) => {
        let result : any = ""
        if(url.length > 0)
        {
        result = <li><a href={url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={icon} /></a></li>;
        }
        return result;
    }

    return <div className="m-b50">
    <h5 className="widget-title ">Social media</h5>
    <ul className="social-icons social-lg  bdr-1 p-a10 bdr-gray">
        {renderSocialLink(facebookLink,faFacebook)}
        {renderSocialLink(twitterLink,faTwitter)}
        {renderSocialLink(linkedinLink,faLinkedin)}
        {renderSocialLink(youtubeLink,faYoutube)}
        {renderSocialLink(instagramLink,faInstagram)}
   </ul>
</div>

}

export default SocialMedia