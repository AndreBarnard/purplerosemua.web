import * as React from 'react';
import Banner from '../Components/Banner';
import Breadcrumb from '../Components/Breadcrumb';
import Pagination from '../Components/Pagination';
import Gallery from '../Components/Gallery';
import PorfolioImage from '../Components/PorfolioImage';

export interface IAppProps {
}

function SpecialEffects() {

    const heading = "Special Effects";

    return <div className="page-content">
            <Banner img={require('../../Images/portfolio/specialeffects/specialeffects/Effects-Banner.jpg')} heading={heading} />
            <Breadcrumb heading={heading}/>
                <div className="section-full p-t80 p-b50">
                    <Pagination 
                    cat1Heading="Wounds"
                    cat2Heading="Scarring"
                    cat3Heading="Movie Characters"
                    cat4Heading=""
                    cat5Heading=""/>
                    <Gallery>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/specialeffects/PurpleRoseMUA_SpecialEffects_BulletWounds.jpg')} 
                        heading="Bullet Wounds"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/specialeffects/PurpleRoseMUA_SpecialEffects_Scarring.jpg')} 
                        heading="Facial Scarring"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/specialeffects/PurpleRoseMUA_SpecialEffects_Teeth.jpg')} 
                        heading="Teeth Staining"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/specialeffects/PurpleRoseMUA_SpecialEffects_Wound.jpg')} 
                        heading="Hand Wound"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/specialeffects/PurpleRoseMUA_SpecialEffects_Scarring2.jpg')} 
                        heading="Facial Scarring"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/specialeffects/PurpleRoseMUA_SpecialEffects_Maleficent.jpg')} 
                        heading="Maleficent"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/specialeffects/PurpleRoseMUA_SpecialEffects_DarthMaul.jpg')} 
                        heading="Group"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/specialeffects/PurpleRoseMUA_SpecialEffects_HeadWound.jpg')} 
                        heading="Head Wounds"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/specialeffects/PurpleRoseMUA_SpecialEffects_Wounds2.jpg')} 
                        heading="Wounds"
                        desc=""
                        category="cat-1"/>
                    </Gallery>
                </div>
            </div>
}

export default SpecialEffects