import * as React from 'react';
import MainImage from './MainImage';
import SlideLayer from './SlideLayer';
import SlideColor from './SlideColor';

export interface IProps {
    id : string
    img : string
    heading : string
    subheading : string
}

function Slide(props : IProps) {

    const dataIndex = "rs" + props.id
    const rowZoneId = "rrzm_" + props.id

    return  <li data-index={dataIndex} data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="2000"  data-thumb="images/main-slider/slider5/slide1.jpg"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1000" data-fsslotamount="7" data-saveperformance="off"  data-title="One" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
    <MainImage img={props.img} />
    <div id={rowZoneId} className="rev_row_zone rev_row_zone_middle" style={{zIndex: 6}}>

    <SlideLayer id={props.id} heading={props.heading} subheading={props.subheading} />
    </div>
    <SlideColor id={props.id}/>
</li>
}


export default Slide