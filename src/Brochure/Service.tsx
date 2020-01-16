import * as React from 'react';
import Module from '../Templetes/Module'

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Module>
        <h3 className="pr-title">Purple Rose Services</h3>
        <div className="pr-flyer-in">
        </div>
      </Module>
    );
  }
}
