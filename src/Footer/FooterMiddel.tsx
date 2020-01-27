import * as React from 'react';
import AboutCompany from './AboutCompany';
import ResentPost from './ResentPost';
import UsefulLinks from './UsefulLinks';
import Newsletter from './Newsletter';
import SocialLinks from './SocialLinks';

export interface IAppProps {
}

function FooterMiddel() {

    return 	<div className="row">
    <AboutCompany />
    <ResentPost />
    <UsefulLinks />
    <div className="col-md-3 col-sm-6">
        <Newsletter />
        <SocialLinks />
    </div>
</div>
}


export default FooterMiddel