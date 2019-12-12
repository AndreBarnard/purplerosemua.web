import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from './Images/Home/Eye_Makeup_CapeTown.jpg';
import image2 from './Images/Home/Photo_Shoot_CapeTown_Abandoned_Zoo.jpg';
import image3 from './Images/Home/Photo_Shoot_CapeTown_Arms.jpg';
import image4 from './Images/Home/Photo_Shoot_CapeTown_Skin.jpg';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
      <Carousel autoPlay showThumbs={false} dynamicHeight={true} showStatus={false} >
        <div>
            <img src={image1} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={image2} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={image3} />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src={image4} />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    </div>
    );
  }
}
