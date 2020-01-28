import * as React from 'react';
import Expert from './Expert';
import jeanerienImg from '../Images/OurTeam/ex1.jpg'
import irenaImg from '../Images/OurTeam/ex1.jpg'

export interface IAppProps {
}

function OurExperts() {

    return <div className="section-full bg-white p-tb80">
    <div className="container">
        {/* <!-- TITLE START--> */}
        <div className="section-head text-center">
            <h2><span className="text-primary">Our</span> Experts</h2>
            <div className="wt-separator-outer ">
                <div className="wt-separator style-icon">
                    <i className="fa fa-leaf text-black"></i>
                    <span className="separator-left bg-primary"></span>
                    <span className="separator-right bg-primary"></span>
                </div>                            
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        {/* <!-- TITLE END--> */}
        <div className="section-content wt-our-team">
            <div className="row">
                <Expert 
                expertImg={jeanerienImg}
                expertName="Jeanerien Barnard"
                expertTitle="Founder, Purple Rose MUA"
                expertFacebookURL="https://www.facebook.com/purplerosemua/"
                experInstagramURL="https://www.instagram.com/jeanerienb22/"
                experYoutubeURL="https://www.youtube.com/user/jeanerieng"
                />

                <Expert 
                expertImg={irenaImg}
                expertName="Irina Grant"
                expertTitle="Founder, Make-up stars"
                expertFacebookURL="https://www.facebook.com/purplerosemua/"
                experInstagramURL="https://www.instagram.com/jeanerienb22/"
                experYoutubeURL="https://www.youtube.com/user/jeanerieng"
                />
                
            </div>
        </div>
    </div>
</div>
}


export default OurExperts