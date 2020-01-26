import * as React from 'react';
import logo from '../Images/PurpleRoseMUA_CapeTown_Makeup_Artist_Small.jpg';
import '../styles/_header.scss';
import '../styles/navigation.min.css';
import {
  Link,
} from "react-router-dom";

export interface IAppProps {
}

export default class Header extends React.Component<IAppProps> {
  public render() {
    return (
      <header className="beautypress-header-section beautypress-header-version-4 navbar-fixed menu-skew header-height-calc-minus">
			<div className="beautypress-main-header bg-color-cyan">
				<div className="container">
					<nav className="xs-navigation-middle-menu">
						<div className="nav-toggle"></div>
						<div className="nav-menus-wrapper xs-row">
							<div className="xs-col-5">
								<ul className="nav-menu nav-menu-centered text-right">
									<li><a href="#">Home</a>
										<ul className="nav-dropdown">
											<li><a href="index.html">home version 1</a></li>
											<li><a href="index-v2.html">home version 2</a></li>
											<li><a href="index-v3.html">home version 3</a></li>
											<li><a href="index-v4.html">home version 4</a></li>
											<li><a href="index-v5.html">home version 5</a></li>
										</ul>
									</li>
									<li><a href="#">about</a>
										<ul className="nav-dropdown">
											<li><a href="about.html">about version 1</a></li>
											<li><a href="about-v2.html">about version 2</a></li>
											<li><a href="about-v3.html">about version 3</a></li>
											<li><a href="about-v4.html">about version 4</a></li>
											<li><a href="about-v5.html">about version 5</a></li>
										</ul>
									</li>
									<li><a href="#">services</a>
										<ul className="nav-dropdown">
											<li><a href="service.html">service version 1</a></li>
											<li><a href="service-v1.html">service version 2</a></li>
											<li><a href="service-v2.html">service version 3</a></li>
											<li><a href="service-v3.html">service version 4</a></li>
											<li><a href="square-service.html">service version 5</a></li>
										</ul>
									</li>
									<li><a href="#">portfolio</a>
										<ul className="nav-dropdown">
											<li><a href="">portfolio version 1</a>
												<ul className="nav-dropdown">
													<li><a href="portfolio-v1.html">portfolio filtering</a></li>
													<li><a href="portfolio-v1-3d.html">portfolio 3d filtering</a></li>
													<li><a href="portfolio-v1-2.html">portfolio out filtering</a></li>
													<li><a href="portfolio-v1-2-3d.html">portfolio 3d out filtering</a></li>
												</ul>
											</li>
											<li><a href="">portfolio version 2</a>
												<ul className="nav-dropdown">
													<li><a href="portfolio-v2.html">portfolio filtering</a></li>
													<li><a href="portfolio-v2-3d.html">portfolio 3d filtering</a></li>
													<li><a href="portfolio-v2-1.html">portfolio out filtering</a></li>
													<li><a href="portfolio-v2-1-3d.html">portfolio 3d out filtering</a></li>
												</ul>
											</li>
											<li><a href="">portfolio version 3</a>
												<ul className="nav-dropdown">
													<li><a href="portfolio-v3.html">portfolio filtering</a></li>
													<li><a href="portfolio-v3-3d.html">portfolio 3d filtering</a></li>
													<li><a href="portfolio-v3-1.html">portfolio out filtering</a></li>
													<li><a href="portfolio-v3-1-3d.html">portfolio 3d out filtering</a></li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</div>
							<div className="xs-col-2">
								<a href="index.html" className="beautypress-logo beautypress-version-2">
									<img src={logo} alt="Purple Rose MUA" />
								</a>
							</div>
							<div className="xs-col-5">
								<ul className="nav-menu nav-menu-centered text-left">
									<li><a href="#">blog</a>
										<ul className="nav-dropdown">
											<li><a href="blog.html">blog version 1</a></li>
											<li><a href="blog-v2.html">blog version 2</a></li>
											<li><a href="blog-post.html">blog post</a></li>
										</ul>
									</li>
									<li><a href="#">contact</a>
										<ul className="nav-dropdown">
											<li><a href="contact.html">contact version 1</a></li>
											<li><a href="contact-v2.html">contact version 2</a></li>
											<li><a href="contact-v3.html">contact version 3</a></li>
										</ul>
									</li>
									<li><a href="#">element</a>
										<div className="megamenu-panel">
											<div className="mega-menu-overlay-img"></div>
											<div className="megamenu-lists">
												<ul className="megamenu-list list-col-4">
													<li className="megamenu-list-title"><a href="#">other</a></li>
													<li><a href="element_404.html">404</a></li>
													<li><a href="element_appointment.html">appointment</a></li>
													<li><a href="element_appointment-v2.html">appointment 2</a></li>
													<li><a href="element_call-to-action.html">call to action</a></li>
													<li><a href="element_comming-soon.html">coming soon</a></li>
													<li><a href="element_comming-soon-v2.html">coming soon 2</a></li>
													<li><a href="element_faq.html">faq</a></li>
												</ul>
												<ul className="megamenu-list list-col-4">
													<li className="megamenu-list-title"><a href="#">other</a></li>
													<li><a href="element_footer.html">footer</a></li>
													<li><a href="element_fun-fact.html">fun fact</a></li>
													<li><a href="element_pricing.html">pricing</a></li>
													<li><a href="element_pricing-v2.html">pricing 2</a></li>
													<li><a href="element_shop.html">shop</a></li>
													<li><a href="element_sponsor.html">sponsor</a></li>
													<li><a href="element_tab.html">tab</a></li>
												</ul>
												<ul className="megamenu-list list-col-4">
													<li className="megamenu-list-title"><a href="#">other</a></li>
													<li><a href="element_team.html">team</a></li>
													<li><a href="element_team-v2.html">team 2</a></li>
													<li><a href="element_what-we-do.html">what we do</a></li>
													<li><a href="cart.html">cart</a></li>
													<li><a href="product-details.html">product details</a></li>
													<li><a href="element_menu.html">menu</a></li>
												</ul>
												<ul className="megamenu-list list-col-4">
													<li className="megamenu-list-title"><a href="#">image</a></li>
													<li className="text-content">
														<p>
															One morning, when Gregor Samsa woke from troubled dreams, he found.
														</p>
													</li>
												</ul>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
    );
  }
}
