import * as React from 'react';
import ITabService from './ITabService';

export interface IProps {
    services : ITabService[];
}

function SeviceBlock(props : IProps) {

    return <ul className="nav nav-tabs">
                {props.services.map((service, i) => (
                      <li><a data-toggle="tab" href={service.tabId}>{service.title}</a></li>
                    ))} 
                <li className="active"><a data-toggle="tab" href="#pricing-tab1-1">Massage Therapy</a></li>
                <li><a data-toggle="tab" href="#pricing-tab1-2">Facials </a></li>
                <li><a data-toggle="tab" href="#pricing-tab1-3">Pedicures</a></li>
                <li><a data-toggle="tab" href="#pricing-tab1-4">Manicures</a></li>
                <li><a data-toggle="tab" href="#pricing-tab1-5">Body Wraps</a></li>
                <li><a data-toggle="tab" href="#pricing-tab1-6">Waxing & Cosmetics</a></li>
            </ul>
}

export default SeviceBlock