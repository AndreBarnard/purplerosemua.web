import React, { useState } from 'react';
import IServices from './FlyerServicesInterface';
import IService from './FlyerServiceInterface';

function ServiceName(props: { name: string; }) {
    return <div className="item-name">{props.name}</div>;
}

function ServicePrice(props: { price: string; }) {
    return <div className="item-details">Price: {props.price}</div>;
}

function ServiceImage(props: { imageSource: string; imageDesc: string; }) {
    return <div className="item-img" style={{backgroundImage: `url(${props.imageSource})`}}>
            {/* <img 
                src={props.imageSource} 
                alt={props.imageDesc}  
            /> */}
    </div>
}

function FlyerImg(props: {serviceItem : IService;}) {
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

const utils = {
    // create an array of numbers between min and max (edges included)
range: (min: number, max: number) => Array.from({length: max - min + 1}, (_, i) => min + i),

pagecount: (listcount : number) => Math.ceil(listcount / 4),

imageLoopCount: (length: number, max: number, loopStart: number) => loopStart + Math.min(length - loopStart, max),
};

function FlyerImgGrid(props: {services : IServices}) {
    const pageCounter = utils.pagecount(props.services.serviceList.length);
    const imgCount = 4;
    const [pageNo, setPageNo] = useState(0);
    const loopStart = pageNo * imgCount;
    const imgUBound = utils.imageLoopCount(props.services.serviceList.length, imgCount, loopStart);

    const renderImages = () => {
        const result: any[] = [];
        for (let i = (loopStart); i < imgUBound; i++) {
            result.push(<FlyerImg serviceItem={props.services.serviceList[i]} />)
        }
        return result;
    }

    return <div>
        <div className="row margin-left">
            {renderImages()}
        </div>
        <div className="pag-links">
            {utils.range(1, pageCounter).map((number: number) => (
            <span
                className="number"    
                onClick={() => setPageNo(number - 1)}           
                >
                {number}
            </span>
          ))}
        </div>
    </div>
}

export default FlyerImgGrid