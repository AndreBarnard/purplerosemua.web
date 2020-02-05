import * as React from 'react';
import PageBanner from '../Components/Site/PageBanner';
import Breadcrumb from '../Components/Site/Breadcrumb';
import CompanySection from './CompanySection';
import CounterSection from './CounterSection';
import BestServicesSection from './BestServicesSection';
import TeamSection from './TeamSection';

export interface IAppProps {
}

export default class About extends React.Component<IAppProps> {
  public render() {
    return (     
      <div className="page-content">     
      <PageBanner 
      img={require("../Images/banner/about-banner.jpg")}
      heading="About"
      />
      <Breadcrumb heading="About" /> 
      <CompanySection />
      <CounterSection />
      <BestServicesSection />
      <TeamSection />                    
  </div>
    );
  }
}
