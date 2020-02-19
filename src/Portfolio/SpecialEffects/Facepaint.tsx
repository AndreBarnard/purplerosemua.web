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
            <Banner img={require('../../Images/portfolio/specialeffects/facepaint/Facepaint-Banner.jpg')} heading={heading} />
            <Breadcrumb heading={heading}/>
                <div className="section-full p-t80 p-b50">
                    <Pagination 
                    cat1Heading="Skull"
                    cat2Heading="Animal"
                    cat3Heading="Movie Characters"
                    cat4Heading="Hero's & Villains"
                    cat5Heading=""/>
                    <Gallery>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/facepaint/PurpleRose_Facepaint_Skull.jpg')} 
                        heading="Male Skull"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/facepaint/PurpleRose_Facepaint_Tiger.jpg')} 
                        heading="Tiger"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/facepaint/PurpleRose_Facepaint_Cat.jpg')} 
                        heading="Cat"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/facepaint/PurpleRose_Facepaint_Saw.jpg')} 
                        heading="Saw - Billy the Puppet"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/facepaint/PurpleRose_Facepaint_Butterfly.jpg')} 
                        heading="Butterfly"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/facepaint/PurpleRose_Facepaint_Female_Skull.jpg')} 
                        heading="Female skull"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/facepaint/PurpleRose_Facepaint_Spiderman.jpg')} 
                        heading="Spiderman"
                        desc=""
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/facepaint/PurpleRose_Facepaint_Joker.jpg')} 
                        heading="Joker"
                        desc=""
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/facepaint/PurpleRose_Facepaint_Female_Skull2.jpg')} 
                        heading="Female Skull"
                        desc=""
                        category="cat-1"/>
                    </Gallery>
                </div>
            </div>
}

export default Facepaint