import * as React from 'react';
import Header from '../Brochure/Header';
import Footer from '../Brochure/Footer';
import Wrapper from './Wrapper'

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
            <Wrapper>
              {this.props.children}
            </Wrapper>          
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
