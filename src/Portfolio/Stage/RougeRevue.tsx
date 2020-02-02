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
            <Banner img={require('../../Images/banner/Portfolio.jpg')} heading={heading} />
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
                        img={require('../../Images/portfolio/pic1.jpg')} 
                        heading="heading 1"
                        desc="some desciption abouut the image"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/pic1.jpg')} 
                        heading="heading 2"
                        desc="some desciption abouut the image"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/pic1.jpg')} 
                        heading="heading 3"
                        desc="some desciption abouut the image"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/pic1.jpg')} 
                        heading="heading 4"
                        desc="some desciption abouut the image"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/pic1.jpg')} 
                        heading="heading 5"
                        desc="some desciption abouut the image"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/pic1.jpg')} 
                        heading="heading 6"
                        desc="some desciption abouut the image"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/pic1.jpg')} 
                        heading="heading 7"
                        desc="some desciption abouut the image"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/pic1.jpg')} 
                        heading="heading 8"
                        desc="some desciption abouut the image"
                        category="cat-1"/>
                        <PorfolioImage 
                        img={require('../../Images/portfolio/pic1.jpg')} 
                        heading="heading 9"
                        desc="some desciption abouut the image"
                        category="cat-1"/>
                    </Gallery>
                </div>
            </div>
}

export default RougeRevue