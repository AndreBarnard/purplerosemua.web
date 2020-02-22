import * as React from 'react';
import Post from './Post';

export interface IProps {
}

function RecentPost(props : IProps) {
    return <div className="widget bg-white  recent-posts-entry">
    <h4 className="widget-title">Posts</h4>
    <div className="section-content">
        <div className="wt-tabs tabs-default border">
            <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#web-design-1">Recent</a></li>
                <li><a data-toggle="tab" href="#graphic-design-1">Popular</a></li>
            </ul>
            <div className="tab-content">
            
                <div id="web-design-1" className="tab-pane active ">
                    <div className="widget-post-bx">
                        <Post 
                        title="Bridal trial - Dyme Beauty" 
                        date="17 Feb 2020" 
                        img={require("../../Images/blog/dymebridaltrail/PurpleRoseMUA_DymeBridalTrial_tumbnail.jpg")} />
                        <Post 
                        title="Fight Club (Featuring @Sicknal)" 
                        date="1 Feb 2020" 
                        img={require("../../Images/blog/fightclub/PurpleRoseMUA_FightClub_GrimeHouse_thumbnail.jpg")} />
                        <Post 
                        title="Dupper Wedding" 
                        date="4 Jan 2020" 
                        img={require("../../Images/blog/dupperwedding/Wedding_Mr_Ms_Dupper thumbnail.jpg")} />
                        
                    </div>
                </div>
                
                <div id="graphic-design-1" className="tab-pane">
                    <div className="widget-post-bx">
                        <Post 
                        title="Bridal trial - Dyme Beauty" 
                        date="17 Feb 2020" 
                        img={require("../../Images/blog/dymebridaltrail/PurpleRoseMUA_DymeBridalTrial_tumbnail.jpg")} />
                        <Post 
                        title="Fight Club (Featuring @Sicknal)" 
                        date="1 Feb 2020" 
                        img={require("../../Images/blog/fightclub/PurpleRoseMUA_FightClub_GrimeHouse_thumbnail.jpg")} />
                        <Post 
                        title="Dupper Wedding" 
                        date="4 Jan 2020" 
                        img={require("../../Images/blog/dupperwedding/Wedding_Mr_Ms_Dupper thumbnail.jpg")} />
                        </div>
                </div>                
            </div>
        </div>
    </div>
</div>
}

export default RecentPost