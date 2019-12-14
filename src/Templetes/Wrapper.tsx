import * as React from 'react';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div id="pr-wrapper" className="container">
          {this.props.children}
      </div>
    );
  }
}
