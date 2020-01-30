import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUser} from '@fortawesome/free-solid-svg-icons'
import FooterSectionHeading from './FooterSectionHeading';

export interface IAppProps {
}

function ResentPost() {

    return <div className="col-md-3 col-sm-6">
    <div className="widget recent-posts-entry-date">
        <FooterSectionHeading heading="Resent Post" />
        <div className="widget-post-bx">
            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                <div className="wt-post-date text-center text-uppercase text-white p-t5">
                    <strong>20</strong>
                    <span>Mar</span>
                </div>
                <div className="wt-post-info">
                    <div className="wt-post-header">
                        <h6 className="post-title"><a href="blog-single.html">Blog title first </a></h6>
                    </div>
                    <div className="wt-post-meta">
                        <ul>
                            <li className="post-author"><FontAwesomeIcon icon={faUser} /> By Admin </li>
                            <li className="post-comment"><FontAwesomeIcon icon={faComment} /> 28</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                <div className="wt-post-date text-center text-uppercase text-white p-t5">
                    <strong>30</strong>
                    <span>Mar</span>
                </div>
                <div className="wt-post-info">
                    <div className="wt-post-header">
                        <h6 className="post-title"><a href="blog-single.html">Blog title first </a></h6>
                    </div>
                    <div className="wt-post-meta">
                        <ul>
                            <li className="post-author"><FontAwesomeIcon icon={faUser} /> By Admin </li>
                            <li className="post-comment"> <FontAwesomeIcon icon={faComment} /> 29</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                <div className="wt-post-date text-center text-uppercase text-white p-t5">
                    <strong>31</strong>
                    <span>Mar</span>
                </div>
                <div className="wt-post-info">
                    <div className="wt-post-header">
                        <h6 className="post-title"><a href="blog-single.html">Blog title first </a></h6>
                    </div>
                    <div className="wt-post-meta">
                        <ul>
                            <li className="post-author"><FontAwesomeIcon icon={faUser} /> By Admin</li>
                            <li className="post-comment"> <FontAwesomeIcon icon={faComment} /> 30</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>     
}


export default ResentPost