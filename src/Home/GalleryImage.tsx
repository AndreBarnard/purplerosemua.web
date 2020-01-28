import * as React from 'react';

export interface IAppProps {
}

function GalleryImage(props: 
    {img : string
    divClass : string
    }) {

    return <div className={props.divClass}>
    <div className="wt-gallery-bx">
        <div className="wt-thum-bx wt-img-effect wt-img-overlay7">                            
            <a href="javascript:void(0);">
                <img src={props.img}  alt="" />
            </a>                                
            <div className="overlay-bx">
                <div className="overlay-icon">
                    <a href="javascript:void(0);">
                        <i className="fa fa-link wt-icon-box-xs"></i>
                    </a>
                    <a href={props.img} className="mfp-link">
                        <i className="fa fa-picture-o wt-icon-box-xs"></i>
                    </a>
                </div>
            </div>
        
        </div>
    </div>
</div>
}


export default GalleryImage