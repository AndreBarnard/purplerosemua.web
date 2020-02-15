import * as React from 'react';
import Banner from '../Components/Banner';
import Breadcrumb from '../Components/Breadcrumb';
import Pagination from '../Components/Pagination';
import Gallery from '../Components/Gallery';
import PorfolioImage from '../Components/PorfolioImage';

export interface IAppProps {
}

function Winter() {

    const heading = "Winter Shoot";

    return <div className="page-content">
            <Banner img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter_Banner.jpg')} heading={heading} />
            <Breadcrumb heading={heading}/>
                <div className="section-full p-t80 p-b50">
                    <Pagination 
                    cat1Heading="Makeup"
                    cat2Heading="Winter Lady"
                    cat3Heading="Winter Man"
                    cat4Heading="Winter Couple"
                    cat5Heading=""/>
                    <Gallery>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter1.jpg')} 
                        heading="Makeup"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter2.jpg')} 
                        heading="Makeup"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter3.jpg')} 
                        heading="Winter Lady"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter4.jpg')} 
                        heading="Winter Lady"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter5.jpg')} 
                        heading="Winter Lady"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter6.jpg')} 
                        heading="Winter Lady"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter7.jpg')} 
                        heading="Winter Man"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter8.jpg')} 
                        heading="Winter Man"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter9.jpg')} 
                        heading="Winter Man"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter10.jpg')} 
                        heading="Winter Couple"
                        desc=""
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter11.jpg')} 
                        heading="Winter Couple"
                        desc=""
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/photoshoots/winter/PurpleRose_PhotoshootMakeup_Winter12.jpg')} 
                        heading="Winter Couple"
                        desc=""
                        category="cat-4"/>
                    </Gallery>
                </div>
            </div>
}

export default Winter