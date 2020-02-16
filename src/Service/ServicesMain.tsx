import * as React from 'react';
import ServiceItem from './ServiceItem';
import ServicePagination from './ServicePagination';

export interface IProps {
}

function ServicesMain(props : IProps) {
    return  <div className="section-full p-t80 p-b50">
    <div className="bg-service-team">
        <div className="container">
            <div className="section-content m-b50 ">
                <div className="row">
                    <ServiceItem 
                    name="Happily Ever After"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_BridalMakeUp.jpg")}
                    desc="Bridal Make up"
                    />
                   <ServiceItem 
                    name="Natural Glow Up"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_NatualGlowup.jpg")}
                    desc="Some Text about service"
                    />
                    <ServiceItem 
                    name="Glow Up"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_Glowup.jpg")}
                    desc="Some Text about service"
                    />
                    <ServiceItem 
                    name="Threading and Waxing"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_Waxing.jpg")}
                    desc="Some Text about service"
                    />
                   <ServiceItem 
                    name="Tinting"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_Tinting.jpg")}
                    desc="Some Text about service"
                    />
                    <ServiceItem 
                    name="Lash Lifting"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_LashLifting.jpg")}
                    desc="Some Text about service"
                    />
                    <ServiceItem 
                    name="Hair Styling"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_HairStyling.jpg")}
                    desc="Some Text about service"
                    />
                    <ServiceItem 
                    name="Special Effects"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_SpecailEffects.jpg")}
                    desc="Some Text about service"
                    />
                    <ServiceItem 
                    name="Facepaint"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_Facepainting.jpg")}
                    desc="Some Text about service"
                    />
                    
                </div>
            </div>
                  
           {/* <ServicePagination /> */}
        </div>
    </div>
 </div>
}

export default ServicesMain