import * as React from 'react';

export interface IAppProps {
}

function SocialLinks() {

    return <div className="widget widget_social_inks">
    <h4 className="widget-title">Social Links</h4>
    <ul className="social-icons social-square social-darkest">
        <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
        <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
        <li><a href="javascript:void(0);" className="fa fa-linkedin"></a></li>
        <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
        <li><a href="javascript:void(0);" className="fa fa-youtube"></a></li>
        <li><a href="javascript:void(0);" className="fa fa-instagram"></a></li>
    </ul>
</div>
}


export default SocialLinks