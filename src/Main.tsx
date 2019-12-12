import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <div className="row">
          <div className="col col-lg-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-12">
          {this.props.children}
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-12">
            <Footer/>
          </div>          
        </div>
      </div>
    );
  }
}
