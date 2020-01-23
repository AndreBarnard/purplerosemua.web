import * as React from 'react';
import Module from '../Templetes/Module'
import ModuleDark from '../Templetes/ModuleDark'
import '../styles/_services.scss';
import FlyerImgGrid from '../Components/FlyerImageGrid/FlyerImgGrid';
import ServiceObj from '../Data/Services.json'
import IServices from '../Components/FlyerImageGrid/FlyerServicesInterface';

export interface IAppProps {
}

const make = ServiceObj.services.makeup;
const hair = ServiceObj.services.hair;
const treadingWaxing = ServiceObj.services.treadingWaxing;
const tintingLashLifting = ServiceObj.services.tintingLashLifting;

const makeupService : IServices = {
  serviceList : make.serviceList
};

const hairService : IServices = {
  serviceList : hair.serviceList
};
const treadingWaxingService : IServices = {
  serviceList : treadingWaxing.serviceList
};

const tintingLashLiftingService : IServices = {
  serviceList : tintingLashLifting.serviceList
};

export default class Services extends React.Component<IAppProps> {
  public render() {

    return (
      <>
      <Module>
        <h3 className="pr-title">Purple Rose MUA Offers</h3>
        <div className="row">
          <div className="pr-flyer-in col-md-8">
            <div className="item-title">Our services <span> {make.title}</span></div>
            <div className="item-tooltip">{make.tooltip}</div>
            <div className="item-desc">
              <p>{make.desciptionParagraphTop}</p>
              <ul>
              {make.serviceList.map((service, i) => (
                    <li>{service.styleName}</li>
                  ))} 
              </ul>
              <p>{make.desciptionParagraphBottom}</p>
            </div>
          </div>
          <div className="pr-flyer-in col-md-4">
            <FlyerImgGrid services={makeupService} />
          </div>
        </div>
      </Module>
      <ModuleDark>
        <h3 className="pr-title">Purple Rose MUA Offers</h3>
        <div className="row">
            <div className="pr-flyer-in-dark col-md-4">
            <FlyerImgGrid services={hairService} />
            </div>
            <div className="pr-flyer-in-dark col-md-8">
              <div className="item-title">Our services <span> {hair.title}</span></div>
              <div className="item-tooltip">{hair.tooltip}</div>
              <div className="item-desc">
                <p>{hair.desciptionParagraphTop}</p>
                <ul>
                {hair.serviceList.map((service, i) => (
                      <li>{service.styleName}</li>
                    ))} 
                </ul>
                <p>{hair.desciptionParagraphBottom}</p>
              </div>
            </div>
        </div>        
      </ModuleDark>
      <Module>
        <h3 className="pr-title">Purple Rose MUA Offers</h3>
        <div className="row">
          <div className="pr-flyer-in col-md-8">
          <div className="item-title">Our services <span> {treadingWaxing.title}</span></div>
            <div className="item-tooltip">{treadingWaxing.tooltip}</div>
            <div className="item-desc">
              <p>{treadingWaxing.desciptionParagraphTop}</p>
              <ul>
              {treadingWaxing.serviceList.map((service, i) => (
                    <li>{service.styleName}</li>
                  ))} 
              </ul>
              <p>{treadingWaxing.desciptionParagraphBottom}</p>
            </div>
          </div>
          <div className="pr-flyer-in col-md-4">
            <FlyerImgGrid services={treadingWaxingService} />
          </div>
        </div>
      </Module>
      <ModuleDark>
        <h3 className="pr-title">Purple Rose MUA Offers</h3>
        <div className="row">
            <div className="pr-flyer-in-dark col-md-4">
            <FlyerImgGrid services={tintingLashLiftingService} />
            </div>
            <div className="pr-flyer-in-dark col-md-8">
              <div className="item-title">Our services <span> {tintingLashLifting.title}</span></div>
              <div className="item-tooltip">{tintingLashLifting.tooltip}</div>
              <div className="item-desc">
                <p>{tintingLashLifting.desciptionParagraphTop}</p>
                <ul>
                {tintingLashLifting.serviceList.map((service, i) => (
                      <li>{service.styleName}</li>
                    ))} 
                </ul>
                <p>{tintingLashLifting.desciptionParagraphBottom}</p>
              </div>
            </div>
        </div>        
      </ModuleDark>
      <div className="row">
        <div className="col-md-12 page-header">
          <h2>Booking our services</h2>
        </div>
        <div className="col-md-2 pr-article-left">          
          <img className="border-img" src="http://www.purplerosemua.com/static/media/PurpleRoseMUA_CapeTown_Makeup_bookings.jpg" alt="Purple Rose MUA" />
        </div>
        <div className="col-md-10">
          <div className="row pr-block">
            <div className="col-md-3"><span>01</span><p>Make Appointment</p></div>
            <div className="col-md-3"><span>02</span><p>Choose style</p></div>
            <div className="col-md-3"><span>03</span><p>We Arrive</p></div>
            <div className="col-md-3"><span>04</span><p>Look Gorgeous</p></div>
          </div>
          <div className="row booking-middle-row">
            Follow easy steps above to make Appointment.
          </div>
          <div className="row">
            <div className="col-md-2 pr-box">
            <img src="http://www.purplerosemua.com/static/media/SnapScanSupport_Small.jpg" alt="snap scan accepted"/></div>
            <div className="col-md-2 pr-box">
              <a 
                      href="http://www.purplerosemua.com/static/media/PurpleRoseMua Pricelist2020.pdf"
                      target="_blank"
                      className="readmore"
                      >Download Pricelist</a>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
