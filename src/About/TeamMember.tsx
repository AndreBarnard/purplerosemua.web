import * as React from 'react';
import TeamSocialMedia from './TeamSocialMedia';

export interface IProps {
    portfolioImg : string 
    name : string
    title : string
    facebookURL? : string
    instagramURL? : string
    youtubeURL? : string
    twitterURL? : string
    linkedinURL? : string
    webURL? : string
}

function TeamMember(props : IProps) {
    return <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-t30">
    <div className="wt-team-four">
        <div className="wt-team-media">
            <a href="javascript:void(0);"><img src={props.portfolioImg} alt="" /></a>
        </div>
        <div className="wt-team-info">
            <TeamSocialMedia 
            facebookURL={props.facebookURL}
            instagramURL={props.instagramURL}
            youtubeURL={props.youtubeURL}
            twitterURL={props.twitterURL}
            linkedinURL={props.linkedinURL}
            webURL={props.webURL}
            />
             <div className="p-a20">
                <h4 className="wt-team-title text-uppercase"><a href="javascript:void(0);">{props.name}</a></h4>
                <p>{props.title}</p>
            </div>
        </div>
    </div>
</div>
}

export default TeamMember