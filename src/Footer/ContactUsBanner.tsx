import * as React from 'react';

export interface IAppProps {
}

function ContactUsBanner() {

    return <div className="call-to-action-wrap call-to-action-skew bg-primary bg-no-repeat" style={{backgroundImage:`url('../images/background/bg-4.png')`}}>
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-sm-8">
                <div className="call-to-action-left p-tb20 p-r50">
                    <h4 className="text-uppercase m-b10">We are ready to build your dream tell us more about your project</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra mauris eget tortor.</p>
                </div>
            </div>
            
            <div className="col-md-3">
                <div className="call-to-action-right p-tb30">
                    <a href="contact-1.html" className="site-button-secondry radius-sm text-uppercase font-weight-600">
                        Contact us
                    </a>
                </div>
            </div>
        </div>
     </div>
</div>
}


export default ContactUsBanner