import * as React from 'react';
import Banner from '../Components/Banner';
import Breadcrumb from '../Components/Breadcrumb';
import Pagination from '../Components/Pagination';
import Gallery from '../Components/Gallery';
import PorfolioImage from '../Components/PorfolioImage';

export interface IAppProps {
}

function Facepaint() {

    const heading = "Facepaint";

    return <div className="page-content">
            <Banner img={require('../../Images/portfolio/photoshoots/skin/PurpleRose_PhotoshootMakeUp_Skin_lauren-44.jpg')} heading={heading} />
            <Breadcrumb heading={heading}/>
                <div className="section-full p-t80 p-b50">
                    <Pagination 
                    cat1Heading="Face"
                    cat2Heading="Group Face"
                    cat3Heading="Group "
                    cat4Heading=""
                    cat5Heading=""/>
                    <Gallery>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/skin/PurpleRose_PhotoshootMakeUp_Skin_lauren-34.jpg')} 
                        heading="Face"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/skin/PurpleRose_PhotoshootMakeUp_Skin_lauren-30.jpg')} 
                        heading="Face"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/skin/PurpleRose_PhotoshootMakeUp_Skin_lauren-21.jpg')} 
                        heading="Group Face"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/skin/PurpleRose_PhotoshootMakeUp_Skin_lauren-26.jpg')} 
                        heading="Group"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/skin/PurpleRose_PhotoshootMakeUp_Skin_lauren-28.jpg')} 
                        heading="Group Face"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/skin/PurpleRose_PhotoshootMakeUp_Skin_lauren-12.jpg')} 
                        heading="Group"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/skin/PurpleRose_PhotoshootMakeUp_Skin_lauren-10.jpg')} 
                        heading="Group"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/skin/PurpleRose_PhotoshootMakeUp_Skin_lauren-6.jpg')} 
                        heading="Group"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/skin/PurpleRose_PhotoshootMakeUp_Skin_lauren-32.jpg')} 
                        heading="Group Face"
                        desc=""
                        category="cat-5"/>
                    </Gallery>
                </div>
            </div>
}

export default Facepaint