import * as React from 'react';
import '../styles/navigation.css';
import '../styles/settings-source.css';
import Slide from './Slide';

export interface IAppProps {
}

function RevolutionSlider() {

    return <div id="rev_slider_149_1_wrapper" 
    className="rev_slider_wrapper fullscreen-container" 
    data-alias="snowaddon1" data-source="gallery" style={{backgroundColor: `#2d3032`, padding:`0px`}}>
            <div id="rev_slider_149_1" className="rev_slider fullscreenbanner" style={{display:`none`}} data-version="5.4.1">
                <ul>	
                  {/* <!-- SLIDE  --> */}
                    <Slide 
                    id="407" 
                    img={require('../../Images/main-slider/slider5/slide1.jpg')}
                    heading="Happily ever after"
                    subheading="Where happiness is just a phone call away"/>

                    <Slide 
                    id="408" 
                    img={require('../../Images/main-slider/slider5/slide1.jpg')}
                    heading="Photoshoot Makeup"
                    subheading="Take you photoghrapy to the next level."/>
                </ul>                    
                <div className="tp-bannertimer" style={{height: `10px`,  backgroundColor: `rgba(255, 255, 255, 0.25)`}}></div>	
            </div>
        </div>
}


export default RevolutionSlider