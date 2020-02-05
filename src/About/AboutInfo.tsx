import * as React from 'react';

export interface IProps {
    p1 : string
    p2 : string
}

function AboutInfo(props : IProps) {
    return <div className="col-md-7 col-sm-7 col-xs-6 col-xs-100pc">
                <div className="section-head text-left">
                    <h3 className="text-uppercase">About Company </h3>
                    <div className="wt-separator-outer">
                        <div className="wt-separator style-icon">
                            <i className="fa fa-leaf text-black"></i>
                            <span className="separator-left bg-primary"></span>
                            <span className="separator-right bg-primary"></span>
                        </div>                            
                    </div>
                    <p>{props.p1}</p>
                    <p>{props.p2}</p>
                </div>
            </div>
}

export default AboutInfo