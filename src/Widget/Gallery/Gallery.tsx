import * as React from 'react';
import GalleryImage from './GalleryImage';

export interface IProps {
}

function Gallery(props : IProps) {
    return     <div className="widget widget_gallery mfp-gallery">
    <h5 className="widget-title">Our Gallery</h5>
    <ul>
        <GalleryImage img={require("../../Images/gallery/widget/PurpleRoseMua_Photoshoots.jpg")}/>
        <GalleryImage img={require("../../Images/gallery/widget/PurpleRoseMUA_Weddings.jpg")}/>
        <GalleryImage img={require("../../Images/gallery/widget/PurpleRoseMua_MakeupApplication.jpg")}/>
        <GalleryImage img={require("../../Images/gallery/widget/PurpleRoseMua_SpecialEffects.jpg")}/>
        <GalleryImage img={require("../../Images/gallery/widget/PurpleRoseMua_Makup.jpg")}/>
        <GalleryImage img={require("../../Images/gallery/widget/PurpleRoseMua_FacePaint.jpg")}/>        
        <GalleryImage img={require("../../Images/gallery/widget/PurpleRoseMua_MusicVideo.jpg")}/>        
        <GalleryImage img={require("../../Images/gallery/widget/PurpleRoseMua_MasketBall.jpg")}/>
    </ul>
</div>
}

export default Gallery