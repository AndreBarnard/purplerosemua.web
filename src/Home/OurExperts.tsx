import * as React from 'react';
import Expert from './Expert';
import jeanerienImg from '../Images/OurTeam/ex1.jpg'
import irenaImg from '../Images/OurTeam/ex1.jpg'
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