import * as React from 'react';
import Banner from '../Components/Banner';
import Breadcrumb from '../Components/Breadcrumb';
import Pagination from '../Components/Pagination';
import Gallery from '../Components/Gallery';
import PorfolioImage from '../Components/PorfolioImage';

export interface IAppProps {
}

function NeethlingWedding() {

    const heading = "Neethling Wedding";

    return <div className="page-content">
            <Banner img={require('../../Images/portfolio/weddings/neethling/NeethlingBanner.jpg')} heading={heading} />
            <Breadcrumb heading={heading}/>
                <div className="section-full p-t80 p-b50">
                <Pagination 
                    cat1Heading="Bride"
                    cat2Heading="Bridal Party"
                    cat3Heading="Bride & Groom"
                    cat4Heading="Makeup"
                    cat5Heading="I Do"/>
                <Gallery>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/neethling/NeetlingWedding_Bride.jpg')} 
                        heading="Bride"
                        desc="Hesty Neethling"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/neethling/NeetlingWedding_BridalParty.jpg')} 
                        heading="Bridal Party"
                        desc="Memories are best shared with friends."
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/neethling/NeetlingWedding_Parents.jpg')} 
                        heading="Parents"
                        desc="To the world you may be one person; but to one person you may be the world."
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/neethling/NeetlingWedding_BrideAndGroom.jpg')} 
                        heading="Bride & Groom"
                        desc="To be fully seen by somebody, then, and be loved anyhow–this is a human offering that can border on miraculous."
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/neethling/NeetlingWedding_BrideAndGroom2.jpg')} 
                        heading="Bride & Groom"
                        desc="Where there is love there is life."
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/neethling/NeetlingWedding_BrideAndGroom3.jpg')} 
                        heading="Bride & Groom"
                        desc="You know you’re in love when you can’t fall asleep because reality is finally better than your dreams"
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/neethling/NeetlingWedding_PurpleRoseMUA_Makeup.jpg')} 
                        heading="Getting ready"
                        desc="On the road to Mrs."
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/neethling/NeetlingWedding_PurpleRoseMUA_Makeup_Bridesmaid.jpg')} 
                        heading="Bridemaid"
                        desc="It takes a village, and that's why I've got a bride tribe."
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/neethling/NeetlingWedding_IDoes.jpg')} 
                        heading="I Do"
                        desc="Here's to love and laughter and happily ever after."
                        category="cat-5"/>
                    </Gallery>
                </div>
            </div>
}

export default NeethlingWedding