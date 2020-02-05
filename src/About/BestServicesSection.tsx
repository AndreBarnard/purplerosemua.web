import * as React from 'react';
import BestServiceBlock from './BestServiceBlock';
import Title from '../Components/Site/Title';

export interface IProps {
}

function BestServicesSection(props : IProps) {
    return <div className="section-full text-center p-t80 p-b50 bg-gray">
    <div className="container">    
        <Title heading="Our best services"/>
        <div className="section-content no-col-gap">
            <div className="row">        
                <BestServiceBlock 
                flaticon="flaticon-cosmetics"
                heading="Service 1"
                desc="Some text about service"
                route="/services" />
                <BestServiceBlock 
                flaticon="flaticon-blush"
                heading="Service 2"
                desc="Some text about service"
                route="/services" />
                <BestServiceBlock 
                flaticon="flaticon-combs"
                heading="Service 3"
                desc="Some text about service"
                route="/services" />
                <BestServiceBlock 
                flaticon="flaticon-bronzer"
                heading="Service 4"
                desc="Some text about service"
                route="/services" />
                <BestServiceBlock 
                flaticon="flaticon-hair-dryer"
                heading="Service 5"
                desc="Some text about service"
                route="/services" />
                <BestServiceBlock 
                flaticon="flaticon-spa"
                heading="Service 6"
                desc="Some text about service"
                route="/services" />           
            </div>
        </div>        
    </div>
</div>
}

export default BestServicesSection