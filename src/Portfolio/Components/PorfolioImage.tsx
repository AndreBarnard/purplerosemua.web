import * as React from 'react';

export interface IAppProps {
}

function PorfolioImage(props : 
    {img : string,
    heading: string,
    desc: string,
    category : string}) {
   
    const categoryClass = "masonry-item col-lg-4 col-md-6 col-sm-6 " + props.category;

    return <div className={categoryClass}>
    <div className="wt-box">
        <div className="wt-thum-bx wt-img-overlay2 wt-img-effect zoom">
            <img src={props.img} alt="" />
            <div className="wt-info-has p-a20">
              <div className="wt-info p-tb10">
                <h4 className="m-a0">{props.heading}</h4>
              </div>
              <div className="wt-info-has-text">{props.desc}</div>
            </div>
         </div>
    </div>
</div>
}


export default PorfolioImage