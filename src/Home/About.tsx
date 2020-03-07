import * as React from 'react';
import {Link} from "react-router-dom";

export interface IAppProps {
}

function About() {

    return <div className="section-full p-tb100 bg-bottom-center bg-full-width bg-no-repeat">
    <div className="container ">
        <div className="section-content about4-section">
            <div className="row">
                <div className="col-md-5 col-sm-5">
                    <div className="about4-section-pic ">
                        <div className="wt-media">
                            <img src={require('../Images/Home/PurpleRose_AboutUs.jpg')} alt="Purple Rose" />
                        </div>
                    </div>
                </div>
                
                <div className="col-md-7 col-sm-7">
                    <div className="about4-content">
                        <h3 className="text-uppercase text-secondry">We Proudly</h3>
                        <h2><span className="text-primary">Welcome you to </span> Purple Rose MUA </h2>
                        <p><strong>We specialize in everything beauty.</strong></p>
                        <p>Purple Rose MUA was founded in 2012, we are a Cape Town based professional makeup artistry. We take great pride in our work ethic and professionalism to deliver a unique experience for every client.</p>
                        <p>At Purple Rose MUA we are truly passionate about makeup and feels so blessed to be given the honour of sharing in your important days and giving you the confident to enjoy your event.</p>
                        <div className="text-right p-b30">
                            <img src={require('../Images/Home/PurpleRoseSigniture.png')} alt="Purple Rose" />
                        </div>    
                        <div>
                            <Link to="/about" className="site-button radius-sm">
                              <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                            </Link>
                            <Link to="/services" className="site-button-secondry radius-sm">
                              <span className="font-weight-700 inline-block text-uppercase p-lr15">Services</span> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>	
    </div>
</div> 
}


export default About