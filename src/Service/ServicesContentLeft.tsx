import * as React from 'react';
import WhatWeDo from './WhatWeDo';
import GalleryWidget from '../Widget/Gallery/Gallery';
import SocialMedia from '../Widget/SocialMedia/SocialMedia';
import Accordion from '../Widget/Accordion/Accordion';

export interface IProps {
}

function ServicesContentLeft(props : IProps) {
    return <div className="col-md-3 col-sm-3 p-tb15">
                <WhatWeDo />
                <GalleryWidget />
                <SocialMedia 
                facebookURL="https://www.facebook.com/jeanerieng/"
                instagramURL="https://www.instagram.com/jeanerienb22/"
                youtubeURL="https://www.youtube.com/user/jeanerieng"/>
                <Accordion />
            </div>
}

export default ServicesContentLeft