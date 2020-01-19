import * as React from 'react';
import logo from '../Images/PurpleRoseMUA_CapeTown_Makeup_Artist.jpg';
import '../styles/_header.scss';
import {
  Link,
} from "react-router-dom";

export interface IAppProps {
}

export default class Header extends React.Component<IAppProps> {
  public render() {
    return (
      <header>
         <nav className="main-nav">
          <div className="logo"><img src={logo} className="header-logo" alt="Purple Rose MUA" /></div>
          <p className="nav-slogan">Professional Makeup Artist</p>
            <ul> 
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
      </header>
    );
  }
}
