import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

export interface IProps {
    day : string, 
    month : string
    author : string
    title : string
    link : string
}

function BlogPost(props: IProps) {


    return <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
    <div className="wt-post-date text-center text-uppercase text-white p-t5">
        <strong>{props.day}</strong>
        <span>{props.month}</span>
    </div>
    <div className="wt-post-info">
        <div className="wt-post-header">
            <h6 className="post-title"><Link to={props.link}> {props.title}</Link></h6>
        </div>
        <div className="wt-post-meta">
            <ul>
                <li className="post-author"><FontAwesomeIcon icon={faUser} /> By {props.author}</li>
                {/* <li className="post-comment"><FontAwesomeIcon icon={faComment} /> 28</li> */}
            </ul>
        </div>
    </div>
</div>
}


export default BlogPost