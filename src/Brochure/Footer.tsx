import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '../styles/_footer.scss'
import logotrans from '../Images/PurpleRoseMUA_CapeTown_Makeup_Artist.jpg';
import Wrapper from '../Templetes/Wrapper'

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
		<Wrapper>
			<footer className="footer-distributed">
				<div className="footer-left">
				<div className="row">
				<div className="col logo-style">
					<img src={logotrans} className="footer-logo" alt="logo" />
				</div>
				</div>
					<p className="footer-links">
						<a href="#" className="link-1">Home</a>								
						<a href="#">About</a>
						<a href="#">Portfolio</a>
						<a href="#">Contact</a>
					</p>
					<p className="footer-company-name">Purple Rose MUA © 2019</p>
				</div>
				<div className="footer-center">
					<div>
				<FontAwesomeIcon icon={faMapMarker} />
						<p><span>Cape Town</span> Western Cape, South Africa</p>
					</div>
					<div>
				<FontAwesomeIcon icon={faPhone} />
						<p>+27 79 766 2397</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faEnvelope} />
						<p><a href="mailto:purplerosemuacpt@gmail.com">purplerosemuacpt@gmail.com</a></p>
					</div>
				</div>

				<div className="footer-right">
					<p className="footer-company-about">
						<span>About the company</span>
						Purple Rose MUA was founded in 2012, we are a Cape Town, based professional makeup artistry. We take great pride in our work ethic and professionalism to deliver a unique experience for every client.
					</p>
					<div className="footer-icons">
						<a href="https://www.facebook.com/purplerosemua/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
						<a href="https://www.instagram.com/purplerosemuacpt/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
						<a href="https://www.youtube.com/user/jeanerieng" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
					</div>
				</div>
			</footer>
		</Wrapper>
    );
  }
}
