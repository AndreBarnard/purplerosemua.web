import * as React from 'react';
import Banner from '../Components/Banner';
import Breadcrumb from '../Components/Breadcrumb';
import Pagination from '../Components/Pagination';
import Gallery from '../Components/Gallery';
import PorfolioImage from '../Components/PorfolioImage';

export interface IAppProps {
}

function SocietyVsReality() {

    const heading = "Society Vs Reality";

    return <div className="page-content">
            <Banner img={require('../../Images/portfolio/photoshoots/societyvsreality/PurpleRose_PhotoshootMakeUp_SocietyVsReality_Banner.jpg')} heading={heading} />
            <Breadcrumb heading={heading}/>
                <div className="section-full p-t80 p-b50">
                    <Pagination 
                    cat1Heading="Society"
                    cat2Heading="Reality"
                    cat3Heading="Society vs Reality"
                    cat4Heading=""
                    cat5Heading=""/>
                    <Gallery>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/societyvsreality/PurpleRose_PhotoshootMakeUp_SocietyVsReality_1.jpg')} 
                        heading="Society"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/societyvsreality/PurpleRose_PhotoshootMakeUp_SocietyVsReality_2.jpg')} 
                        heading="Society"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/societyvsreality/PurpleRose_PhotoshootMakeUp_SocietyVsReality_4.jpg')} 
                        heading="Society vs Reality"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/societyvsreality/PurpleRose_PhotoshootMakeUp_SocietyVsReality_5.jpg')} 
                        heading="Society vs Reality"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/societyvsreality/PurpleRose_PhotoshootMakeUp_SocietyVsReality_6.jpg')} 
                        heading="Society vs Reality"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/societyvsreality/PurpleRose_PhotoshootMakeUp_SocietyVsReality_7.jpg')} 
                        heading="Society vs Reality"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/societyvsreality/PurpleRose_PhotoshootMakeUp_SocietyVsReality_8.jpg')} 
                        heading="Reality"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/societyvsreality/PurpleRose_PhotoshootMakeUp_SocietyVsReality_9.jpg')} 
                        heading="Reality"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/societyvsreality/PurpleRose_PhotoshootMakeUp_SocietyVsReality_10.jpg')} 
                        heading="Reality"
                        desc=""
                        category="cat-2"/>
                    </Gallery>
                </div>
            </div>
}

export default SocietyVsReality