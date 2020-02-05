import * as React from 'react';

export interface IProps {
    img : string
}

function GalleryImage(props : IProps) {
    return <li>
            <div className="wt-post-thum">
                <a href={props.img} className="mfp-link" ><img src={props.img}alt=""/></a>
            </div>
        </li>
}

export default GalleryImage