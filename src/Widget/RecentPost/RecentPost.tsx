import * as React from 'react';

export interface IProps {
}

function RecentPost(props : IProps) {
    return <div className="widget bg-white  recent-posts-entry">
    <h4 className="widget-title">Posts</h4>
    <div className="section-content">
        <div className="wt-tabs tabs-default border">
            <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#web-design-1">Recent</a></li>
                <li><a data-toggle="tab" href="#graphic-design-1">Popular</a></li>
            </ul>
            <div className="tab-content">
            
                <div id="web-design-1" className="tab-pane active ">
                    <div className="widget-post-bx">
                        <div className="widget-post clearfix bg-gray">
                            <div className="wt-post-media">
                                <img src="images/blog/recent-blog/pic1.jpg"  alt="" className="radius-bx" />
                            </div>
                            <div className="wt-post-info">
                                <div className="wt-post-header">
                                    <h6 className="post-title">Lorem ipsum dolor sit amet</h6>
                                </div>
                                <div className="wt-post-meta">
                                    <ul>
                                        <li className="post-author">25 Dec</li>
                                        <li className="post-comment"><i className="fa fa-comments"></i> 20comment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="widget-post clearfix bg-gray">
                            <div className="wt-post-media">
                                <img src="images/blog/recent-blog/pic2.jpg" alt=""  className="radius-bx" />
                            </div>
                            <div className="wt-post-info">
                                <div className="wt-post-header">
                                    <h6 className="post-title">Debitis nihil placeat, illum est </h6>
                                </div>
                                <div className="wt-post-meta">
                                    <ul>
                                        <li className="post-author">25 Dec</li>
                                        <li className="post-comment"><i className="fa fa-comments"></i> 15 comment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="widget-post clearfix bg-gray">
                            <div className="wt-post-media">
                                <img src="images/blog/recent-blog/pic3.jpg" alt=""  className="radius-bx"/>
                            </div>
                            <div className="wt-post-info">
                                <div className="wt-post-header">
                                    <h6 className="post-title">Elit Assumenda vel amet </h6>
                                </div>
                                <div className="wt-post-meta">
                                    <ul>
                                        <li className="post-author">25 Dec</li>
                                        <li className="post-comment"><i className="fa fa-comments"></i> 07 comment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="graphic-design-1" className="tab-pane">
                    <div className="widget-post-bx">
                        <div className="widget-post clearfix bg-gray">
                            <div className="wt-post-media">
                                <img src="images/blog/recent-blog/pic3.jpg" alt=""  className="radius-bx" />
                            </div>
                            <div className="wt-post-info">
                                <div className="wt-post-header">
                                    <h6 className="post-title">Blog post title doler sit amet</h6>
                                </div>
                                <div className="wt-post-meta">
                                    <ul>
                                        <li className="post-author">25 Dec</li>
                                        <li className="post-comment"><i className="fa fa-comments"></i> 10 comment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="widget-post clearfix bg-gray">
                            <div className="wt-post-media">
                                <img src="images/blog/recent-blog/pic1.jpg"  alt=""  className="radius-bx" />
                            </div>
                            <div className="wt-post-info">
                                <div className="wt-post-header">
                                    <h6 className="post-title">Blog post title lorem ipsum</h6>
                                </div>
                                <div className="wt-post-meta">
                                    <ul>
                                        <li className="post-author">25 Dec</li>
                                        <li className="post-comment"><i className="fa fa-comments"></i> 29 comment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="widget-post clearfix bg-gray">
                            <div className="wt-post-media">
                                <img src="images/blog/recent-blog/pic2.jpg" alt=""  className="radius-bx" />
                            </div>
                            <div className="wt-post-info">
                                <div className="wt-post-header">
                                    <h6 className="post-title">Blog post title a dummy text</h6>
                                </div>
                                <div className="wt-post-meta">
                                    <ul>
                                        <li className="post-author">25 Dec</li>
                                        <li className="post-comment"><i className="fa fa-comments"></i> 05 comment</li>
                                    </ul>
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

export default RecentPost