import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import logotrans from '../Images/PurpleRoseMUA_CapeTown_Makeup_Artist.jpg';
import Wrapper from '../Templetes/Wrapper'
import {
	Link,
  } from "react-router-dom";
import Copyright from './Copyright';
import ContactUsBanner from './ContactUsBanner';
import FooterTopOverlayWraper from './FooterTopOverlayWraper';


export interface IAppProps {
}

const CompanyName = "Purple Rose MUA";

export default class Footer extends React.Component<IAppProps> {
  public render() {
    return (
		<footer className="site-footer footer-dark">
		<ContactUsBanner />
		<FooterTopOverlayWraper />
		<Copyright CompanyName={CompanyName}/>
	</footer>
    );
  }
}
