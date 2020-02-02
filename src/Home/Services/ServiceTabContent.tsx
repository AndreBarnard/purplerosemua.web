import * as React from 'react';

export interface IProps {
    id : string
    img : string
    imgAlt? : string
    heading : string
    price : string
    desc : string
    active : boolean
}

function ServiceTabContent(props : IProps) {

    const imgAlt = props.imgAlt || "";
    let tabClass = "tab-pane"
    if(props.active) {
        tabClass = "tab-pane active";
    }

    return <div id={props.id} className={tabClass}>
                <div className="pricing-tab-inner">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="wt-media">
                                <img src={props.img} alt={imgAlt} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="wt-tilte">
                                <h3 className="font-26 p-b20 font-weight-400">{props.heading}</h3>
                                <h4 className="text-primary">{props.price}</h4>
                                <p>{props.desc}</p>
                                {/* <a href="" className="site-button skew-icon-btn radius-sm">
                                <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default ServiceTabContent