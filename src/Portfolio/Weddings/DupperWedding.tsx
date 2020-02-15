import * as React from 'react';
import Banner from '../Components/Banner';
import Breadcrumb from '../Components/Breadcrumb';
import Pagination from '../Components/Pagination';
import Gallery from '../Components/Gallery';
import PorfolioImage from '../Components/PorfolioImage';

export interface IAppProps {
}

function DupperWedding() {

    const heading = "Dupper Wedding";

    return <div className="page-content">
            <Banner img={require('../../Images/portfolio/weddings/dupper/PurpleRoseMUA_DupperWedding_MakeUp.jpg')} heading={heading} />
            <Breadcrumb heading={heading}/>
                <div className="section-full p-t80 p-b50">
                    <Pagination 
                    cat1Heading="Bride"
                    cat2Heading="Bride & Groom"
                    cat3Heading="Bride with bridesmaids"
                    cat4Heading="Makeup"
                    cat5Heading="Bridesmaid"/>
                    <Gallery>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/dupper/PurpleRoseMUA_DupperWedding_Bride&Groom2.jpg')} 
                        heading="Bride & Groom"
                        desc="For you see, each day I love you more. Today more than yesterday and less than tomorrow. - Rosemonde Gerard"
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/dupper/PurpleRoseMUA_DupperWedding_Bride&GroomNight.jpg')} 
                        heading="Bride & Groom"
                        desc="Can you feel the love tonight - Elton John"
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/dupper/PurpleRoseMUA_DupperWedding_Bride&Groom.jpg')} 
                        heading="Bride & Groom"
                        desc="Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope. - Maya Angelou"
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/dupper/PurpleRoseMUA_DupperWedding_Bride.jpg')} 
                        heading="Bride"
                        desc="True love is never blind, but rather brings an added light. - Phoebe Cary"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/dupper/PurpleRoseMUA_DupperWedding_BrideClose.jpg')} 
                        heading="Bride"
                        desc="Whatever our souls are made of, his and mine are the same. - Emily Bronte"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/dupper/PurpleRoseMUA_DupperWedding_Bride&GroomSmoke.jpg')} 
                        heading="Bride & Groom"
                        desc="A successful marriage requires falling in love many times, always with the same person - Mignon McLaughlin"
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/dupper/PurpleRoseMUA_DupperWedding_Bride&Bridesmaids.jpg')} 
                        heading="Bride with bridesmaids"
                        desc="Where there is love there is life - Mahatma Gandhi"
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/dupper/PurpleRoseMUA_DupperWedding_ApplingMakeup.jpg')} 
                        heading="Makeup Guest"
                        desc="To be fully seen by somebody, then, and be loved anyhow–this is a human offering that can border on miraculous - Elizabeth Gilbert, Committed: A Skeptic Makes Peace with Marriage"
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/weddings/dupper/PurpleRoseMUA_DupperWedding_BridesMaid.jpg')} 
                        heading="Bridesmaid"
                        desc="You know you’re in love when you can’t fall asleep because reality is finally better than your dreams. - Dr. Seuss"
                        category="cat-5"/>
                    </Gallery>
                </div>
            </div>
}

export default DupperWedding