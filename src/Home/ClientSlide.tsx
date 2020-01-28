import * as React from 'react';
import bg7 from '../Images/Background/bg-7.png';
import ClientLinks from './ClientLinks';

export interface IAppProps {
}

function ClientSlide() {

    return <div className="section-full p-t50 p-b10 overlay-wraper pr-bg-color bg-repeat" style={{backgroundImage:`url(${bg7})`}}>
    <div className="container">
        <div className="section-content">
            <div className="owl-carousel client-logo-carousel">
            
            <ClientLinks 
            logo={require('../Images/client-logo/Makeup-Stars-Cape-Town-logo.png')} 
            url="https://makeupstarscapetown.co.za/" />

            <ClientLinks 
            logo={require('../Images/client-logo/logo2.png')} 
            url="http://www.google.com" />

             <ClientLinks 
            logo={require('../Images/client-logo/logo3.png')} 
            url="http://www.google.com" />
              
              <ClientLinks 
            logo={require('../Images/client-logo/logo4.png')} 
            url="http://www.google.com" />

            <ClientLinks 
            logo={require('../Images/client-logo/logo5.png')} 
            url="http://www.google.com" />

           <ClientLinks 
            logo={require('../Images/client-logo/logo6.png')} 
            url="http://www.google.com" />               
            
            </div>
        </div>
    </div>
</div>
}


export default ClientSlide