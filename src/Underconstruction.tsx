import * as React from 'react';
import logo from './Images/PurpleRoseMUA_CapeTown_Makeup_Artist.jpg';
import Main from './Main';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
    <Main>
        <br />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <p>This site is under construction - Coming Soon!!!</p>
        <br />
        <br />
        <br />
        <br />
    </Main>
    );
  }
}
