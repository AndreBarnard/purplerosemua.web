import * as React from 'react';

export interface IProps {
    img : string
    imgAlt? : string
}

function SliderImage(props : IProps) {
    const imgAlt = props.imgAlt || "";

    return <div className="item">
            <div className="aon-thum-bx">
                <img src={props.img} alt={imgAlt} />
            </div>
        </div>
}

export default SliderImage