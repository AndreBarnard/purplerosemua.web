import * as React from 'react';
import {Link} from "react-router-dom";

export interface IProps {
    day : string, 
    year : string
    author : string
    title : string
    desc : string
    img : string
    link : string
}

function MainArticle(props: IProps) {


    return  <div className="blog-post latest-blog-3 overlay-wraper post-overlay date-style-1 bg-cover bg-no-repeat bg-top-center"  style={{backgroundImage: `url(${props.img})`}}>
    <div className="overlay-main opacity-08 primary-gradi"></div>
    <div className="wt-post-info p-a30 p-b20 text-white">
        <div className="post-overlay-position">
            <div className="wt-post-title ">
                <h3 className="post-title"><Link to={props.link} className="text-white text-capitalize">{props.title}</Link></h3>
            </div>
            <div className="wt-post-meta ">
                <ul>
                    <li className="post-date"><i className="fa fa-calendar"></i><strong>{props.day}</strong> <span> {props.year}</span></li>
                    <li className="post-author"><i className="fa fa-user"></i>By <a href="javascript:;">{props.author}</a> </li>
                    {/* <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:;">{commentCount} comment</a> </li> */}
                </ul>
            </div>
            <div className="wt-post-text">
                <p>{props.desc}</p> 
            </div>
        </div>
    </div>
</div>
}


export default MainArticle