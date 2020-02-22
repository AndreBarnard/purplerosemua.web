import * as React from 'react';
import ClientLinks from './ClientLinks';

export interface IProps {
}

function Client(props : IProps) {
    return <div className="widget">
    <h4 className="widget-title">Our Client</h4>
    <div className="owl-carousel widget-client p-t10">
    
        <ClientLinks 
        logo={require('../../Images/client-logo/Makeup-Stars-Cape-Town-logo.png')} 
        url="https://makeupstarscapetown.co.za/" />

        <ClientLinks 
            logo={require('../../Images/client-logo/therougerevue2.png')} 
            url="https://therougerevue.co.za/" />       

        <ClientLinks 
        logo={require('../../Images/client-logo/GrimeHouse.png')} 
        url="https://www.facebook.com/Grimehouse/" />      

        <ClientLinks 
        logo={require('../../Images/client-logo/dyme2.png')} 
        url="https://www.dyme.co.za/" />  

        <ClientLinks 
        logo={require('../../Images/client-logo/Dodgeball-SA.png')} 
        url="http://www.dodgeballsa.com/wp/" />  

        <ClientLinks 
        logo={require('../../Images/client-logo/mojo-hotel-logo.png')} 
        url="https://www.mojomarket.co.za/" />  

    </div>
</div> 
}

export default Client