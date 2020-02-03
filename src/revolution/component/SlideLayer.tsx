import * as React from 'react';
import Caption from './Caption';
import SubCaption from './SubCaption';

export interface IProps {
    id : string
    heading : string
    subheading : string
}

function ComponentName(props : IProps) {

    const slideId = "slide-"+ props.id +"-layer-14";

    return <div className="tp-caption  " 
    id={slideId}
    data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" 
    data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
    data-width="none"
    data-height="none"
    data-whitespace="nowrap"

    data-type="row" 
    data-columnbreak="2" 
    data-basealign="slide" 
    data-responsive_offset="on" 
    data-responsive="off"
    data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
    data-margintop="[0,0,0,0]"
    data-marginright="[0,0,0,0]"
    data-marginbottom="[0,0,0,0]"
    data-marginleft="[0,0,0,0]"
    data-textAlign="['inherit','inherit','inherit','inherit']"
    data-paddingtop="[0,0,0,0]"
    data-paddingright="[100,50,50,50]"
    data-paddingbottom="[0,0,0,0]"
    data-paddingleft="[100,50,50,50]"

    style={{zIndex: 6, whiteSpace: `nowrap`, fontSize: `20px`, lineHeight: `22px`, fontWeight: 400, color: `rgba(255, 255, 255, 1.00)`}}>
<div className="tp-caption  " 
     id="slide-407-layer-15" 
     data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" 
     data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" 
                data-width="none"
    data-height="none"
    data-whitespace="nowrap"

    data-type="column" 
    data-responsive_offset="on" 
    data-responsive="off"
    data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},
    {"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
     data-columnwidth="100%"
    data-margintop="[0,0,0,0]"
    data-marginright="[0,0,0,0]"
    data-marginbottom="[0,0,0,0]"
    data-marginleft="[0,0,0,0]"
    data-textAlign="['center','center','center','center']"
    data-paddingtop="[0,0,0,0]"
    data-paddingright="[0,0,0,0]"
    data-paddingbottom="[0,0,0,0]"
    data-paddingleft="[0,0,0,0]"

    style={{zIndex: 7, width: `100%`}}>

    <Caption id={props.id} heading={props.heading}/>
    <SubCaption id={props.id} heading={props.subheading}/>

        </div>
    </div>
}


export default ComponentName