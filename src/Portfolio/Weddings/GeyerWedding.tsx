import * as React from 'react';
import Banner from '../Components/Banner';
import Breadcrumb from '../Components/Breadcrumb';
import Pagination from '../Components/Pagination';
import Gallery from '../Components/Gallery';
import PorfolioImage from '../Components/PorfolioImage';

export interface IAppProps {
}

function DupperWedding() {

    const heading = "Geyer Wedding";

    return <div className="page-content">
            <Banner img={require('../../Images/portfolio/weddings/geyser/GeyserBanner.jpg')} heading={heading} />
            <Breadcrumb heading={heading}/>
                <div className="section-full p-t80 p-b50">
                    <Pagination 
                    cat1Heading="Bride"
                    cat2Heading="Bride & Groom"
                    cat3Heading="The Kiss"
                    cat4Heading="Wedding Chapel"
                    cat5Heading="I Do"/>
                    <Gallery>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/geyser/GeyserWedding_Bride.jpg')} 
                        heading="Bride"
                        desc="The bride's here. Where do I check in?"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/geyser/GeyserWedding_BrideAndGroom.jpg')} 
                        heading="Bride & Groom"
                        desc="some desciption abouut the image"
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/geyser/GeyserWedding_Bride2.jpg')} 
                        heading="Bride"
                        desc="The bride's here. Where do I check in?"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/geyser/GeyserWedding_BrideAndGroom2.jpg')} 
                        heading="Bride & Groom"
                        desc="some desciption abouut the image"
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/geyser/GeyserWedding_BrideAndGroom_Kiss.jpg')} 
                        heading="The Kiss"
                        desc="some desciption abouut the image"
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/geyser/GeyserWedding_BrideAndGroom3.jpg')} 
                        heading="Bride & Groom"
                        desc="some desciption abouut the image"
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/geyser/GeyserWedding_IDoes.jpg')} 
                        heading="I Do"
                        desc="I'm a few steps away from my forever."
                        category="cat-5"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/geyser/GeyserWedding_Chapel.jpg')} 
                        heading="Wedding Chapel"
                        desc="Once in a while, right in the middle of an ordinary life, love gives us a fairy tale."
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/geyser/GeyserWedding_IDoes2.jpg')} 
                        heading="I Do"
                        desc="some desciption abouut the image"
                        category="cat-5"/>
                    </Gallery>
                </div>
            </div>
}

export default DupperWedding