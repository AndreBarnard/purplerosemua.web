import * as React from 'react';
import Banner from '../Components/Banner';
import Breadcrumb from '../Components/Breadcrumb';
import Pagination from '../Components/Pagination';
import Gallery from '../Components/Gallery';
import PorfolioImage from '../Components/PorfolioImage';

export interface IAppProps {
}

function Skin() {

    const heading = "Skin";

    return <div className="page-content">
            <Banner img={require('../../Images/portfolio/photoshoots/blacklips/PurplerRose_PhotoShoot_MakeUp_UrbanDecey_BlackLipstick.jpg')} heading={heading} />
            <Breadcrumb heading={heading}/>
                <div className="section-full p-t80 p-b50">
                    <Pagination 
                    cat1Heading="Urban Decay Lipstick"
                    cat2Heading="Closeups"
                    cat3Heading="Lether Jacket"
                    cat4Heading="Full Frame"
                    cat5Heading="Family"/>
                    <Gallery>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/blacklips/PurpleRose_PhotoshootMakeUp_UrbanDecay8.jpg')} 
                        heading="Urban Decay Vice Lipstick"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/blacklips/PurpleRose_PhotoshootMakeUp_UrbanDecay1.jpg')} 
                        heading="Closeup"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/blacklips/PurpleRose_PhotoshootMakeUp_UrbanDecay2.jpg')} 
                        heading="Closeup"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/blacklips/PurpleRose_PhotoshootMakeUp_UrbanDecay3.jpg')} 
                        heading="Closeup"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/blacklips/PurpleRose_PhotoshootMakeUp_UrbanDecay5.jpg')} 
                        heading="Lether Jacket"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/blacklips/PurpleRose_PhotoshootMakeUp_UrbanDecay6.jpg')} 
                        heading="Lether Jacke"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/blacklips/PurpleRose_PhotoshootMakeUp_UrbanDecay7.jpg')} 
                        heading="Full Frame"
                        desc=""
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/blacklips/PurpleRose_PhotoshootMakeUp_UrbanDecay9.jpg')} 
                        heading="Closeup"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/blacklips/PurpleRose_PhotoshootMakeUp_UrbanDecay4.jpg')} 
                        heading="Family"
                        desc=""
                        category="cat-5"/>
                    </Gallery>
                </div>
            </div>
}

export default Skin