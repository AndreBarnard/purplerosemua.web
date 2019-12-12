import * as React from 'react';
import Main from './Main';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
    <Main>
       <div className="jumbotron">
          <figure className="article-image">
              <img src="images/honeycomb.jpg" alt="" />
              <figcaption className="article-caption">Local apiaries generously donated equipment for the event</figcaption>
          </figure>
        </div>
      </Main>
    );
  }
}
