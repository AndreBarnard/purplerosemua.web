import * as React from 'react';
import PageBanner from '../Components/Site/PageBanner';
import Breadcrumb from '../Components/Site/Breadcrumb';
import CompanySection from './CompanySection';
import CounterSection from './CounterSection';
import BestServicesSection from './BestServicesSection';

export interface IAppProps {
}

export default class AboutContent extends React.Component<IAppProps> {
  public render() {
    return (
      <div className="page-content">     
            <PageBanner 
            img={require("../Images/banner/about-banner.jpg")}
            heading="About"
            />
            <Breadcrumb heading="About" /> 
            <CompanySection />
            <CounterSection />
            <BestServicesSection />
                
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
