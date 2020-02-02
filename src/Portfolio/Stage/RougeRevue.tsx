import * as React from 'react';
import Banner from '../Components/Banner';
import Breadcrumb from '../Components/Breadcrumb';
import Pagination from '../Components/Pagination';
import Gallery from '../Components/Gallery';
import PorfolioImage from '../Components/PorfolioImage';

export interface IAppProps {
}

function RougeRevue() {

    const heading = "The Rouge Revue";

    return <div className="page-content">
            <Banner img={require('../../Images/portfolio/stage/rougerevue/RougeRevueBanner.jpg')} heading={heading} />
            <Breadcrumb heading={heading}/>
                <div className="section-full p-t80 p-b50">
                    <Pagination 
                    cat1Heading="The Grand Exhibition"
                    cat2Heading="The Rougettes"
                    cat3Heading="Burlesque Artist"
                    cat4Heading="Group performance"
                    cat5Heading="Lady Magnolia"/>
                    <Gallery>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/stage/rougerevue/StageRougeRevue_MeTo.jpg')} 
                        heading="The Grand Exhibition"
                        desc="An annual burlesque showcase in aid of Charity. The Rouge Revue hosted the first TGE in Cape Town in 2015 and has raised R136 000 for our chosen charity, Rape Crisis Cape Town Trust, over the last 5 years. Images by Michael Brooks."
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/stage/rougerevue/StageRougeRevue_TheRougettes.jpg')} 
                        heading="The Rougettes"
                        desc="Images by Michael Brooks. The Grand Exhibition is an annual burlesque showcase in aid of Charity. The Rouge Revue hosted the first TGE in Cape Town in 2015 and has raised R136 000 for our chosen charity, Rape Crisis Cape Town Trust, over the last 5 years. The Grand Exhibition showcases some of Cape Towns top burlesque talent, from seasoned professional solo performers to dazzling troupe numbers from Cape Towns longest standing burlesque companies. Saturday 26 October 2019 Centre For The Book"
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/stage/rougerevue/StageRougeRevueAnouncements.jpg')} 
                        heading="Hosts Diva Disastar and Lady Magnolia"
                        desc="Images by Michael Brooks. The Grand Exhibition is an annual burlesque showcase in aid of Charity. The Rouge Revue hosted the first TGE in Cape Town in 2015 and has raised R136 000 for our chosen charity, Rape Crisis Cape Town Trust, over the last 5 years. The Grand Exhibition showcases some of Cape Towns top burlesque talent, from seasoned professional solo performers to dazzling troupe numbers from Cape Towns longest standing burlesque companies. Saturday 26 October 2019 Centre For The Book"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/stage/rougerevue/StageRougeRevueSweetCheeksBurlesqueArtist.jpg')} 
                        heading="Sweet Cheeks"
                        desc="Images by Michael Brooks. The Grand Exhibition is an annual burlesque showcase in aid of Charity. The Rouge Revue hosted the first TGE in Cape Town in 2015 and has raised R136 000 for our chosen charity, Rape Crisis Cape Town Trust, over the last 5 years. The Grand Exhibition showcases some of Cape Towns top burlesque talent, from seasoned professional solo performers to dazzling troupe numbers from Cape Towns longest standing burlesque companies. Saturday 26 October 2019 Centre For The Book"
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/stage/rougerevue/StageRougeRevueLadyMagnoliaBurlesqueArtist2.jpg')} 
                        heading="Lady Magnolia"
                        desc="Images by Michael Brooks. The Grand Exhibition is an annual burlesque showcase in aid of Charity. The Rouge Revue hosted the first TGE in Cape Town in 2015 and has raised R136 000 for our chosen charity, Rape Crisis Cape Town Trust, over the last 5 years. The Grand Exhibition showcases some of Cape Towns top burlesque talent, from seasoned professional solo performers to dazzling troupe numbers from Cape Towns longest standing burlesque companies. Saturday 26 October 2019 Centre For The Book"
                        category="cat-5"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/stage/rougerevue/StageRougeRevueJezzyBelleBurlesqueArtist.jpg')} 
                        heading="Jezzy Belle"
                        desc="Images by Michael Brooks. The Grand Exhibition is an annual burlesque showcase in aid of Charity. The Rouge Revue hosted the first TGE in Cape Town in 2015 and has raised R136 000 for our chosen charity, Rape Crisis Cape Town Trust, over the last 5 years."
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/stage/rougerevue/StageRougeRevueLadyDangerBurlesqueArtist.jpg')} 
                        heading="Lady Danger"
                        desc="This beautiful woman is @lady_danger_burlesque and she is a ball of energy and i also did her makeup for the @therougerevue Makeup done by me @purplerosemuacpt #burlesque #burlesquedancer #burlesquemakeupartist #femfatale #tistheteason #makeupartist #lovemyart #instamakeup #capetownartist #southafrica"
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/stage/rougerevue/StageRougeRevue_Dances.jpg')} 
                        heading="Burlesque dancer"
                        desc="These woman are nothing but empowering. I thrive of there energy and they are amazing. Burlesque dancer Makeup @lady_danger_burlesque @ziggy_dance_za Done by me @purplerosemuacpt #burlesque #burlesquedancer #burlesquemakeupartist #femfatale #tistheteason #makeupartist #lovemyart #instamakeup #capetownartist #southafrica"
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/stage/rougerevue/StageRougeRevueLadyMagnoliaBurlesqueArtist.jpg')} 
                        heading="Lady Magnolia"
                        desc="It Was Me - Images by Michael Brooks."
                        category="cat-5"/>
                    </Gallery>
                </div>
            </div>
}

export default RougeRevue