import * as React from 'react';

export interface IAppProps {
}

function Services() {

    return <div className="page-content  bg-white">
        
    {/* <!-- INNER PAGE BANNER --> */}
    <div className="wt-bnr-inr overlay-wraper" style={{backgroundImage:`url(images/banner/services.jpg)`}}>
        <div className="overlay-main bg-black opacity-07"></div>
        <div className="container">
            <div className="wt-bnr-inr-entry">
                <h1 className="text-white">Service Details</h1>
            </div>
        </div>
    </div>
    {/* <!-- INNER PAGE BANNER END --> */}
    
    {/* <!-- BREADCRUMB ROW -->                             */}
    <div className="bg-gray-light p-tb20">
        <div className="container">
            <ul className="wt-breadcrumb breadcrumb-style-2">
                <li><a href="javascript:void(0);"><i className="fa fa-home"></i> Home</a></li>
                <li>Service Details</li>
            </ul>
        </div>
    </div>
    {/* <!-- BREADCRUMB ROW END -->  */}
                      
    {/* <!-- SECTION CONTENT -->          */}
    <div className="section-full  p-t80 p-b50  ">
        <div className="container  bg-white ">
            <div className="section-content ">
                <div className="row">                
                    {/* <!-- LEFT PART --> */}
                    <div className="col-md-3 col-sm-3 p-tb15">
                        {/* <!-- WHAT WE DO --> */}
                        <div className="wt-nav-block m-b50">
                            <h4 className="wt-nav-title">What we do</h4>
                            <ul className="wt-nav wt-nav-pills">
                              <li><a href="javascript:void(0);">Electricity</a></li>
                              <li><a href="javascript:void(0);">Refurbishment</a></li>
                              <li><a href="javascript:void(0);">House Security</a></li>
                              <li><a href="javascript:void(0);">Laminate flooring</a></li>
                              <li><a href="javascript:void(0);">General Contracting</a></li>
                              <li><a href="javascript:void(0);">Beauty & Spa Consultant</a></li>
                            </ul>
                        </div>
                        {/* <!-- OUR SERVICES --> */}
                        <div className="widget widget_gallery mfp-gallery">
                            <h5 className="widget-title">Our Gallery</h5>
                            <ul>
                                <li>
                                    <div className="wt-post-thum">
                                        <a href="images/gallery/pic1.jpg" className="mfp-link" ><img src="images/gallery/thumb/pic1.jpg" alt=""/></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="wt-post-thum ">
                                        <a href="images/gallery/pic2.jpg" className="mfp-link"><img src="images/gallery/thumb/pic2.jpg" alt=""/></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="wt-post-thum  ">
                                        <a href="images/gallery/pic3.jpg" className="mfp-link"><img src="images/gallery/thumb/pic3.jpg" alt=""/></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="wt-post-thum ">
                                        <a href="images/gallery/pic4.jpg" className="mfp-link"><img src="images/gallery/thumb/pic4.jpg" alt=""/></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="wt-post-thum ">
                                        <a href="images/gallery/pic5.jpg" className="mfp-link"><img src="images/gallery/thumb/pic5.jpg" alt=""/></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="wt-post-thum ">
                                        <a href="images/gallery/pic6.jpg" className="mfp-link"><img src="images/gallery/thumb/pic6.jpg" alt=""/></a>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="wt-post-thum ">
                                        <a href="images/gallery/pic7.jpg" className="mfp-link"><img src="images/gallery/thumb/pic7.jpg" alt=""/></a>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="wt-post-thum ">
                                        <a href="images/gallery/pic8.jpg" className="mfp-link"><img src="images/gallery/thumb/pic8.jpg" alt=""/></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- SOCIAL MEDIA --> */}
                        <div className="m-b50">
                            <h5 className="widget-title ">Social media</h5>
                            <ul className="social-icons social-lg  bdr-1 p-a10 bdr-gray">
                                <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                <li><a href="javascript:void(0);" className="fa fa-linkedin"></a></li>
                                <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                <li><a href="javascript:void(0);" className="fa fa-youtube"></a></li>
                                <li><a href="javascript:void(0);" className="fa fa-instagram"></a></li>
                           </ul>
                        </div>
                        <div>
                     
                   <div className="wt-accordion acc-bg-gray" id="accordion9">
                    
                        <div className="panel wt-panel">
                        
                            <div className="acod-head acc-actives">
                                 <h6 className="acod-title text-uppercase">
                                    <a data-toggle="collapse" href="#collapseOne9" data-parent="#accordion9" ><i className="fa fa-globe"></i>
                                        Awsome Web Design
                                        <span className="indicator"><i className="fa fa-plus"></i></span>
                                    </a>
                                 </h6>
                            </div>
                            
                            <div id="collapseOne9" className="acod-body collapse in">
                                <div className="acod-content p-tb15">Web design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</div>
                            </div>
                            
                        </div>
                        
                        <div className="panel wt-panel">
                            <div className="acod-head">
                                 <h6 className="acod-title text-uppercase">
                                    <a data-toggle="collapse" href="#collapseTwo9" className="collapsed" data-parent="#accordion9" ><i className="fa fa-photo"></i>
                                       Graphic Design 
                                    <span className="indicator"><i className="fa fa-plus"></i></span>
                                    </a>
                                 </h6>
                            </div>
                            <div id="collapseTwo9" className="acod-body collapse">
                                <div className="acod-content p-tb15">Graphic design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                            </div>
                        </div>
                        
                        <div className="panel wt-panel">
                            <div className="acod-head">
                             <h6 className="acod-title text-uppercase">
                                <a data-toggle="collapse"  href="#collapseThree9" className="collapsed"  data-parent="#accordion9"><i className="fa fa-cog"></i>
                                Fast Developement
                                <span className="indicator"><i className="fa fa-plus"></i></span>
                                </a>
                             </h6>
                            </div>
                            <div id="collapseThree9" className="acod-body collapse">
                                <div className="acod-content p-tb15">Developement lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                            </div>
                        </div>
                        
                    </div>                                        
            
                     </div>
                     </div>
                    {/* <!-- LEFT PART -->  */}
                    
                    {/* <!-- RIGHT PART --> */}
                    <div className="col-md-9 col-sm-9 p-tb10">
                           {/* <!-- BLOG POST CAROUSEL --> */}
                        
                         {/* <!-- SERVICES SITE --> */}
                         <div className="p-lr15">
                            <div className="section-head">
                                <div className="text-left m-b10">
                                     <h3 className="text-uppercase">Services Sites</h3>
                                     <div className="wt-separator-outer">
                                       <div className="wt-separator style-icon">
                                           <i className="fa fa-leaf text-black"></i>
                                           <span className="separator-left bg-primary"></span>
                                           <span className="separator-right bg-primary"></span>
                                       </div>                                                        
                                    </div>
                                 </div>
                            </div>
                            <div className="section-content">
                                <div className="owl-carousel blog-carousel  owl-btn-vertical-center">
                                
                                    <div className="item">
                                        <div className="ow-blog-post date-style-2">
                                            <div className="ow-post-media wt-img-effect zoom-slow">
                                                <img src="images/our-work/pic2.jpg" alt="" />
                                            </div>
                                            <div className="ow-post-info p-tb30 bg-white">
                                                <div className="ow-post-title">
                                                    <h4 className="post-title"><a href="javascript:void(0);" title="Video post">Back Massage</a></h4>
                                                </div>
                                                <div className="ow-post-meta">
                                                    <ul>
                                                        <li className="post-date"> <i className="fa fa-calendar"></i><strong>17 Mar</strong> <span> 2017</span> </li>
                                                        <li className="post-author"><i className="fa fa-user"></i>By <a href="javascript:void(0);" title="Posts by John" rel="author">John</a> </li>
                                                        <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);" className="comments-link">1 Comment</a> </li>
                                                    </ul>
                                                </div>
                                                <div className="ow-post-text">
                                                    <p>Lorem Ipsum by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal .</p>
                                                </div>
                                                <div className="ow-post-readmore "> 
                                                    <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className=" site-button-link"> READ MORE  <i className="fa fa-angle-double-right"></i></a> 
                                                </div>
                                                <div className="ow-post-tags clearfix">
                                                    
                                                </div>
                                            </div>                                      
                                        </div>
                                    </div>
                                    
                                    <div className="item">
                                        <div className="ow-blog-post date-style-2">
                                            <div className="ow-post-media wt-img-effect zoom-slow">
                                                <img src="images/our-work/pic6.jpg" alt="" />
                                            </div>
                                            <div className="ow-post-info p-tb30 bg-white">
                                                <div className="ow-post-title">
                                                    <h4 className="post-title"><a href="javascript:void(0);" title="Video post">Head Massage </a></h4>
                                                </div>
                                                <div className="ow-post-meta">
                                                    <ul>
                                                        <li className="post-date"> <i className="fa fa-calendar"></i><strong>17 Mar</strong> <span> 2017</span> </li>
                                                        <li className="post-author"><i className="fa fa-user"></i>By <a href="javascript:void(0);" title="Posts by John" rel="author">John</a> </li>
                                                        <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);" className="comments-link">1 Comment</a> </li>
                                                    </ul>
                                                </div>
                                                <div className="ow-post-text">
                                                    <p>Lorem Ipsum by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal .</p>
                                                </div>
                                                <div className="ow-post-readmore "> 
                                                    <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className=" site-button-link"> READ MORE  <i className="fa fa-angle-double-right"></i></a> 
                                                </div>
                                                <div className="ow-post-tags clearfix">
                                                    
                                                </div>
                                            </div>                                      
                                        </div>
                                    </div>
                                    
                                    <div className="item">
                                        <div className="ow-blog-post date-style-2">
                                            <div className="ow-post-media wt-img-effect zoom-slow">
                                                <img src="images/our-work/pic4.jpg" alt="" />
                                            </div>
                                            <div className="ow-post-info p-tb30 bg-white">
                                                <div className="ow-post-title">
                                                    <h4 className="post-title"><a href="javascript:void(0);" title="Video post">Body Scrub</a></h4>
                                                </div>
                                                <div className="ow-post-meta">
                                                    <ul>
                                                        <li className="post-date"> <i className="fa fa-calendar"></i><strong>17 Mar</strong> <span> 2017</span> </li>
                                                        <li className="post-author"><i className="fa fa-user"></i>By <a href="javascript:void(0);" title="Posts by John" rel="author">John</a> </li>
                                                        <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);" className="comments-link">1 Comment</a> </li>
                                                    </ul>
                                                </div>
                                                <div className="ow-post-text">
                                                    <p>Lorem Ipsum by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal .</p>
                                                </div>
                                                <div className="ow-post-readmore "> 
                                                    <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className=" site-button-link"> READ MORE  <i className="fa fa-angle-double-right"></i></a> 
                                                </div>
                                                <div className="ow-post-tags clearfix">
                                                    
                                                </div>
                                            </div>                                      
                                        </div>
                                    </div>
                                    
                                    <div className="item">
                                        <div className="ow-blog-post date-style-2 date-skew">
                                            <div className="ow-post-media wt-img-effect zoom-slow">
                                                <img src="images/our-work/pic1.jpg" alt="" />
                                            </div>
                                            <div className="ow-post-info p-tb30 bg-white">
                                                <div className="ow-post-title">
                                                    <h4 className="post-title"><a href="javascript:void(0);" title="Video post">Massages & Body</a></h4>
                                                </div>
                                                <div className="ow-post-meta">
                                                    <ul>
                                                        <li className="post-date"> <i className="fa fa-calendar"></i><strong>17 Mar</strong> <span> 2017</span> </li>
                                                        <li className="post-author"><i className="fa fa-user"></i>By <a href="javascript:void(0);" title="Posts by John" rel="author">John</a> </li>
                                                        <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);" className="comments-link">1 Comment</a> </li>
                                                    </ul>
                                                </div>
                                                <div className="ow-post-text">
                                                    <p>Lorem Ipsum by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal .</p>
                                                </div>
                                                <div className="ow-post-readmore "> 
                                                    <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className=" site-button-link"> READ MORE  <i className="fa fa-angle-double-right"></i></a> 
                                                </div>
                                                <div className="ow-post-tags clearfix">
                                                    
                                                </div>
                                            </div>                                      
                                        </div>
                                    </div>
                                    
                                    <div className="item">
                                        <div className="ow-blog-post date-style-2">
                                            <div className="ow-post-media wt-img-effect zoom-slow">
                                                <img src="images/our-work/pic5.jpg" alt="" />
                                            </div>
                                            <div className="ow-post-info p-tb30 bg-white">
                                                <div className="ow-post-title">
                                                    <h4 className="post-title"><a href="javascript:void(0);" title="Video post">Back Massage</a></h4>
                                                </div>
                                                <div className="ow-post-meta">
                                                    <ul>
                                                        <li className="post-date"> <i className="fa fa-calendar"></i><strong>17 Mar</strong> <span> 2017</span> </li>
                                                        <li className="post-author"><i className="fa fa-user"></i>By <a href="javascript:void(0);" title="Posts by John" rel="author">John</a> </li>
                                                        <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);" className="comments-link">1 Comment</a> </li>
                                                    </ul>
                                                </div>
                                                <div className="ow-post-text">
                                                    <p>Lorem Ipsum by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal .</p>
                                                </div>
                                                <div className="ow-post-readmore "> 
                                                    <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className=" site-button-link"> READ MORE  <i className="fa fa-angle-double-right"></i></a> 
                                                </div>
                                                <div className="ow-post-tags clearfix">
                                                    
                                                </div>
                                            </div>                                      
                                        </div>
                                    </div>
                                    
                                    <div className="item">
                                        <div className="ow-blog-post date-style-2 ">
                                            <div className="ow-post-media wt-img-effect zoom-slow">
                                                <img src="images/our-work/pic3.jpg" alt="" />
                                            </div>
                                            <div className="ow-post-info p-tb30 bg-white">
                                                <div className="ow-post-title">
                                                    <h4 className="post-title"><a href="javascript:void(0);" title="Video post">Head Massage </a></h4>
                                                </div>
                                                <div className="ow-post-meta">
                                                    <ul>
                                                        <li className="post-date"> <i className="fa fa-calendar"></i><strong>17 Mar</strong> <span> 2017</span> </li>
                                                        <li className="post-author"><i className="fa fa-user"></i>By <a href="javascript:void(0);" title="Posts by John" rel="author">John</a> </li>
                                                        <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);" className="comments-link">1 Comment</a> </li>
                                                    </ul>
                                                </div>
                                                <div className="ow-post-text">
                                                    <p>Lorem Ipsum by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal .</p>
                                                </div>
                                                <div className="ow-post-readmore "> 
                                                    <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className=" site-button-link"> READ MORE  <i className="fa fa-angle-double-right"></i></a> 
                                                </div>
                                                <div className="ow-post-tags clearfix">
                                                    
                                                </div>
                                            </div>                                      
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div className="row">
                                {/* <!-- OUR OFFER -->  */}
                                 <div className="col-md-6 col-sm-6">
                                        <div className="text-left m-b10">
                                             <h3 className="text-uppercase">Our Offer</h3>
                                             <div className="wt-separator-outer">
                                               <div className="wt-separator style-icon">
                                                   <i className="fa fa-leaf text-black"></i>
                                                   <span className="separator-left bg-primary"></span>
                                                   <span className="separator-right bg-primary"></span>
                                               </div>                            
                                            </div>
                                         </div>
                                        <div>
                                            <ul className="list-check secondry">
                                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</li>
                                                <li>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</li>
                                                <li>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</li>
                                                <li>Text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.t</li>
                                                <li>Dorem ipsum dolor sit amet rem Ipsum has been the industry's standard dummy text</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                 {/* <!-- WHY IT'S BEST? --> */}
                                 <div className="col-md-6 col-sm-6">
                                        <div className="text-left m-b10">
                                           <h3 className="text-uppercase">Why It's Best?</h3>
                                           <div className="wt-separator-outer">
                                               <div className="wt-separator style-icon">
                                                   <i className="fa fa-leaf text-black"></i>
                                                   <span className="separator-left bg-primary"></span>
                                                   <span className="separator-right bg-primary"></span>
                                               </div>                            
                                           </div>
                                        </div>
                                        <div className="wt-icon-box-wraper bx-style-2 m-l40 m-b10 p-a10 left">
                                            <div className="wt-icon-box-sm text-primary bg-white radius bdr-2">
                                                <a href="javascript:void(0);" className="icon-cell"><i className="fa fa-trophy"></i></a>
                                            </div>
                                            <div className="icon-content p-l40">
                                                <h5 className="wt-tilte text-uppercase">BEST QUALITY</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod .</p>
                                            </div>
                                      </div>
                                        <div className="wt-icon-box-wraper bx-style-2 m-l40 m-b10 p-a10 left">
                                            <div className="wt-icon-box-sm text-primary bg-white radius bdr-2">
                                                <a href="javascript:void(0);" className="icon-cell"><i className="fa fa-pencil"></i></a>
                                            </div>
                                            <div className="icon-content p-l40">
                                                <h5 className="wt-tilte text-uppercase">INTEGRITY</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod .</p>
                                            </div>
                                      </div>
                                        <div className="wt-icon-box-wraper bx-style-2 m-l40 m-b10 p-a10 left">
                                            <div className="wt-icon-box-sm text-primary bg-white radius bdr-2">
                                                <a href="javascript:void(0);" className="icon-cell"><i className="fa fa-flag-checkered"></i></a>
                                            </div>
                                            <div className="icon-content p-l40">
                                                <h5 className="wt-tilte text-uppercase">STRATEGY</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod .</p>
                                            </div>
                                     </div>
                                    </div>
                             </div>
                         </div>
                     </div>
                    {/* <!-- RIGHT PART --> */}
                    
                </div>
            </div>
        </div>
     </div>
    {/* <!-- SECTION CONTENT END -->   */}
    
{/* <!-- CONTENT END --> */}
</div>
}

export default Services