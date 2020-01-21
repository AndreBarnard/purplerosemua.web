import * as React from 'react';
import '../styles/_services.scss';

export interface IAppProps {
}

const PageNumber = (props: { onClick: (arg0: any, arg1: any) => void; number: React.ReactNode; status: any; }) => (
    <span
      className="number"
      onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
    </span>
  );

  const utils = {
     // create an array of numbers between min and max (edges included)
  range: (min: number, max: number) => Array.from({length: max - min + 1}, (_, i) => min + i),

  pagecount: (listcount : number) => Math.ceil(listcount / 4),
  };

  const selectNumber = (number: any) => {
    return number;
  };

  const onNumberClick = () => {
  };


function ServiceName(props: { name: string; }) {
    return <div className="item-name">{props.name}</div>;
}

function ServicePrice(props: { price: string; }) {
    return <div className="item-details">Price: {props.price}</div>;
}

function ServiceImage(props: { imageSource: string; imageDesc: string; }) {
    return <div className="item-img">
            <img 
                src={props.imageSource} 
                alt={props.imageDesc}  
            />
    </div>
}

function FlyerImgGrid(ServiceObj : Services) {
    var loopCounter = utils.pagecount(ServiceObj.Service.length);
    var newServiceRow1: Service[] = [];
    newServiceRow1.push(ServiceObj.Service[0]);
    newServiceRow1.push(ServiceObj.Service[1]);    
    
    var newServiceRow2: Service[] = [];
    newServiceRow2.push(ServiceObj.Service[2]);
    //newServiceRow2.push(props.Service[3]);  
    return <div>
        <div className="row margin-left">
            {ServiceObj.Service.map((service, i) => (
                        <FlyerImg serviceItem={service} />
                        ))} 
        </div>
        <div className="pag-links">
            {utils.range(1, loopCounter).map((number: string | number | undefined) => (
            <PageNumber
              key={number}
              status={selectNumber(number)}
              number={number}
              onClick={onNumberClick}
            />
          ))}
        </div>
    </div>
}

function FlyerImg(props: {serviceItem : Service;}) {
return <div className="col-md-6">
            <div className="row">
                <ServiceImage imageSource={props.serviceItem.thumbnailLink} imageDesc={props.serviceItem.styleName}/>
            </div>
            <div className="row">
                <ServiceName name={props.serviceItem.styleName}/>
            </div>
            <div className="row">
                <ServicePrice price={props.serviceItem.price}/>     
            </div>
    </div>;
}

interface Service {
    styleName: string,
    price: string,
    sideNote: string,
    thumbnailLink: string
}

interface Services {
    Service: Service[]
}

export default class FlyerImageGallary extends React.Component<Services> {
  public render() {
    return (
        <>
        <FlyerImgGrid Service={this.props.Service} />           
        </>
    );
  }
}