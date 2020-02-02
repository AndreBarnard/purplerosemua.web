import * as React from 'react';

export interface IAppProps {
}

function MainImage() {

    return <img src={require('../../Images/main-slider/slider5/slide1.jpg')}  
    alt=""  
    data-bgposition="center center" 
    data-kenburns="on" 
    data-duration="20000" 
    data-ease="Linear.easeNone" 
    data-scalestart="130" 
    data-scaleend="100" 
    data-rotatestart="0" 
    data-rotateend="0" 
    data-offsetstart="0 0" 
    data-offsetend="0 0" 
    data-bgparallax="6" 
    className="rev-slidebg" 
    data-no-retina/>
}


export default MainImage