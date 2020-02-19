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
            paragraph="Get to meet our team of talented individuals" />
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

                <TeamMember
                    portfolioImg={require("../Images/OurTeam/AndreBarnard.jpg")}
                    name="Andre Barnard"
                    title="That IT Guy"
                    facebookURL="https://www.facebook.com/andrebarn/"
                    instagramURL="https://www.instagram.com/barnard637/"
                    youtubeURL="https://www.youtube.com/channel/UCCZ8_pfwOPKWCmK8QPaS3jQ?view_as=subscriber"
                    linkedinURL="https://www.linkedin.com/"
                    twitterURL="https://www.twitter.com"                    
                />
             </div>            
        </div>    
    </div>
</div>
}

export default TeamSection