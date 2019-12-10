import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Header />
        <article>
          <section>
            {this.props.children}
          </section>            
        </article>
        <Footer/>
      </div>
    );
  }
}
