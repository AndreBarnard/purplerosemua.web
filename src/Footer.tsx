import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './styles/_footer.scss'
import logotrans from './Images/PurpleRoseMUA_CapeTown_Makeup_Artist.jpg';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
<footer className="footer-distributed">
	<div className="footer-left">
    <div className="row">
      <div className="col logo-style">
        <img src={logotrans} className="footer-logo" alt="logo" />
      </div>
    </div>
		<p className="footer-links">
			<a href="#" className="link-1">Home</a>								
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
			Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
		</p>
		<div className="footer-icons">
			<a href="https://www.facebook.com/purplerosemua/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
			<a href="https://www.instagram.com/purplerosemuacpt/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
			<a href="https://www.youtube.com/user/jeanerieng" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
		</div>
	</div>
</footer>
    );
  }
}
