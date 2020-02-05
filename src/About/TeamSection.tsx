import * as React from 'react';
import Title from '../Components/Site/Title';
import TeamMember from './TeamMember';

export interface IProps {
}

function TeamSection(props : IProps) {
    return <div className="section-full p-t80 p-b50 ">
    <div className="container">    
        <div className=" m-b70">
            <Title heading="Our Team" 
            paragraph="Some text about our team" />
        </div> 
        <div className="section-content">
            <div className="row">
                <TeamMember
                    portfolioImg={require("../Images/OurTeam/PurleRoseMua_JeanerienBarnard.jpg")}
                    name="Jeanerien Barnard"
                    title="Founder, Purple Rose MUA & Make-up stars teacher"
                    facebookURL="https://www.facebook.com/jeanerieng/"
                    instagramURL="https://www.instagram.com/jeanerienb22/"
                    youtubeURL="https://www.youtube.com/user/jeanerieng"
                />

                <TeamMember
                    portfolioImg={require("../Images/OurTeam/IrinaGrant.jpg")}
                    name="Irina Grant"
                    title="Founder, Make-up stars Cape Town"
                    facebookURL="https://www.facebook.com/Make-up-Stars-Cape-Town-338523172898000/"
                    instagramURL="https://www.instagram.com/irina_grant_makeupartist/"
                    webURL="https://irinagrant.co.za/"
                />
             </div>            
        </div>    
    </div>
</div>
}

export default TeamSection