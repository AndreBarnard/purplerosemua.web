import * as React from 'react';

export interface IProps {
    id : string
}

function SlideColor(props : IProps) {

    const slideId = "slide-"+ props.id +"-layer-16";

    return <div className="tp-caption tp-shape tp-shapewrapper " 
    id={slideId}
    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
    data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
    data-width="full"
    data-height="full"
    data-whitespace="normal"

    data-type="shape" 
    data-basealign="slide" 
    data-responsive_offset="off" 
    data-responsive="off"
    data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeOut"},
    {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
    data-textAlign="['inherit','inherit','inherit','inherit']"
    data-paddingtop="[0,0,0,0]"
    data-paddingright="[0,0,0,0]"
    data-paddingbottom="[0,0,0,0]"
    data-paddingleft="[0,0,0,0]"

    style={{zIndex: 5, backgroundColor:`rgba(0, 0, 0, 0.35)`}}> </div>
}


export default SlideColor