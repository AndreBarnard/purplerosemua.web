import * as React from 'react';
import ImageCarousel from './ImageCarousel';

export interface IAppProps {
}

export default class Home extends React.Component<IAppProps> {
  public render() {
    return (
    <ImageCarousel/>
    );
  }
}
