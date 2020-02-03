import * as React from 'react';
import Title from '../Title';
import MainArticle from './MainArticle';
import Article from './Article';

export interface IAppProps {
}

function LatestNews() {

    return <div className="section-full latest-blog bg-gray p-t80 p-b50">
    <div className="container">
    <Title 
        titleSpan="Latest" 
        titleH2="News" 
        paragraph="What is happing in the live of Purple Rose MUA" />

        
        <div className="section-content ">
            <div className="row equal-wraper">
                {/* <!-- COLUMNS 1 --> */}
                <div className="col-md-6 col-sm-12">
                    <Article
                        day="1 Feb"
                        year="2020"
                        author="Purple Rose MUA"
                        title="Dodgeball SA - CapeTown 10s 2020"
                        desc="Well done to the Grave Dodges for winning the premier league. Think the skull face intimidated your opposition. ;-)"
                        img={require("../../Images/blog/dodgeball/CapeTown10s_dodgeball.jpg")}
                        link="/blog"/>  

                    <Article
                        day="25 Jan"
                        year="2020"
                        author="Purple Rose MUA"
                        title="Birthday Giveaway"
                        desc="Jeanerien Barnard is celebrating 🥳 her birthday this February and we want to share the joy with you! we am giving away a @makeuprevolutionsa makeup set!" 
                        img={require("../../Images/blog/birthdaygiveaway/PurpleRoseBirthday_giveaway_2020_0211.jpg")}
                        link="/blog"/>                        

                    <Article
                         day="4 Jan"
                         year="2020"
                         author="Purple Rose MUA"
                         title="Dupper Wedding"
                         desc="Congratulations to Mr. and Ms. Dupper for tying the knot on 4 Jan 2020, we hope you all the best for your new adventures together. #duppermakiti"
                         img={require("../../Images/blog/dupperwedding/Wedding_Mr_Ms_Dupper.jpg")}
                         link="/blog"/>               
                </div>
                <div className="col-md-6 col-sm-12">
                    <MainArticle
                        day="2 Feb"
                        year="2020"
                        author="Purple Rose MUA"
                        title="Grimehouse Fight Club (Official Video)"
                        desc="It's finally here. You can find the full HQ version on YouTube. The normal song on Spotify. Special effect by Purple Rose MUA"
                        img={require("../../Images/blog/fightclub/Grimehouse_Fightclub_MusicVideo.jpg")}
                        link="/blog" />
                </div>                            
            </div>
        </div>
    </div>
</div>
}


export default LatestNews