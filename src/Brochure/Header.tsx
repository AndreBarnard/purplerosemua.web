import * as React from 'react';
import logo from '../Images/PurpleRoseMUA_CapeTown_Makeup_Artist.jpg';
import '../styles/_header.scss'

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <header>
         <nav className="main-nav">
          <div className="logo"><img src={logo} className="header-logo" alt="Purple Rose MUA" /></div>
          <p className="nav-slogan">Professional Makeup Artist</p>
            <ul> 
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
      </header>
    );
  }
}