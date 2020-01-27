import * as React from 'react';

export interface IAppProps {
}

function AboutCompany() {

    return <div className="col-md-3 col-sm-6">  
    <div className="widget widget_about">
        <h4 className="widget-title">About Company</h4>
        <div className="logo-footer clearfix p-b15">
            <a href="index.html"><img src="images/footer-logo.png" width="230" height="67" alt=""/></a>
        </div>
        <p>Purple Rose MUA was founded in 2012, we are a Cape Town, based professional makeup artistry. We take great pride in our work ethic and professionalism to deliver a unique experience for every client.
        </p>  
    </div>
</div> 
}


export default AboutCompany