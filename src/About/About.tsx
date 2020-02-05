import * as React from 'react';
import Underconstruction from '../Brochure/Underconstruction';
import AboutContent from './AboutContent';

export interface IAppProps {
}

export default class About extends React.Component<IAppProps> {
  public render() {
    return (     
        <AboutContent />
    );
  }
}
