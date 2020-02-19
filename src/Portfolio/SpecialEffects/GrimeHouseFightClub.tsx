import * as React from 'react';
import Banner from '../Components/Banner';
import Breadcrumb from '../Components/Breadcrumb';
import Pagination from '../Components/Pagination';
import Gallery from '../Components/Gallery';
import PorfolioImage from '../Components/PorfolioImage';

export interface IAppProps {
}

function GrimeHouseFightClub() {

    const heading = "Grimehouse Fight Club - Music Video";

    return <div className="page-content">
            <Banner img={require('../../Images/portfolio/specialeffects/fightclub_grimehouse/FightClub_Grimhouse_Banner.jpg')} heading={heading} />
            <Breadcrumb heading={heading}/>
                <div className="section-full p-t80 p-b50">
                    <Pagination 
                    cat1Heading="Fighter 1"
                    cat2Heading="Fighter 2"
                    cat3Heading="Prepairing Fighters"
                    cat4Heading="Fight Scene"
                    cat5Heading=""/>
                    <Gallery>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/fightclub_grimehouse/PurpleRoseMUA_FightClub_GrimeHouse_Fighter1.jpg')} 
                        heading="Fighter 1"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/fightclub_grimehouse/PurpleRoseMUA_FightClub_GrimeHouse_Fighter2.jpg')} 
                        heading="Prepairing Fighters"
                        desc=""
                        category="cat-3"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/fightclub_grimehouse/PurpleRoseMUA_FightClub_GrimeHouse_Fighter.jpg')} 
                        heading="Fighter 1"
                        desc=""
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/fightclub_grimehouse/PurpleRoseMUA_FightClub_GrimeHouse_Fighter5.jpg')} 
                        heading="Fighter 2"
                        desc=""
                        category="cat-2"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/fightclub_grimehouse/PurpleRoseMUA_FightClub_GrimeHouse_Scene.jpg')} 
                        heading="Fight Scene"
                        desc=""
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/fightclub_grimehouse/PurpleRoseMUA_FightClub_GrimeHouse_Scene4.jpg')} 
                        heading="Fight Scene"
                        desc=""
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/fightclub_grimehouse/PurpleRoseMUA_FightClub_GrimeHouse_Scene5.jpg')} 
                        heading="Fight Scene"
                        desc=""
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/fightclub_grimehouse/PurpleRoseMUA_FightClub_GrimeHouse_Scene7.jpg')} 
                        heading="Fight SceneGroup"
                        desc=""
                        category="cat-4"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/specialeffects/fightclub_grimehouse/PurpleRoseMUA_FightClub_GrimeHouse_Scene9.jpg')} 
                        heading="Group FaceFight Scene"
                        desc=""
                        category="cat-4"/>
                    </Gallery>
                </div>
            </div>
}

export default GrimeHouseFightClub