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

function Article(props: IProps) {


    return <div className="blog-post latest-blog-3 blog-md date-style-1 clearfix">
    <div className="wt-post-media wt-img-effect zoom-slow">
    <Link to={props.link}><img src={props.img} alt="" /></Link>
    </div>
    <div className="wt-post-info">
        <div className="wt-post-title ">
            <h4 className="post-title font-weight-800"><Link to={props.link}>{props.title}</Link></h4>
        </div>
        <div className="wt-post-meta ">
            <ul>
                <li className="post-date"> <i className="fa fa-calendar"></i><strong>{props.day}</strong> <span> {props.year}</span> </li>
                <li className="post-author"><i className="fa fa-user"></i><a href="javascript:void(0);">By <span>{props.author}</span></a> </li>
                {/* <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);">0</a> </li> */}
            </ul>
        </div>
        <div className="wt-post-text">
            <p>{props.desc}</p> 
        </div>
        
    </div>
</div>
}


export default Article