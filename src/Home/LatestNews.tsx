import * as React from 'react';
import blogBig from '../Images/Home/blog-big.jpg';
import Title from './Title';

export interface IAppProps {
}

function LatestNews() {

    return <div className="section-full latest-blog bg-gray p-t80 p-b50">
    <div className="container">
    <Title 
        titleSpan="Latest" 
        titleH2="News" 
        paragraph="Some text about Purple Rose lates" />

        
        <div className="section-content ">
            <div className="row equal-wraper">
                {/* <!-- COLUMNS 1 --> */}
                <div className="col-md-6 col-sm-12">
                
                    <div className="blog-post latest-blog-3 blog-md date-style-1 clearfix">
                        <div className="wt-post-media wt-img-effect zoom-slow">
                            <a href="javascript:void(0);"><img src="images/blog/blog-small/pic1.jpg" alt="" /></a>
                        </div>
                        <div className="wt-post-info">
                            <div className="wt-post-title ">
                                <h4 className="post-title font-weight-800"><a href="javascript:void(0);">Oil Massage</a></h4>
                            </div>
                            <div className="wt-post-meta ">
                                <ul>
                                    <li className="post-date"> <i className="fa fa-calendar"></i><strong>18 Jan</strong> <span> 2018</span> </li>
                                    <li className="post-author"><i className="fa fa-user"></i><a href="javascript:void(0);">By <span>John</span></a> </li>
                                    <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);">0</a> </li>
                                </ul>
                            </div>
                            <div className="wt-post-text">
                                <p>Lorem Ipsum is simply dummy text of printing and typesetting Ipsum has been the industry's dummy</p> 
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="blog-post latest-blog-3 blog-md date-style-1 clearfix">
                        <div className="wt-post-media wt-img-effect zoom-slow">
                            <a href="javascript:void(0);"><img src="images/blog/blog-small/pic2.jpg" alt="" /></a>
                        </div>
                        <div className="wt-post-info">
                            <div className="wt-post-title ">
                                <h4 className="post-title font-weight-800"><a href="javascript:void(0);">Beauty Treatment</a></h4>
                            </div>
                            <div className="wt-post-meta ">
                                <ul>
                                    <li className="post-date"> <i className="fa fa-calendar"></i><strong>20 Jan</strong> <span> 2018</span> </li>
                                    <li className="post-author"><i className="fa fa-user"></i><a href="javascript:void(0);">By <span>John</span></a> </li>
                                    <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);">0</a> </li>
                                </ul>
                            </div>
                            <div className="wt-post-text">
                                <p>Lorem Ipsum is simply dummy text of printing and typesetting Ipsum has been the industry's dummy</p> 
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="blog-post latest-blog-3 blog-md date-style-1 clearfix">
                        <div className="wt-post-media wt-img-effect zoom-slow">
                            <a href="javascript:void(0);"><img src="images/blog/blog-small/pic3.jpg" alt="" /></a>
                        </div>
                        <div className="wt-post-info">
                            <div className="wt-post-title ">
                                <h4 className="post-title font-weight-800"><a href="javascript:void(0);">Fairness treatment</a></h4>
                            </div>
                            <div className="wt-post-meta ">
                                <ul>
                                    <li className="post-date"> <i className="fa fa-calendar"></i><strong>22 Jan</strong> <span> 2018</span> </li>
                                    <li className="post-author"><i className="fa fa-user"></i><a href="javascript:void(0);">By <span>John</span></a> </li>
                                    <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);">0</a> </li>
                                </ul>
                            </div>
                            <div className="wt-post-text">
                                <p>Lorem Ipsum is simply dummy text of printing and typesetting Ipsum has been the industry's dummy</p> 
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="blog-post latest-blog-3 overlay-wraper post-overlay date-style-1 bg-cover bg-no-repeat bg-top-center"  style={{backgroundImage: `url(${blogBig})`}}>
                        <div className="overlay-main opacity-08 primary-gradi"></div>
                        <div className="wt-post-info p-a30 p-b20 text-white">
                            <div className="post-overlay-position">
                                <div className="wt-post-title ">
                                    <h3 className="post-title"><a href="javascript:;" className="text-white text-capitalize">Relaxation. No longer beyond your budget. </a></h3>
                                </div>
                                <div className="wt-post-meta ">
                                    <ul>
                                        <li className="post-date"><i className="fa fa-calendar"></i><strong>6 Jan</strong> <span> 2018</span></li>
                                        <li className="post-author"><i className="fa fa-user"></i>By <a href="javascript:;">Admin</a> </li>
                                        <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:;">2 comment</a> </li>
                                    </ul>
                                </div>
                                <div className="wt-post-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                            
            </div>
        </div>
    </div>
</div>
}


export default LatestNews