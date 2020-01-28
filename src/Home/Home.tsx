import * as React from 'react';
import RevolutionSlider from './RevolutionSlider';
import SpecialOffer from './SpecialOffer';
import OurExperts from './OurExperts';
import Gallery from './Gallery';
import LatestNews from './LatestNews';
import ContactUs from './ContactUs';
import Services from './Services';

export interface IAppProps {
}

export default class Home extends React.Component<IAppProps> {
  public render() {
    return (
      <div className="page-content">
        <RevolutionSlider />
        <SpecialOffer />        
        <Services />
        <Gallery />
        <ContactUs />
        <OurExperts />
        <LatestNews />
      </div>
    );
  }
}
