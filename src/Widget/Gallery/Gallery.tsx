import * as React from 'react';
import GalleryImage from './GalleryImage';

export interface IProps {
}

function Gallery(props : IProps) {
    return     <div className="widget widget_gallery mfp-gallery">
    <h5 className="widget-title">Our Gallery</h5>
    <ul>
        <GalleryImage img={require("../../Images/gallery/pic1.jpg")}/>
        <GalleryImage img={require("../../Images/gallery/pic1.jpg")}/>
        <GalleryImage img={require("../../Images/gallery/pic1.jpg")}/>
        <GalleryImage img={require("../../Images/gallery/pic1.jpg")}/>
        <GalleryImage img={require("../../Images/gallery/pic1.jpg")}/>
        <GalleryImage img={require("../../Images/gallery/pic1.jpg")}/>        
        <GalleryImage img={require("../../Images/gallery/pic1.jpg")}/>        
        <GalleryImage img={require("../../Images/gallery/pic1.jpg")}/>
    </ul>
</div>
}

export default Gallery