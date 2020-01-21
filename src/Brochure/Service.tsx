import * as React from 'react';
import Module from '../Templetes/Module'
import ModuleDark from '../Templetes/ModuleDark'
import '../styles/_services.scss';
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
    <div className="item-title">Our services <span> {ServiceObj.services.makeup.title}</span></div>
            <div className="item-tooltip">{ServiceObj.services.makeup.tooltip}</div>
            <div className="item-desc">
              <p>{ServiceObj.services.makeup.desciptionParagraphTop}</p>
              <ul>
              {ServiceObj.services.makeup.serviceList.map((service, i) => (
                    <li>{service.styleName}</li>
                  ))} 
              </ul>
              <p>{ServiceObj.services.makeup.desciptionParagraphBottom}</p>
            </div>
          </div>
          <div className="pr-flyer-in col-md-4">
            <FlyerImageGallary Service={ServiceObj.services.makeup.serviceList} />
          </div>
        </div>
      </Module>
      <ModuleDark>
        <h3 className="pr-title">Purple Rose MUA Offers</h3>
        <div className="row">
            <div className="pr-flyer-in-dark col-md-4">
              <FlyerImageGallary Service={ServiceObj.services.hair.serviceList} />
            </div>
            <div className="pr-flyer-in-dark col-md-8">
              <div className="item-title">Our services <span> {ServiceObj.services.hair.title}</span></div>
              <div className="item-tooltip">{ServiceObj.services.hair.tooltip}</div>
              <div className="item-desc">
                <p>{ServiceObj.services.hair.desciptionParagraphTop}</p>
                <ul>
                {ServiceObj.services.hair.serviceList.map((service, i) => (
                      <li>{service.styleName}</li>
                    ))} 
                </ul>
                <p>{ServiceObj.services.hair.desciptionParagraphBottom}</p>
              </div>
            </div>
        </div>        
      </ModuleDark>
      <Module>
        <h3 className="pr-title">Purple Rose MUA Offers</h3>
        <div className="row">
          <div className="pr-flyer-in col-md-8">
          <div className="item-title">Our services <span> {ServiceObj.services.treadingWaxing.title}</span></div>
            <div className="item-tooltip">{ServiceObj.services.treadingWaxing.tooltip}</div>
            <div className="item-desc">
              <p>{ServiceObj.services.treadingWaxing.desciptionParagraphTop}</p>
              <ul>
              {ServiceObj.services.treadingWaxing.serviceList.map((service, i) => (
                    <li>{service.styleName}</li>
                  ))} 
              </ul>
              <p>{ServiceObj.services.treadingWaxing.desciptionParagraphBottom}</p>
            </div>
          </div>
          <div className="pr-flyer-in col-md-4">
            <FlyerImageGallary Service={ServiceObj.services.treadingWaxing.serviceList} />
          </div>
        </div>
      </Module>
      <ModuleDark>
        <h3 className="pr-title">Purple Rose MUA Offers</h3>
        <div className="row">
            <div className="pr-flyer-in-dark col-md-4">
              <FlyerImageGallary Service={ServiceObj.services.tintingLashLifting.serviceList} />
            </div>
            <div className="pr-flyer-in-dark col-md-8">
              <div className="item-title">Our services <span> {ServiceObj.services.tintingLashLifting.title}</span></div>
              <div className="item-tooltip">{ServiceObj.services.tintingLashLifting.tooltip}</div>
              <div className="item-desc">
                <p>{ServiceObj.services.tintingLashLifting.desciptionParagraphTop}</p>
                <ul>
                {ServiceObj.services.tintingLashLifting.serviceList.map((service, i) => (
                      <li>{service.styleName}</li>
                    ))} 
                </ul>
                <p>{ServiceObj.services.tintingLashLifting.desciptionParagraphBottom}</p>
              </div>
            </div>
        </div>        
      </ModuleDark>
      </>
    );
  }
}
