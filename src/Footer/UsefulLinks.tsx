import * as React from 'react';

export interface IAppProps {
}

function UsefulLinks() {

    return <div className="col-md-3 col-sm-6">
    <div className="widget widget_services">
        <h4 className="widget-title">Useful links</h4>
        <ul>
            <li><a href="about-1.html">About</a></li>
            <li><a href="faq-1.html">FAQ</a></li>
            <li><a href="career.html">Career</a></li>
            <li><a href="our-team.html">Our Team</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="gallery-grid-1.html">Gallery</a></li>
        </ul>
    </div>
</div>
}


export default UsefulLinks