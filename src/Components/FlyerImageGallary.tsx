import * as React from 'react';

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
    return <div className="col-md-6 item-name">{props.name}</div>;
}

function ServicePrice(props: { price: string; }) {
    return <div className="col-md-6 item-details">Price: {props.price}</div>;
}

function ServiceImage(props: { imageSource: string; imageDesc: string; }) {
    return <div className="col-md-6">
        <div className="item-img">
            <img 
                src={props.imageSource} 
                alt={props.imageDesc}  
            />
        </div>
    </div>
}

function FlyerImgRowMain(props : Services) {
    var loopCounter = utils.pagecount(props.Service.length);
    var newServiceRow1: Service[] = [];
    newServiceRow1.push(props.Service[0]);
    newServiceRow1.push(props.Service[1]);    
    
    var newServiceRow2: Service[] = [];
    newServiceRow2.push(props.Service[2]);
    //newServiceRow2.push(props.Service[3]);  
    return <div>
        <FlyerImgRow Service={newServiceRow1} />
        <FlyerImgRow Service={newServiceRow2} />
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

function FlyerImgRow(props : Services) {
return <div>
        <div className="row">
            {props.Service.map((serviceItem, i) => (
                <ServiceImage imageSource={serviceItem.thumbnailLink} imageDesc={serviceItem.styleName}/>
            ))}
        </div>
        <div className="row">
        {props.Service.map((serviceItem, i) => (
                <ServiceName name={serviceItem.styleName}/>
            ))}
        </div>
        <div className="row">
            {props.Service.map((serviceItem, i) => (
                <ServicePrice price={serviceItem.price}/>
            ))}         
        </div>
    </div>;
}

interface Service {
    styleName: string,
    price: string,
    thumbnailLink: string
}

interface Services {
    Service: Service[]
}

export default class FlyerImageGallary extends React.Component<Services> {
  public render() {
    return (
        <>
        <FlyerImgRowMain Service={this.props.Service} />           
        </>
    );
  }
}