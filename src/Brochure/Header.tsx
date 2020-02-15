import * as React from 'react';
import logo from '../Images/PurpleRoseMUA_CapeTown_Makeup_Artist_Small.jpg';
import '../styles/_header.scss';
import '../styles/navigation.min.css';
import {Link} from "react-router-dom";

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
								<Link to="/" className="beautypress-logo beautypress-version-2">
									<figure>
										<img src={logo} alt="Purple Rose MUA" />
										<figcaption style={{textDecoration:`none`, color:`#000`}}>Makeup Artistry</figcaption>
									</figure>									
								</Link>
							</div>
							<div className="xs-col-5">
								<ul className="nav-menu nav-menu-centered text-left">
									<li><a href="#">portfolio</a>
										<ul className="nav-dropdown">
											<li><a href="">Weddings</a>
												<ul className="nav-dropdown">
												<li><Link to="/neethlingwedding">Neethling Wedding</Link></li>
												<li><Link to="/geyerwedding">Geyer Wedding</Link></li>
												<li><Link to="/dupperwedding">Dupper Wedding</Link></li>
												</ul>
											</li>
											<li><a href="">Photoshoots</a>
												<ul className="nav-dropdown">
												<li><Link to="/portfolio">Black Lips</Link></li>
												<li><Link to="/portfolio">Winter Shoot</Link></li>
												<li><Link to="/portfolio">Skin</Link></li>
												<li><Link to="/portfolio">Society Vs Reality</Link></li>
												</ul>
											</li>
											<li><a href="">Make-up Stars</a>
												<ul className="nav-dropdown">
												<li><Link to="/portfolio">Workshops</Link></li>
												</ul>
											</li>
											<li><a href="">Make-up Looks</a>
												<ul className="nav-dropdown">
												<li><Link to="/portfolio">Before & Afters</Link></li>
												</ul>
											</li>
											<li><a href="">Stage</a>
												<ul className="nav-dropdown">
												<li><Link to="/therougerevue">The Rouge Revue</Link></li>
												</ul>
											</li>
											<li><a href="">Facepaint & Special Effects</a>
												<ul className="nav-dropdown">
												<li><Link to="/portfolio">Facepaint</Link></li>
												<li><Link to="/portfolio">Special Effects</Link></li>
												<li><Link to="/portfolio">Grimehouse Music Video</Link></li>
												</ul>
											</li>
										</ul>
									</li>
									<li><Link to="/blog">blog</Link></li>
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
