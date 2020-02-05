import * as React from 'react';
import PageBanner from '../Components/Site/PageBanner';
import Breadcrum from '../Components/Site/Breadcrumb';
import PostVideo from './PostVideo';

export interface IAppProps {
}

function BlogContent() {

    return <div className="page-content">

                <PageBanner img={require("../Images/banner/blog-banner.jpg")}
                heading="Blog"
                />
                <Breadcrum heading="Blog"/>
            
    {/* <!-- SECTION CONTENT START -->                   */}
    <div className="section-full p-t80 p-b50">
        <div className="container">
            <div className="row">
            
                <div className="col-md-9">
                
                    <PostVideo
                    video="https://www.youtube.com/embed/de9Mhw2dU60"
                    videoTitle="Blogpost With Youtube"
                    postTitle="Blogpost With Youtube"
                    postDate="1 Feb"
                    postDateYear="2020"
                    author="Jeanerien Barnard"
                    postText="Some Text"
                    />

                    <PostVideo
                    video="https://www.youtube.com/embed/de9Mhw2dU60"
                    videoTitle="Blogpost With Youtube"
                    postTitle="Blogpost With Youtube"
                    postDate="1 Feb"
                    postDateYear="2020"
                    author="Jeanerien Barnard"
                    postText="Some Text"
                    />

                    {/* <!-- COLUMNS 3 --> */}
                    <div className="blog-post blog-lg date-style-1">
            
                        <div className="wt-post-media">
                            {/* <!--Fade slider--> */}
                            <div className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right">
                            
                                <div className="item">
                                    <div className="aon-thum-bx">
                                        <img src="images/blog/default/thum1.jpg" alt="" />
                                    </div>
                                </div>
                                
                                <div className="item">
                                    <div className="aon-thum-bx">
                                        <img src="images/blog/default/thum2.jpg" alt="" />
                                    </div>
                                </div>
                                
                                <div className="item">
                                    <div className="aon-thum-bx">
                                        <img src="images/blog/default/thum3.jpg" alt="" />
                                    </div>
                                </div>                                    
                            
                            </div>
                            {/* <!--fade slider END--> */}
                        </div>
                        <div className="wt-post-info p-tb30 p-m30 bg-white">
                                
                            <div className="wt-post-title ">
                                <h3 className="post-title"><a href="javascript:void(0);">Blogpost With Image Slider</a></h3>
                            </div>
                            <div className="wt-post-meta ">
                                <ul>
                                <li className="post-date"> <i className="fa fa-calendar"></i><strong>20 Dec</strong> <span> 2017</span> </li>
                                <li className="post-author"><i className="fa fa-user"></i><a href="javascript:void(0);">By <span>John</span></a> </li>
                                <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);">0 Comments</a> </li>
                              </ul>
                            </div>
                            <div className="wt-post-text">
                                <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p> 
                            </div>
                            <div className="clearfix">
                            <div className="wt-post-readmore pull-left">
                                 <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className="site-button-link">Read More</a>
                            </div>
                            <div className="widget_social_inks pull-right">
                                <ul className="social-icons social-radius social-dark m-b0">
                                    <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-youtube"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-instagram"></a></li>
                                </ul>
                           </div>
                        </div>
                            
                            
                        </div>
                        
                    </div>
                    {/* <!-- COLUMNS 4 --> */}
                    <div className="blog-post blog-lg date-style-1">
            
                        <div className="wt-post-media wt-img-effect zoom-slow">
                            <a href="javascript:void(0);"><img src="images/blog/default/thum4.jpg" alt="" /></a>
                        </div>
                        <div className="wt-post-info p-tb30 p-m30 bg-white">
                                
                            <div className="wt-post-title ">
                                <h3 className="post-title"><a href="javascript:void(0);">Blogpost With Image</a></h3>
                            </div>
                            <div className="wt-post-meta ">
                                <ul>
                                <li className="post-date"> <i className="fa fa-calendar"></i><strong>20 Dec</strong> <span> 2017</span> </li>
                                <li className="post-author"><i className="fa fa-user"></i><a href="javascript:void(0);">By <span>John</span></a> </li>
                                <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);">0 Comments</a> </li>
                              </ul>
                            </div>
                            <div className="wt-post-text">
                                <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p> 
                            </div>
                            <div className="clearfix">
                            <div className="wt-post-readmore pull-left">
                                 <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className="site-button-link">Read More</a>
                            </div>
                            <div className="widget_social_inks pull-right">
                                <ul className="social-icons social-radius social-dark m-b0">
                                    <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-youtube"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-instagram"></a></li>
                                </ul>
                           </div>
                        </div>
                            
                            
                        </div>
                        
                    </div>
                    {/* <!-- COLUMNS 5 --> */}
                    <div className="blog-post blog-lg date-style-1">
            
                        <div className="wt-post-media wt-img-effect zoom-slow">
                            <a href="javascript:void(0);"><img src="images/blog/default/thum5.jpg" alt="" /></a>
                        </div>
                        <div className="wt-post-info p-tb30 p-m30 bg-white">
                                
                            <div className="wt-post-title ">
                                <h3 className="post-title"><a href="javascript:void(0);">Blogpost With Image</a></h3>
                            </div>
                            <div className="wt-post-meta ">
                              <ul>
                                <li className="post-date"> <i className="fa fa-calendar"></i><strong>20 Dec</strong> <span> 2017</span> </li>
                                <li className="post-author"><i className="fa fa-user"></i><a href="javascript:void(0);">By <span>John</span></a> </li>
                                <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);">0 Comments</a> </li>
                              </ul>
                            </div>
                            <div className="wt-post-text">
                                <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p> 
                            </div>
                            <div className="clearfix">
                            <div className="wt-post-readmore pull-left">
                                 <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className="site-button-link">Read More</a>
                            </div>
                            <div className="widget_social_inks pull-right">
                                <ul className="social-icons social-radius social-dark m-b0">
                                    <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-youtube"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-instagram"></a></li>
                                </ul>
                           </div>
                        </div>
                            
                            
                        </div>
                        
                    </div>
                    {/* <!-- COLUMNS 6 --> */}
                    <div className="blog-post blog-lg date-style-1">
            
                        <div className="wt-post-media wt-img-effect zoom-slow">
                            <a href="javascript:void(0);"><img src="images/blog/default/thum6.jpg" alt="" /></a>
                        </div>
                        <div className="wt-post-info p-tb30 p-m30 bg-white">
                                
                            <div className="wt-post-title ">
                                <h3 className="post-title"><a href="javascript:void(0);">Blogpost With Image</a></h3>
                            </div>
                            <div className="wt-post-meta ">
                              <ul>
                                <li className="post-date"> <i className="fa fa-calendar"></i><strong>20 Dec</strong> <span> 2017</span> </li>
                                <li className="post-author"><i className="fa fa-user"></i><a href="javascript:void(0);">By <span>John</span></a> </li>
                                <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);">0 Comments</a> </li>
                              </ul>
                            </div>
                            <div className="wt-post-text">
                                <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p> 
                            </div>
                            <div className="clearfix">
                            <div className="wt-post-readmore pull-left">
                                 <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className="site-button-link">Read More</a>
                            </div>
                            <div className="widget_social_inks pull-right">
                                <ul className="social-icons social-radius social-dark m-b0">
                                    <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-youtube"></a></li>
                                    <li><a href="javascript:void(0);" className="fa fa-instagram"></a></li>
                                </ul>
                           </div>
                        </div>
                            
                            
                        </div>
                        
                    </div>
                    
                    {/* <!-- PAGINATION START --> */}
                    <div className="pagination-bx clearfix ">
                        <ul className="custom-pagination pagination">
                           <li><a href = "#">&laquo;</a></li>
                           <li className="active"><a href = "#">1</a></li>
                           <li><a href = "#">2</a></li>
                           <li><a href = "#">3</a></li>
                           <li><a href = "#">4</a></li>
                           <li><a href = "#">5</a></li>
                           <li><a href = "#">&raquo;</a></li>
                        </ul>
                    </div>
                    {/* <!-- PAGINATION END --> */}
                    
                </div>
                {/* <!-- LEFT PART END --> */}

                {/* <!-- SIDE BAR START --> */}
                <div className="col-md-3">
                
                    <aside className="side-bar">
                        
                            {/* <!-- 13. SEARCH --> */}
                            <div className="widget bg-white ">
                                <h4 className="widget-title">Search</h4>
                                <div className="search-bx">
                                    <form role="search" method="post">
                                        <div className="input-group">
                                            <input name="news-letter" type="text" className="form-control" placeholder="Write your text" />
                                            <span className="input-group-btn">
                                                <button type="submit" className="site-button"><i className="fa fa-search"></i></button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>                                
                            {/* <!-- 2. RECENT POSTS --> */}
                            <div className="widget bg-white  recent-posts-entry">
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
                            {/* <!-- 4. OUR GALLERY  --> */}
                            <div className="widget widget_gallery mfp-gallery">
                                <h4 className="widget-title">Our Gallery</h4>
                                <ul>
                                    <li>
                                        <div className="wt-post-thum">
                                            <a href="images/gallery/pic1.jpg" className="mfp-link" ><img src="images/gallery/thumb/pic1.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="wt-post-thum ">
                                            <a href="images/gallery/pic2.jpg" className="mfp-link"><img src="images/gallery/thumb/pic2.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="wt-post-thum  ">
                                            <a href="images/gallery/pic3.jpg" className="mfp-link"><img src="images/gallery/thumb/pic3.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="wt-post-thum ">
                                            <a href="images/gallery/pic4.jpg" className="mfp-link"><img src="images/gallery/thumb/pic4.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="wt-post-thum ">
                                            <a href="images/gallery/pic5.jpg" className="mfp-link"><img src="images/gallery/thumb/pic5.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="wt-post-thum ">
                                            <a href="images/gallery/pic6.jpg" className="mfp-link"><img src="images/gallery/thumb/pic6.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="wt-post-thum">
                                            <a href="images/gallery/pic7.jpg" className="mfp-link" ><img src="images/gallery/thumb/pic7.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="wt-post-thum ">
                                            <a href="images/gallery/pic8.jpg" className="mfp-link"><img src="images/gallery/thumb/pic8.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="wt-post-thum  ">
                                            <a href="images/gallery/pic7.jpg" className="mfp-link"><img src="images/gallery/thumb/pic7.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="wt-post-thum ">
                                            <a href="images/gallery/pic6.jpg" className="mfp-link"><img src="images/gallery/thumb/pic6.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="wt-post-thum ">
                                            <a href="images/gallery/pic5.jpg" className="mfp-link"><img src="images/gallery/thumb/pic5.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="wt-post-thum ">
                                            <a href="images/gallery/pic4.jpg" className="mfp-link"><img src="images/gallery/thumb/pic4.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                </ul>
                               
                            </div> 
                            {/* <!-- 7. OUR CLIENT --> */}
                            <div className="widget">
                                <h4 className="widget-title">Our Client</h4>
                                <div className="owl-carousel widget-client p-t10">
                                
                                    {/* <!-- COLUMNS 1 -->  */}
                                    <div className="item">
                                        <div className="ow-client-logo">
                                            <div className="client-logo wt-img-effect on-color">
                                                <a href="#"><img src="images/client-logo/logo1.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- COLUMNS 2 -->  */}
                                    <div className="item">
                                        <div className="ow-client-logo">
                                            <div className="client-logo wt-img-effect on-color">
                                                <a href="#"><img src="images/client-logo/logo2.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- COLUMNS 3 -->  */}
                                    <div className="item">
                                        <div className="ow-client-logo">
                                            <div className="client-logo wt-img-effect on-color">
                                                <a href="#"><img src="images/client-logo/logo3.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                  
                                </div>
                            </div> 
                             {/* <!-- 6. NEWSLETTER --> */}
                            <div className="widget widget_newsletter-2 bg-white  ">
                                <h4 className="widget-title">Newsletter</h4>
                                <div className="newsletter-bx p-a30">
                                    <div className="newsletter-icon">
                                        <i className="fa fa-envelope-o"></i>
                                    </div>
                                    
                                    <div className="newsletter-content">
                                        <i>Enter your e-mail and subscribe to our newsletter. Sit amet of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis</i>
                                     </div>
                                     <div className="m-t20">
                                        <form role="search" method="post">
                                        <div className="input-group">
                                            <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                            <span className="input-group-btn">
                                                <button type="submit" className="site-button"><i className="fa fa-paper-plane-o"></i></button>
                                            </span>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>                                                                    
                            {/* <!-- 12. TAGS --> */}
                            <div className="widget bg-white  widget_tag_cloud">
                                <h4 className="widget-title">Tags</h4>
                                <div className="tagcloud">
                                    <a href="javascript:void(0);">Trouble </a>
                                    <a href="javascript:void(0);">Programmers</a>
                                    <a href="javascript:void(0);">Never</a>
                                    <a href="javascript:void(0);">Tell</a>
                                    <a href="javascript:void(0);">Doing</a>
                                    <a href="javascript:void(0);">Person</a>
                                    <a href="javascript:void(0);">Inventors Tag</a>
                                    <a href="javascript:void(0);">Between </a>
                                    <a href="javascript:void(0);">Abilities</a>
                                    <a href="javascript:void(0);">Fault </a>
                                    <a href="javascript:void(0);">Gets </a>
                                    <a href="javascript:void(0);">Macho</a>
                                </div>
                            </div>                         
                       </aside>
                </div>
                {/* <!-- SIDE BAR END --> */}
            </div>
        </div>
    </div>
    {/* <!-- SECTION CONTENT END --> */}
    
</div>
}

export default BlogContent