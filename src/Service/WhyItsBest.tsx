import * as React from 'react';
import SectionHead from '../Components/Site/SectionHead';
import WhyItsBestItem from './WhyItsBestItem';

export interface IProps {
}

function Component(props : IProps) {
    return <div className="col-md-6 col-sm-6">
                <SectionHead heading="Why It's Best?" />
                <WhyItsBestItem heading="BEST QUALITY" desc="some text" fontAwesome="fa fa-trophy" />
                <WhyItsBestItem heading="INTEGRITY" desc="some text" fontAwesome="fa fa-pencil" />
                <WhyItsBestItem heading="STRATEGY" desc="some text" fontAwesome="fa fa-flag-checkered" />
            </div>
}

export default Component