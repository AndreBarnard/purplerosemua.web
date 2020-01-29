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
			<div className="beautypress-main-header bg-color-purple">
				<div className="container">
					<nav className="xs-navigation-middle-menu">
						<div className="nav-toggle"></div>
						<div className="nav-menus-wrapper xs-row">
							<div className="xs-col-5">
								<ul className="nav-menu nav-menu-centered text-right">
									<li><Link to="/">home</Link></li>
									<li><Link to="/about">about</Link></li>
									<li><Link to="/services">services</Link></li>
								</ul>
							</div>
							<div className="xs-col-2">
								<a href="index.html" className="beautypress-logo beautypress-version-2">
									<img src={logo} alt="Purple Rose MUA" />
								</a>
							</div>
							<div className="xs-col-5">
								<ul className="nav-menu nav-menu-centered text-left">
								<li><a href="#">portfolio</a>
										<ul className="nav-dropdown">
											<li><a href="">portfolio version 1</a>
												<ul className="nav-dropdown">
													<li><Link to="/portfolio">portfolio filtering</Link></li>
													<li><Link to="/portfolio">portfolio 3d filtering</Link></li>
													<li><Link to="/portfolio">portfolio out filtering</Link></li>
													<li><Link to="/portfolio">portfolio 3d out filtering</Link></li>
												</ul>
											</li>
											<li><a href="">portfolio version 2</a>
												<ul className="nav-dropdown">
												<li><Link to="/portfolio">portfolio filtering</Link></li>
												<li><Link to="/portfolio">portfolio 3d filtering</Link></li>
												<li><Link to="/portfolio">portfolio out filtering</Link></li>
												<li><Link to="/portfolio">portfolio 3d out filtering</Link></li>
												</ul>
											</li>
											<li><a href="">portfolio version 3</a>
												<ul className="nav-dropdown">
												<li><Link to="/portfolio">portfolio filtering</Link></li>
												<li><Link to="/portfolio">portfolio 3d filtering</Link></li>
												<li><Link to="/portfolio">portfolio out filtering</Link></li>
												<li><Link to="/portfolio">portfolio 3d out filtering</Link></li>
												</ul>
											</li>
										</ul>
									</li>
									<li><a href="#">blog</a>
										<ul className="nav-dropdown">
											<li><Link to="/blog">blog version 1</Link></li>
											<li><Link to="/blog">blog version 2</Link></li>
											<li><Link to="/blog">blog post</Link></li>
										</ul>
									</li>
									<li><Link to="/contact">contact</Link></li>
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
