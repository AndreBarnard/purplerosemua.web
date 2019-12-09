import * as React from 'react';
import logo from './Images/PurpleRoseMUA_CapeTown_Makeup_Artist.jpg';
import logoInstagram from './Images/instagram.jpg';
import Main from './Main';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
    <Main>
        <img src={logo} className="App-logo" alt="logo" />
        <p>This site is under construction - Coming Soon!!!</p>
        <a
          className="App-link"
          href="https://www.instagram.com/purplerosemuacpt/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </Main>
    );
  }
}
