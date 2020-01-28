import * as React from 'react';
import Title from './Title';
import GalleryImage from './GalleryImage';

export interface IAppProps {
}

function Gallery() {

    return <div className="section-full p-t80 p-b80 bg-white" id="content1">
    <div className="container">
    <Title 
        titleSpan="Our" 
        titleH2="Gallery" 
        paragraph="Some text about Purple rose gallary" />
                                 
         {/* <!-- PAGINATION START --> */}
        <div className="filter-wrap p-a15 our-gallery  m-tb30">
            <ul className="masonry-filter link-style  text-uppercase center-block m-t0 pr-display-center">
                <li className="active"><a data-filter="*" href="#">All</a></li>
                <li><a data-filter=".cat-filter-1" href="#">Makeup</a></li>
                <li><a data-filter=".cat-filter-2" href="#">Facepaint</a></li>
                <li><a data-filter=".cat-filter-3" href="#">Wedding</a></li>
                <li><a data-filter=".cat-filter-4" href="#">Photoshoot</a></li>
                <li><a data-filter=".cat-filter-5" href="#">Special Effects</a></li>
            </ul>
        </div>
        {/* <!-- PAGINATION END --> */}
       
        <div className="portfolio-wrap mfp-gallery  no-col-gap">
                <div className="row">
                    <GalleryImage 
                    img={require('../Images/gallery/Makeup_CapeTown_1.jpg')} 
                    divClass="masonry-item cat-filter-1 col-lg-4 col-md-4 col-sm-6 col-xs-6" />

                    <GalleryImage 
                    img={require('../Images/gallery/Facepaint_CapeTown.jpg')} 
                    divClass="masonry-item cat-filter-2 col-lg-4 col-md-4 col-sm-6 col-xs-6" />

                    <GalleryImage 
                    img={require('../Images/gallery/Wedding_Makeup_CapeTown.jpg')} 
                    divClass="masonry-item cat-filter-3 col-lg-4 col-md-4 col-sm-6 col-xs-6" />

                    <GalleryImage 
                    img={require('../Images/gallery/PhotoShoot_CapeTown.jpg')} 
                    divClass="masonry-item cat-filter-4 col-lg-4 col-md-4 col-sm-6 col-xs-6" />

                    <GalleryImage 
                    img={require('../Images/gallery/Special_Effect_CapeTown.jpg')} 
                    divClass="masonry-item cat-filter-5 col-lg-4 col-md-4 col-sm-6 col-xs-6" />

                    <GalleryImage 
                    img={require('../Images/gallery/Makeup_CapeTown_2.jpg')} 
                    divClass="masonry-item cat-filter-1 col-lg-8 col-md-8 col-sm-8 col-xs-6" />                                    
                </div>
            </div>        
    </div>
</div>
}


export default Gallery