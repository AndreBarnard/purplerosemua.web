import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import logotrans from '../Images/PurpleRoseMUA_CapeTown_Makeup_Artist.jpg';
import Wrapper from '../Templetes/Wrapper'
import {
	Link,
  } from "react-router-dom";

export interface IAppProps {
}

export default class Footer extends React.Component<IAppProps> {
  public render() {
    return (
		<footer className="site-footer footer-dark">
		{/* <!-- COLL-TO ACTION START --> */}
		<div className="call-to-action-wrap call-to-action-skew bg-primary bg-no-repeat" style={{backgroundImage:`url('../images/background/bg-4.png')`}}>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-8">
						<div className="call-to-action-left p-tb20 p-r50">
							<h4 className="text-uppercase m-b10">We are ready to build your dream tell us more about your project</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor.</p>
						</div>
					</div>
					
					<div className="col-md-3">
						<div className="call-to-action-right p-tb30">
							<a href="contact-1.html" className="site-button-secondry radius-sm text-uppercase font-weight-600">
								Contact us
							</a>
						</div>
					</div>
				</div>
			 </div>
		</div>
		{/* <!-- FOOTER BLOCKES START -->   */}
		<div className="footer-top overlay-wraper">
			<div className="overlay-main"></div>
			<div className="container">
				<div className="row">
					{/* <!-- ABOUT COMPANY --> */}
					<div className="col-md-3 col-sm-6">  
						<div className="widget widget_about">
							<h4 className="widget-title">About Company</h4>
							<div className="logo-footer clearfix p-b15">
								<a href="index.html"><img src="images/footer-logo.png" width="230" height="67" alt=""/></a>
							</div>
							<p>Thewebmax ipsum dolor sit amet, consectetuer adipiscing elit,
								  sed diam nonummy nibh euismod tincidunt ut laoreet dolore agna aliquam erat .   
								  wisi enim ad minim veniam, quis tation. sit amet, consec tetuer.
								  ipsum dolor sit amet, consectetuer adipiscing.ipsum dolor sit .
							</p>  
						</div>
					</div> 
					{/* <!-- RESENT POST --> */}
					<div className="col-md-3 col-sm-6">
						<div className="widget recent-posts-entry-date">
							<h4 className="widget-title">Resent Post</h4>
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
												<li className="post-author"><i className="fa fa-user"></i>By Admin</li>
												<li className="post-comment"><i className="fa fa-comments"></i> 28</li>
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
												<li className="post-author"><i className="fa fa-user"></i>By Admin</li>
												<li className="post-comment"><i className="fa fa-comments"></i> 29</li>
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
												<li className="post-author"><i className="fa fa-user"></i>By Admin</li>
												<li className="post-comment"><i className="fa fa-comments"></i> 30</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>      
					{/* <!-- USEFUL LINKS --> */}
					<div className="col-md-3 col-sm-6">
						<div className="widget widget_services">
							<h4 className="widget-title">Useful links</h4>
							<ul>
								<li><a href="about-1.html">About</a></li>
								<li><a href="faq-1.html">FAQ</a></li>
								<li><a href="career.html">Career</a></li>
								<li><a href="our-team.html">Our Team</a></li>
								<li><a href="services.html">Services</a></li>
								<li><a href="gallery-grid-1.html">Gallery</a></li>
							</ul>
						</div>
					</div>
					{/* <!-- NEWSLETTER --> */}
					<div className="col-md-3 col-sm-6">
						<div className="widget widget_newsletter">
							<h4 className="widget-title">Newsletter</h4>
							<div className="newsletter-bx">
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
						{/* <!-- SOCIAL LINKS --> */}
						<div className="widget widget_social_inks">
							<h4 className="widget-title">Social Links</h4>
							<ul className="social-icons social-square social-darkest">
								<li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
								<li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
								<li><a href="javascript:void(0);" className="fa fa-linkedin"></a></li>
								<li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
								<li><a href="javascript:void(0);" className="fa fa-youtube"></a></li>
								<li><a href="javascript:void(0);" className="fa fa-instagram"></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
				
				   <div className="col-md-3 col-sm-6  p-tb20">
					   <div className="wt-icon-box-wraper left  bdr-1 bdr-gray-dark p-tb15 p-lr10 clearfix">
							<div className="icon-md text-primary">
								<span className="iconmoon-travel"></span>
							</div>
							<div className="icon-content">
								<h5 className="wt-tilte text-uppercase m-b0">Address</h5>
								<p>No.123 Chalingt Gates, Supper market New York</p>
							</div>
					   </div>
					</div>
				   <div className="col-md-3 col-sm-6  p-tb20 ">
					   <div className="wt-icon-box-wraper left  bdr-1 bdr-gray-dark p-tb15 p-lr10 clearfix ">
							<div className="icon-md text-primary">
								<span className="iconmoon-smartphone-1"></span>
							</div>
							<div className="icon-content">
								<h5 className="wt-tilte text-uppercase m-b0">Phone</h5>
								<p className="m-b0">+41 555 888 9585</p>
								<p>+41 555 888 9585</p>
							</div>
					   </div>
				   </div>
				   <div className="col-md-3 col-sm-6  p-tb20">
					   <div className="wt-icon-box-wraper left  bdr-1 bdr-gray-dark p-tb15 p-lr10 clearfix">
							<div className="icon-md text-primary">
								<span className="iconmoon-fax"></span>
							</div>
							<div className="icon-content">
								<h5 className="wt-tilte text-uppercase m-b0">Fax</h5>
								<p className="m-b0">FAX: (123) 123-4567</p>
								<p>FAX: (123) 123-4567</p>
							</div>
						</div>
					</div>
				   <div className="col-md-3 col-sm-6 p-tb20">
					   <div className="wt-icon-box-wraper left  bdr-1 bdr-gray-dark p-tb15 p-lr10 clearfix">
							<div className="icon-md text-primary">
								<span className="iconmoon-email"></span>
							</div>
							<div className="icon-content">
								<h5 className="wt-tilte text-uppercase m-b0">Email</h5>
								<p className="m-b0">info@demo.com</p>
								<p>info@demo1234.com</p>
							</div>
						</div>
					</div>

			  </div>
			</div>
		</div>
		{/* <!-- FOOTER COPYRIGHT --> */}
		<div className="footer-bottom overlay-wraper">
			<div className="overlay-main"></div>
			<div className="constrot-strip"></div>
			<div className="container p-t30">
				<div className="row">
					<div className="wt-footer-bot-left">
						<span className="copyrights-text">© 2017 Your Company. All Rights Reserved. Designed By thewebmax.</span>
					</div>
					<div className="wt-footer-bot-right">
						<ul className="copyrights-nav pull-right"> 
							<li><a href="javascript:void(0);">Terms & Condition</a></li>
							<li><a href="javascript:void(0);">Privacy Policy</a></li>
							<li><a href="contact-1.html">Contact Us</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
    );
  }
}
