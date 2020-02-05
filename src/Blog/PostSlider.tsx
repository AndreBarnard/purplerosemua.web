import * as React from 'react';
import PostInfo from './PostInfo'

export interface IProps {
    video : string
    videoTitle : string
    videoWidth? : string
    videoheight? : string
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

function PostSlider(props : IProps) {

    const videoWidth = props.videoWidth || "560";
    const videoheight = props.videoheight || "315";

    return <div className="blog-post blog-lg date-style-1">
            
    <div className="wt-post-media">
        <iframe width={videoWidth} height={videoheight} src={props.video} title={props.videoTitle}></iframe>
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

export default PostSlider