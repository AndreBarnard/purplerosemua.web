import * as React from 'react';

export interface IProps {
    flaticon : string
    title : string
    blockClassName? : string
    target : string
}

function SeviceBlock(props : IProps) {

    const blockClass = props.blockClassName || "item";

    return <div className={blockClass}>
        <div data-toggle="tab" data-target={props.target} className="tab-block">
            <div className="our-pricing-tab  radius-sm bdr-1 bdr-gray">
                <div className="wt-icon-box-wraper center  p-lr10">
                    <div className="icon-lg m-b5">
                        <span className="icon-cell  text-black"><i className={props.flaticon}></i></span>
                    </div>
                    <div className="icon-content">
                        <span className="wt-tilte text-uppercase p-b10 inline-block font-weight-600">{props.title}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SeviceBlock