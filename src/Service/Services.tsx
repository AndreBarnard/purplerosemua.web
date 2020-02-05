import * as React from 'react';
import Underconstruction from '../Brochure/Underconstruction';
import ServicesContent from './ServicesContent';
import PageBanner from '../Components/Site/PageBanner';
import Breadcrum from '../Components/Site/Breadcrumb';
import ServicesMain from './ServicesMain';

export interface IAppProps {
}

function Services() {

    const pageCaption = "Services";

    return <div className="page-content  bg-white">
                <PageBanner img={require("../Images/banner/services.jpg")}
                heading={pageCaption}
                />
                <Breadcrum heading="Services"/>
                <ServicesMain />
            </div>
}

export default Services