import * as React from 'react';
import PageBanner from '../Components/Site/PageBanner';
import Breadcrum from '../Components/Site/Breadcrumb';
import ServicesContentLeft from './ServicesContentLeft';
import ServicesContentRight from './ServicesContentRight';

export interface IAppProps {
}

function ServicesContent() {

    const pageCaption = "Services";

    return <div className="page-content  bg-white">
    
    <PageBanner 
    img={require("../Images/banner/services.jpg")}
    heading={pageCaption}
    />
    <Breadcrum heading="Services"/>
    <div className="section-full  p-t80 p-b50  ">
        <div className="container  bg-white ">
            <div className="section-content ">
                <div className="row">                
                    <ServicesContentLeft />
                    <ServicesContentRight />                    
                </div>
            </div>
        </div>
     </div>
</div>
}

export default ServicesContent