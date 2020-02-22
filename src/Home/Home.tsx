import * as React from 'react';
import RevolutionSlider from '../revolution/component/RevolutionSlider';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import OurExperts from './OurExperts';
import Gallery from './Gallery';
import LatestNews from './LatestNews/LatestNews';
import ContactUs from './ContactUs';
import Services from './Services/Services';
import ClientSlide from './ClientSlide';

export interface IAppProps {
}

export default class Home extends React.Component<IAppProps> {
  public render() {
    return (
      <div className="page-content">
        <RevolutionSlider />
        {/* <SpecialOffer /> */}
        <Services />
        <Gallery />
        {/* <ContactUs /> */}
        <OurExperts />
        <LatestNews />
        <ClientSlide />
      </div>
    );
  }
}
