import * as React from 'react';
import bg7 from '../Images/Background/bg-7.png';
import ClientLinks from '../Widget/Client/ClientLinks';

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
            logo={require('../Images/client-logo/therougerevue2.png')} 
            url="https://therougerevue.co.za/" />       

            <ClientLinks 
            logo={require('../Images/client-logo/GrimeHouse.png')} 
            url="https://www.facebook.com/Grimehouse/" />      

            <ClientLinks 
            logo={require('../Images/client-logo/dyme2.png')} 
            url="https://www.dyme.co.za/" />  

            <ClientLinks 
            logo={require('../Images/client-logo/Dodgeball-SA.png')} 
            url="http://www.dodgeballsa.com/wp/" />  

<ClientLinks 
            logo={require('../Images/client-logo/mojo-hotel-logo.png')} 
            url="https://www.mojomarket.co.za/" />  
            
            </div>
        </div>
    </div>
</div>
}


export default ClientSlide