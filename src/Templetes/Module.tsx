import * as React from 'react';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div className="pr-module">
          {this.props.children}
      </div>
    );
  }
}
