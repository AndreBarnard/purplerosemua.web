import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <footer>
        <div className="row">
          <div className="col"><a href="https://www.facebook.com/purplerosemua/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></div>
          <div className="col"><a href="https://www.instagram.com/purplerosemuacpt/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></div>
          <div className="col"><a href="https://www.youtube.com/user/jeanerieng" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></div>
        </div>
      </footer>
    );
  }
}
