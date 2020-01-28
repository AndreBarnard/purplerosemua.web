import * as React from 'react';
import Title from './Title';

export interface IAppProps {
}

function Gallery() {

    return <div className="section-full p-t80 p-b80 bg-white" id="content1">
    <div className="container">
    <Title 
        titleSpan="Our" 
        titleH2="Gallery" 
        paragraph="Some text about Purple rose gallary" />
                                 
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