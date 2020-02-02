import * as React from 'react';
import MainImage from './MainImage';
import SlideLayer from './SlideLayer';
import SlideColor from './SlideColor';

export interface IAppProps {
}

function Slide() {

    return  <li data-index="rs-407" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="2000"  data-thumb="images/main-slider/slider5/slide1.jpg"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1000" data-fsslotamount="7" data-saveperformance="off"  data-title="One" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
    <MainImage />
    {/* <!-- LAYERS --> */}
    <div id="rrzm_407" className="rev_row_zone rev_row_zone_middle" style={{zIndex: 6}}>

    <SlideLayer />
    </div>
    <SlideColor />
</li>
}


export default Slide