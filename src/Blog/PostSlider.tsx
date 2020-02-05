import * as React from 'react';
import PostInfo from './PostInfo';

export interface IProps {
    children : any
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

function PostSlider(this: any, props : IProps) {

    return <div className="blog-post blog-lg date-style-1">
            
    <div className="wt-post-media">
        <div className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right">    
            {props.children}
        </div>
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