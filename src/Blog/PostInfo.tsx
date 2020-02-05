import * as React from 'react';
import SocalMedia from '../Widget/SocialMedia/BlogSocalMedia'

export interface IProps {
    postTitle : string
    postDate : string
    postDateYear : string
    author : string
    postText : string
    facebookURL? : string
    instagramURL? : string
    youtubeURL? : string
    twitterURL? : string
    linkedinURL? : string
    webURL? : string
}

function PostInfo(props : IProps) {

    return <div className="wt-post-info p-tb30 p-m30 bg-white">            
            <div className="wt-post-title ">
                <h3 className="post-title"><a href="javascript:void(0);">{props.postTitle}</a></h3>
            </div>
            <div className="wt-post-meta ">
                <ul>
                <li className="post-date"> <i className="fa fa-calendar"></i><strong>{props.postDate}</strong> <span> {props.postDateYear}</span> </li>
                <li className="post-author"><i className="fa fa-user"></i><a href="javascript:void(0);">By <span>{props.author}</span></a> </li>
                {/* <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);">0 Comments</a> </li> */}
            </ul>
            </div>
            <div className="wt-post-text">
                <p>{props.postText}</p> 
            </div>
            <div className="clearfix">
            {/* <div className="wt-post-readmore pull-left">
                <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className="site-button-link">Read More</a>
            </div> */}
            <SocalMedia 
            facebookURL={props.facebookURL}
            instagramURL={props.instagramURL}
            youtubeURL={props.youtubeURL}
            twitterURL={props.twitterURL}
            linkedinURL={props.linkedinURL}
            webURL={props.webURL}/>
        </div>      
    </div>    
}

export default PostInfo