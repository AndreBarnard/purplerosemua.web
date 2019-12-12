import * as React from 'react';
import Main from './Main';
import ImageCarousel from './ImageCarousel';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
    <Main>
       <ImageCarousel/>
    </Main>
    );
  }
}
