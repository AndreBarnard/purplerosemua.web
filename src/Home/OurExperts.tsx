import * as React from 'react';
import Expert from './Expert';
import jeanerienImg from '../Images/OurTeam/PurleRoseMua_JeanerienBarnard.jpg'
import irenaImg from '../Images/OurTeam/IrinaGrant.jpg'
import Title from './Title';

export interface IAppProps {
}

function OurExperts() {

    return <div className="section-full bg-white p-tb80">
    <div className="container">
        <Title 
        titleSpan="Our" 
        titleH2="Experts" 
        paragraph="Some text about purple rose experts" />
        <div className="section-content wt-our-team">
            <div className="row">
                <Expert 
                expertImg={jeanerienImg}
                expertName="Jeanerien Barnard"
                expertTitle="Founder, Purple Rose MUA"
                expertFacebookURL="https://www.facebook.com/jeanerieng/"
                experInstagramURL="https://www.instagram.com/jeanerienb22/"
                experYoutubeURL="https://www.youtube.com/user/jeanerieng"
                />

                <Expert 
                expertImg={irenaImg}
                expertName="Irina Grant"
                expertTitle="Founder, Make-up stars Cape Town"
                expertFacebookURL="https://www.facebook.com/Make-up-Stars-Cape-Town-338523172898000/"
                experInstagramURL="https://www.instagram.com/irina_grant_makeupartist/"
                experYoutubeURL="https://www.youtube.com/user/jeanerieng"
                />
                
            </div>
        </div>
    </div>
</div>
}


export default OurExperts