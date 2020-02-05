import * as React from 'react';
import PostInfo from './PostInfo'

export interface IProps {
    img : string
    imgAlt? : string
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

function PostImage(props : IProps) {

    const imgAlt = props.imgAlt || "";

    return <div className="blog-post blog-lg date-style-1">
            
    <div className="wt-post-media wt-img-effect zoom-slow">
        <a href="javascript:void(0);"><img src={props.img} alt={imgAlt} /></a>
    </div>
    <PostInfo
    postTitle={props.postTitle}
    postDate={props.postDate}
    postDateYear={props.postDateYear}
    author={props.author}
    postText={props.postText}
    facebookURL={props.facebookURL}
    instagramURL={props.instagramURL}
    youtubeURL={props.youtubeURL}
    twitterURL={props.twitterURL}
    linkedinURL={props.linkedinURL}
    webURL={props.webURL}
    />    
</div>
}

export default PostImage