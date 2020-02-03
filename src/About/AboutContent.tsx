import * as React from 'react';

export interface IAppProps {
}

export default class AboutContent extends React.Component<IAppProps> {
  public render() {
    return (
      <div className="page-content">            
            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper" style={{backgroundImage:`url(images/banner/about-banner.jpg)`}}>
                <div className="overlay-main bg-black opacity-07"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <h1 className="text-white">About 1</h1>
                    </div>
                </div>
            </div>
            {/* <!-- INNER PAGE BANNER END -->  */}
                
            {/* <!-- BREADCRUMB ROW -->                             */}
            <div className="bg-gray-light p-tb20">
                <div className="container">
                    <ul className="wt-breadcrumb breadcrumb-style-2">
                        <li><a href="javascript:void(0);"><i className="fa fa-home"></i> Home</a></li>
                        <li>About 1</li>
                    </ul>
                </div>
            </div>
            {/* <!-- BREADCRUMB  ROW END -->  */}
            
                {/* <!-- ABOUT COMPANY SECTION START --> */}
                <div className="section-full p-tb100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-5 col-xs-6 col-xs-100pc">
                                <div className="about-com-pic">
                                    <img src="images/about-pic.jpg" alt="" className="img-responsive"/>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-7 col-xs-6 col-xs-100pc">
                                <div className="section-head text-left">
                                    <h3 className="text-uppercase">About Company </h3>
                                    <div className="wt-separator-outer">
                                        <div className="wt-separator style-icon">
                                            <i className="fa fa-leaf text-black"></i>
                                            <span className="separator-left bg-primary"></span>
                                            <span className="separator-right bg-primary"></span>
                                        </div>                            
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                      Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown  galley.
                                    </p>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with the .
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12">
                                <div className="about-types row">
                                    <div className="col-md-6 col-sm-6 col-xs-6 col-xs-100pc p-tb20">
                                        <div className="wt-icon-box-wraper left">
                                            <div className="icon-md text-primary">
                                                <a href="#" className="icon-cell p-t5 center-block"><i className="flaticon-female-hairs"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="wt-tilte text-uppercase m-b0">Waxing</h5>
                                                <p>Lorem ipsum dolor sit piscing sed diam nonmy end .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 col-xs-100pc p-tb20 ">
                                        <div className="wt-icon-box-wraper left">
                                            <div className="icon-md text-primary">
                                                <a href="#" className="icon-cell p-t5 center-block"><i className="flaticon-eye"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="wt-tilte text-uppercase m-b0">Hair Makeup</h5>
                                                <p>Lorem ipsum dolor sit piscing sed diam nonmy end .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 col-xs-100pc p-tb20 ">
                                        <div className="wt-icon-box-wraper left">
                                            <div className="icon-md text-primary">
                                                <a href="#" className="icon-cell p-t5 center-block"><i className="flaticon-mirror"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="wt-tilte text-uppercase m-b0 ">Facial</h5>
                                                <p>Lorem ipsum dolor sit piscing sed diam nonmy end .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 col-xs-100pc p-tb20 ">
                                        <div className="wt-icon-box-wraper left">
                                            <div className="icon-md text-primary">
                                                <a href="#" className="icon-cell p-t5 center-block"><i className="flaticon-spray-bottle" aria-hidden="true"></i></a>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="wt-tilte text-uppercase m-b0">Massage</h5>
                                                <p>Lorem ipsum dolor sit piscing sed diam nonmy end .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
                {/* <!-- ABOUT COMPANY SECTION END -->  */}
                 
                {/* <!--COUNTER SECTION START --> */}
                <div className="section-full p-t30 bg-primary">
                    
                    <div className="container">
                        {/* <!-- COUNTER BLOCKS START -->     */}
                        <div className="section-content">
                            <div className="row">
                                
                            <div className="col-md-3 col-sm-6">
                            	<div className="wt-icon-box-wraper right p-a10 text-white m-b30">
                                    <span className="icon-md p-t10">
                                        <i className="fa fa-building"></i>
                                    </span>
                                    <div className="icon-content">
                                        <div className="font-26 font-weight-800  m-b5"><span className="counter">1000</span><b>+</b></div>
                                        <span className="text-uppercase">Happy Clients</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3 col-sm-6">
                                <div className="wt-icon-box-wraper right p-a10 text-white m-b30">
                                    <span className="icon-md p-t10">
                                    	<i className="fa fa-users"></i>
                                    </span>
                                    <div className="icon-content">
                                        <div className="font-26 font-weight-800  m-b5"><span className="counter">1500</span><b>+</b></div>
                                        <span>HAPPY CLIENTS</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3 col-sm-6">
                                <div className="wt-icon-box-wraper right p-a10 text-white m-b30">
                                    <span className="icon-md p-t10">
                                    	<i className="fa fa-user-plus"></i>
                                    </span>
                                    <div className="icon-content">
                                        <div className="counter font-26 font-weight-800 m-b5">4500</div>
                                        <span>WORKERS EMPLOYED</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3 col-sm-6">
                                <div className="wt-icon-box-wraper right p-a10 text-white m-b30">
                                    <span className="icon-md p-t10">
                                    	<i className="fa fa-trophy"></i>
                                    </span>
                                    <div className="icon-content">
                                        <div className="counter font-26 font-weight-800 m-b5">260</div>
                                        <span>AWARDS WON</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        {/* <!-- COUNTER BLOCKS START --> */}
                    </div>
                </div>
                {/* <!-- COUNTER SECTION END --> */}
                                               
                {/* <!-- OUR BEST SERVICES SECTION  START-->                   */}
                <div className="section-full text-center p-t80 p-b50 bg-gray">
                    <div className="container">
                    
                    	{/* <!-- TITLE START --> */}
                        <div className="section-head">
                            <h3 className="text-uppercase">Our best services</h3>
                            <div className="wt-separator style-icon">
                                <i className="fa fa-leaf text-black"></i>
                                <span className="separator-left bg-primary"></span>
                                <span className="separator-right bg-primary"></span>
                            </div>  
                        </div>
                        {/* <!-- TITLE END --> */}
                        
                        {/* <!-- OUR BEST SERVICES BLOCKS START --> */}
                        <div className="section-content no-col-gap">
                            <div className="row">
                        
                            {/* <!-- COLUMNS 1 --> */}
                            <div className="col-md-4 col-sm-6 animate_line">
                                <div className="wt-icon-box-wraper  p-a30 center bg-white m-a5">
                                    <div className="icon-md text-primary m-b20">
                                        <a href="#" className="icon-cell"><i className="flaticon-cosmetics" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="wt-tilte text-uppercase">Steam Bath</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus .</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- COLUMNS 2 --> */}
                            <div className="col-md-4 col-sm-6 animate_line">
                                <div className="wt-icon-box-wraper  p-a30 center bg-white m-a5">
                                    <div className="icon-md text-primary m-b20">
                                        <a href="#" className="icon-cell"><i className="flaticon-blush"></i></a>
                                    </div>
                                    <div className="icon-content ">
                                        <h5 className="wt-tilte text-uppercase">Herbal & Natural</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus .</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- COLUMNS 3 --> */}
                            <div className="col-md-4 col-sm-6 animate_line">
                                <div className="wt-icon-box-wraper  p-a30 center bg-white m-a5">
                                    <div className="icon-md text-primary m-b20">
                                        <a href="#" className="icon-cell"><i className="flaticon-combs"></i></a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="wt-tilte text-uppercase">Trained Professionals</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus .</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- COLUMNS 4 --> */}
                            <div className="col-md-4 col-sm-6 animate_line">
                                <div className="wt-icon-box-wraper  p-a30 center bg-white m-a5">
                                    <div className="icon-md text-primary m-b20">
                                        <a href="#" className="icon-cell"><i className="flaticon-bronzer"></i></a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="wt-tilte text-uppercase">Naturally Spa</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus .</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- COLUMNS 5 --> */}
                            <div className="col-md-4 col-sm-6 animate_line">
                                <div className="wt-icon-box-wraper  p-a30 center bg-white m-a5">
                                    <div className="icon-md text-primary m-b20">
                                        <a href="#" className="icon-cell"><i className="flaticon-hair-dryer"></i></a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="wt-tilte text-uppercase">Effective Treatments</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus .</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- COLUMNS 6 --> */}
                            <div className="col-md-4 col-sm-6 animate_line">
                                <div className="wt-icon-box-wraper  p-a30 center bg-white m-a5">
                                    <div className="icon-md text-primary m-b20">
                                        <a href="#" className="icon-cell"><i className="flaticon-spa"></i></a>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="wt-tilte text-uppercase">AESTHETICS</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus .</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        {/* <!-- OUR BEST SERVICES BLOCKS END --> */}
                        
                    </div>
                </div>
                {/* <!-- OUR BEST SERVICES SECTION END --> */}
                
                {/* <!-- TEAM STYLE FOUR START --> */}
                <div className="section-full p-t80 p-b50 ">
                    <div className="container">
                    
                        <div className=" m-b70">
                            {/* <!-- TITLE START --> */}
                            <div className="section-head text-center">
                                <h3 className="text-uppercase">Our Team</h3>
                                <div className="wt-separator-outer ">
                                    <div className="wt-separator style-icon">
                                        <i className="fa fa-leaf text-black"></i>
                                        <span className="separator-left bg-primary"></span>
                                        <span className="separator-right bg-primary"></span>
                                    </div>  
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                                since the 1500s, when an unknown printer took a galley.</p>
                            </div>
                            {/* <!-- TITLE END --> */}
                        </div> 
                        <div className="section-content">
                            <div className="row">
                            
                                {/* <!-- COLUMNS 1 -->  */}
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-t30">
                                    <div className="wt-team-four">
                                        <div className="wt-team-media">
                                            <a href="javascript:void(0);"><img src="images/our-team/pic1.jpg" alt="" /></a>
                                        </div>
                                        <div className="wt-team-info">
                                            <div className="wt-team-skew-block">
                                                <div className="social-icons-outer p-a20">
                                                    <ul className="social-icons social-square social-dark white-border m-b0">
                                                      <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                                      <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                                      <li><a href="javascript:void(0);" className="fa fa-linkedin"></a></li>
                                                      <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                                    </ul>
                                                </div>
                                             </div>
                                             <div className="p-a20">
                                                <h4 className="wt-team-title text-uppercase"><a href="javascript:void(0);">Richard Wagner</a></h4>
                                                <p>Beauty Therapist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- COLUMNS 2 --> */}
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-t30">
                                    <div className="wt-team-four">
                                        <div className="wt-team-media">
                                            <a href="javascript:void(0);"><img src="images/our-team/pic2.jpg" alt="" /></a>
                                        </div>
                                        <div className="wt-team-info">
                                            <div className="wt-team-skew-block">
                                                <div className="social-icons-outer p-a20">
                                                    <ul className="social-icons social-square social-dark white-border m-b0">
                                                      <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                                      <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                                      <li><a href="javascript:void(0);" className="fa fa-linkedin"></a></li>
                                                      <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                                    </ul>
                                                </div>
                                             </div>
                                             <div className="p-a20">
                                                <h4 className="wt-team-title text-uppercase"><a href="javascript:void(0);">Lisa Anderson</a></h4>
                                                <p>Beauty Therapist</p>
                                            </div>
                                      </div>
                                    </div>
                                </div>
                                {/* <!-- COLUMNS 3 --> */}
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-t30">
                                    <div className="wt-team-four">
                                        <div className="wt-team-media">
                                            <a href="javascript:void(0);"><img src="images/our-team/pic3.jpg" alt="" /></a>
                                        </div>
                                        <div className="wt-team-info">
                                            <div className="wt-team-skew-block">
                                                <div className="social-icons-outer p-a20">
                                                    <ul className="social-icons social-square social-dark white-border m-b0">
                                                      <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                                      <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                                      <li><a href="javascript:void(0);" className="fa fa-linkedin"></a></li>
                                                      <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                                    </ul>
                                                </div>
                                             </div>
                                             <div className="p-a20">
                                                <h4 className="wt-team-title text-uppercase"><a href="javascript:void(0);">Tommy Atkins</a></h4>
                                                <p>Beauty Therapist</p>
                                            </div>
                                      </div>
                                    </div>
                                </div>
                                {/* <!-- COLUMNS 4 --> */}
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-t30">
                                    <div className="wt-team-four">
                                        <div className="wt-team-media">
                                            <a href="javascript:void(0);"><img src="images/our-team/pic4.jpg" alt="" /></a>
                                        </div>
                                        <div className="wt-team-info">
                                            <div className="wt-team-skew-block">
                                                <div className="social-icons-outer p-a20">
                                                    <ul className="social-icons social-square social-dark white-border m-b0">
                                                      <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                                      <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                                      <li><a href="javascript:void(0);" className="fa fa-linkedin"></a></li>
                                                      <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                                    </ul>
                                                </div>
                                             </div>
                                             <div className="p-a20">
                                                <h4 className="wt-team-title text-uppercase"><a href="javascript:void(0);">John Halpern</a></h4>
                                                <p>Beauty Therapist</p>
                                            </div>
                                      </div>
                                    </div>
                                </div>

                             </div>
                            
                        </div>
                    
                    </div>
                </div>
                {/* <!-- TEAM STYLE FOUR END --> */}
                    
        </div>
    );
  }
}
