import * as React from 'react';

export interface IAppProps {
}

function SubCaption(props : {heading : string}) {

    return <div className="tp-caption   tp-resizeme" 
    id="slide-407-layer-2" 
    data-x="['left','left','center','center']" data-hoffset="['0','50','0','0']" 
    data-y="['top','top','top','top']" data-voffset="['0','430','460','290']" 
               data-fontsize="['30','30','40','25']"
   data-lineheight="['40','40','50','30']"
   data-width="['none','100%','100%','100%']"
   data-height="none"
   data-whitespace="normal"

   data-type="text" 
   data-basealign="slide" 
   data-responsive_offset="on" 

   data-frames='[{"delay":"+890","split":"chars","splitdelay":0.03,"speed":300,"frame":"0","from":"sX:2;sY:2;opacity:0;fb:5px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},
   {"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;fb:10px;","ease":"Power4.easeOut"}]'
   data-margintop="[0,0,0,0]"
   data-marginright="[0,0,0,0]"
   data-marginbottom="[0,0,0,0]"
   data-marginleft="[0,0,0,0]"
   data-textAlign="['inherit','inherit','center','center']"
   data-paddingtop="[0,0,0,0]"
   data-paddingright="[0,0,0,0]"
   data-paddingbottom="[0,0,0,0]"
   data-paddingleft="[0,0,0,0]"

   style={{zIndex: 9, whiteSpace: `normal`, fontSize: `30px`, lineHeight: `40px`, fontWeight: 300,
color: `rgba(255, 255, 255, 1.00)`, display: `block`, fontFamily:`Poppins`}}>{props.heading}</div>
}


export default SubCaption