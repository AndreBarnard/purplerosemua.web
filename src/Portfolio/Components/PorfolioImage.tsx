import * as React from 'react';

export interface IAppProps {
}

function PorfolioImage(props : 
    {img : string,
    heading: string,
    desc: string}) {
    return <div className="masonry-item cat-1 col-lg-4 col-md-6 col-sm-6">
    <div className="wt-box">
        <div className="wt-thum-bx wt-img-overlay2 wt-img-effect zoom">
            <img src={props.img} alt="" />
            <div className="wt-info-has p-a20">
              <div className="wt-info p-tb10">
                <h4 className="m-a0">{props.heading}</h4>
              </div>
    <div className="wt-info-has-text">{props.desc}</div>
              <a href="javascript:void(0);" className="site-button ">More  <i className="fa fa-angle-double-right"></i></a>
            </div>
         </div>
    </div>
</div>
}


export default PorfolioImage