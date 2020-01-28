import * as React from 'react';

export interface IAppProps {
}

function Gallery() {

    return <div className="section-full p-t80 p-b80 bg-white" id="content1">
    <div className="container">
         {/* <!-- TITLE START--> */}
         <div className="section-head text-center">
            <h2><span className="text-primary">Our</span> Gallery</h2>
            <div className="wt-separator-outer ">
                <div className="wt-separator style-icon">
                    <i className="fa fa-leaf text-black"></i>
                    <span className="separator-left bg-primary"></span>
                    <span className="separator-right bg-primary"></span>
                </div>                            
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
         {/* <!-- TITLE END--> */}
                                  
         {/* <!-- PAGINATION START --> */}
        <div className="filter-wrap p-a15 our-gallery  m-tb30">
            <ul className="masonry-filter link-style  text-uppercase center-block m-t0">
                <li className="active"><a data-filter="*" href="#">All</a></li>
                <li><a data-filter=".cat-filter-1" href="#">Hair cut</a></li>
                <li><a data-filter=".cat-filter-2" href="#">Foot</a></li>
                <li><a data-filter=".cat-filter-3" href="#">Body</a></li>
                <li><a data-filter=".cat-filter-4" href="#">Massage</a></li>
                <li><a data-filter=".cat-filter-5" href="#">Face massage</a></li>
            </ul>
        </div>
        {/* <!-- PAGINATION END --> */}
       
        <div className="portfolio-wrap mfp-gallery  no-col-gap">
                <div className="row">
                    <div className="masonry-item cat-filter-1 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <div className="wt-gallery-bx">
                            <div className="wt-thum-bx wt-img-effect wt-img-overlay7">
                            
                                <a href="javascript:void(0);">
                                    <img src={require('../Images/gallery/portrait/pic5.jpg')}  alt="" />
                                </a>
                                
                                <div className="overlay-bx">
                                    <div className="overlay-icon">
                                        <a href="javascript:void(0);">
                                            <i className="fa fa-link wt-icon-box-xs"></i>
                                        </a>
                                        <a href={require('../Images/gallery/portrait/pic5.jpg')} className="mfp-link">
                                            <i className="fa fa-picture-o wt-icon-box-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    
                    <div className="masonry-item cat-filter-2 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <div className="wt-gallery-bx">
                            <div className="wt-thum-bx wt-img-effect wt-img-overlay7">
                            
                                <a href="javascript:void(0);">
                                    <img src={require('../Images/gallery/portrait-half/pic1.jpg')}  alt="" />
                                </a>
                                
                                <div className="overlay-bx">
                                    <div className="overlay-icon">
                                        <a href="javascript:void(0);">
                                            <i className="fa fa-link wt-icon-box-xs"></i>
                                        </a>
                                        <a href={require('../Images/gallery/portrait-half/pic1.jpg')} className="mfp-link">
                                            <i className="fa fa-picture-o wt-icon-box-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    
                    <div className="masonry-item cat-filter-3 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <div className="wt-gallery-bx">
                            <div className="wt-thum-bx wt-img-effect wt-img-overlay7">
                            
                                <a href="javascript:void(0);">
                                    <img src={require('../Images/gallery/portrait/pic6.jpg')}  alt="" />
                                </a>
                                
                                <div className="overlay-bx">
                                    <div className="overlay-icon">
                                        <a href="javascript:void(0);">
                                            <i className="fa fa-link wt-icon-box-xs"></i>
                                        </a>
                                        <a href={require('../Images/gallery/portrait/pic6.jpg')} className="mfp-link">
                                            <i className="fa fa-picture-o wt-icon-box-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    
                    <div className="masonry-item cat-filter-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <div className="wt-gallery-bx">
                            <div className="wt-thum-bx wt-img-effect wt-img-overlay7">
                            
                                <a href="javascript:void(0);">
                                    <img src={require('../Images/gallery/portrait-half/pic2.jpg')}  alt="" />
                                </a>
                                
                                <div className="overlay-bx">
                                    <div className="overlay-icon">
                                        <a href="javascript:void(0);">
                                            <i className="fa fa-link wt-icon-box-xs"></i>
                                        </a>
                                        <a href={require('../Images/gallery/portrait-half/pic2.jpg')} className="mfp-link">
                                            <i className="fa fa-picture-o wt-icon-box-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    
                    <div className="masonry-item cat-filter-5 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <div className="wt-gallery-bx">
                            <div className="wt-thum-bx wt-img-effect wt-img-overlay7">
                            
                                <a href="javascript:void(0);">
                                    <img src={require('../Images/gallery/portrait-half/pic3.jpg')}  alt="" />
                                </a>
                                
                                <div className="overlay-bx">
                                    <div className="overlay-icon">
                                        <a href="javascript:void(0);">
                                            <i className="fa fa-link wt-icon-box-xs"></i>
                                        </a>
                                        <a href="images/gallery/portrait-half/pic3.jpg" className="mfp-link">
                                            <i className="fa fa-picture-o wt-icon-box-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    
                    <div className="masonry-item cat-filter-1 col-lg-8 col-md-8 col-sm-8 col-xs-6">
                        <div className="wt-gallery-bx">
                            <div className="wt-thum-bx wt-img-effect wt-img-overlay7">
                            
                                <a href="javascript:void(0);">
                                    <img src={require('../Images/gallery/landscape-half/pic1.jpg')}  alt="" />
                                </a>
                                
                                <div className="overlay-bx">
                                    <div className="overlay-icon">
                                        <a href="javascript:void(0);">
                                            <i className="fa fa-link wt-icon-box-xs"></i>
                                        </a>
                                        <a href={require('../Images/gallery/landscape-half/pic1.jpg')} className="mfp-link">
                                            <i className="fa fa-picture-o wt-icon-box-xs"></i>
                                        </a>
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


export default Gallery