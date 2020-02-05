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
                    name="Service 1"
                    img={require("../Images/our-work/pic1.jpg")}
                    desc="Some Text about service"
                    />
                   <ServiceItem 
                    name="Service 1"
                    img={require("../Images/our-work/pic1.jpg")}
                    desc="Some Text about service"
                    />
                    <ServiceItem 
                    name="Service 1"
                    img={require("../Images/our-work/pic1.jpg")}
                    desc="Some Text about service"
                    />
                    <ServiceItem 
                    name="Service 1"
                    img={require("../Images/our-work/pic1.jpg")}
                    desc="Some Text about service"
                    />
                   <ServiceItem 
                    name="Service 1"
                    img={require("../Images/our-work/pic1.jpg")}
                    desc="Some Text about service"
                    />
                    <ServiceItem 
                    name="Service 1"
                    img={require("../Images/our-work/pic1.jpg")}
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