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
                heading="Fashion Makeup"
                desc="Are you always in the lime-light and want to look fabilulas give us a buzz."
                route="/services" />
                <BestServiceBlock 
                flaticon="flaticon-blush"
                heading="Bridal Makeup"
                desc="Is it you specail day, the day evey women dream of since you been a little girl. We can help you make your dream a reality."
                route="/services" />
                <BestServiceBlock 
                flaticon="flaticon-combs"
                heading="Special Events"
                desc="Do you have a special event you where invited to and want to look stunning, contact us to make it happen."
                route="/services" />
                <BestServiceBlock 
                flaticon="flaticon-bronzer"
                heading="Matrix Dances"
                desc="It's the end for you school carer and you want to finish it off with a bang, we can make it happen if you give us a rang."
                route="/services" />
                <BestServiceBlock 
                flaticon="flaticon-hair-dryer"
                heading="Hair Styling"
                desc="We can make you look stunning by have an awesome hair day."
                route="/services" />
                <BestServiceBlock 
                flaticon="flaticon-spa"
                heading="Special Effects"
                desc="If you're going to costume or holloween party, we can make you stand out in the crowed."
                route="/services" />           
            </div>
        </div>        
    </div>
</div>
}

export default BestServicesSection