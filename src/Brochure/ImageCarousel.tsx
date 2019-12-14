import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Module from '../Templetes/Module'
import WeddingImage from '../Images/Home/Wedding_Makeup.jpg';
import PhotoShoots from '../Images/Home/Photo_Shoot_CapeTown.jpg';
import SpecialEvents from '../Images/Home/Special_Events_Makeup_CapeTown.jpg'
import StudioPhotoShoot from '../Images/Home/Studio_Photo_Shoot_Makeup.jpg'

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Module>
        <Carousel autoPlay showThumbs={false} dynamicHeight={true} showStatus={false}>
        <div>
              <img src={SpecialEvents} />
              <p className="legend">Special Events Makeup</p>
          </div>
          <div>
              <img src={WeddingImage} />
              <p className="legend">Bridal Makeup</p>
          </div>
          <div>
              <img src={PhotoShoots} />
              <p className="legend">Photo Shoots</p>
          </div>
          <div>
              <img src={StudioPhotoShoot} />
              <p className="legend">Studio Photo Shoots</p>
          </div>
      </Carousel>
    </Module>
    );
  }
}
