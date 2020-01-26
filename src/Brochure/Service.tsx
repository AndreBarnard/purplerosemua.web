import * as React from 'react';
import Module from '../Templetes/Module'
import ModuleDark from '../Templetes/ModuleDark'
import FlyerImageGallary from '../Components/FlyerImageGallary';
import ServiceData from '../Data/Services.json'

export interface IAppProps {
}

const ServiceObj = ServiceData;

export default class Services extends React.Component<IAppProps> {
  public render() {
    return (
      <>
      <Module>
        <h3 className="pr-title">Purple Rose MUA Offers</h3>
        <div className="row">
          <div className="pr-flyer-in col-md-8">
            <div className="item-title">Our services <span> Make-up</span></div>
            <div className="item-tooltip">All makeup is applied by quilified makeup artist</div>
            <div className="item-desc">
              <p>Our make-up services are  </p>
              <ul>
              {ServiceObj.services.makeup.map((service, i) => (
                    <li>{service.styleName}</li>
                  ))} 
              </ul>
              <p>Our service is not limited to just the above list please contact us if what you desire is not shown.</p>
            </div>
          </div>
          <div className="pr-flyer-in col-md-4">
            <FlyerImageGallary Service={ServiceObj.services.makeup} />
          </div>
        </div>
      </Module>
      <ModuleDark>
        <h3 className="pr-title">Purple Rose MUA Offers</h3>
        <div className="row">
            <div className="pr-flyer-in-dark col-md-4">
              <FlyerImageGallary Service={ServiceObj.services.hair} />
            </div>
            <div className="pr-flyer-in-dark col-md-8">
              <div className="item-title">Our services <span> Hair</span></div>
              <div className="item-tooltip">All hair is styled by quilified hair stylists</div>
              <div className="item-desc">
                <p>Our hair services are  </p>
                <ul>
                {ServiceObj.services.hair.map((service, i) => (
                      <li>{service.styleName}</li>
                    ))} 
                </ul>
                <p>Our service is not limited to just the above list please contact us if what you desire is not shown.</p>
              </div>
            </div>
        </div>        
      </ModuleDark>
      </>
    );
  }
}
