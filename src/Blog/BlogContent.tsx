import * as React from 'react';
import PageBanner from '../Components/Site/PageBanner';
import Breadcrum from '../Components/Site/Breadcrumb';
import PostVideo from './PostVideo';
import PostImage from './PostImage';
import PostSlider from './PostSlider';
import SliderImage from './SliderImage';
import WidgetGallery from '../Widget/Gallery/Gallery';
import Tags from '../Widget/Tags/Tags';
import Search from '../Widget/Search/Search';
import RecentPost from '../Widget/RecentPost/RecentPost';
import Client from '../Widget/Client/Client';
import Newsletter from '../Widget/Newsletter/Newsletter';

export interface IAppProps {
}

function BlogContent() {

    return <div className="page-content">

    <PageBanner img={require("../Images/banner/blog-banner.jpg")}
    heading="Blog"
    />
    <Breadcrum heading="Blog"/>
            
    <div className="section-full p-t80 p-b50">
        <div className="container">
            <div className="row">
            
                <div className="col-md-9">

                    <PostSlider
                    postTitle="Bridal trial - Dyme Beauty"
                    postDate="19 Feb"
                    postDateYear="2020"
                    author="Jeanerien Barnard"
                    postText="What a gorgeous bride to be her first bridal trial, thanks to @dymebeautyapp to them we can connect with more gorgeous people like her and a big thanks to @irina_grant_makeupartist the owner of @makeupstars_cpt for letting us use your gorgeous studio. If your interested in becoming a makeup artist and hair stylist check out her page. #dymebeautyapp #dymeartist #bridalmakeup @ Sea Point, Western Cape, South Africa"
                    facebookURL="https://www.facebook.com/purplerosemua/posts/3553855054689231"
                    webURL="https://dyme.co.za/"
                    instagramURL="https://www.instagram.com/p/B81NWooB6iy/"
                    >
                        <SliderImage img={require("../Images/blog/dymebridaltrail/PurpleRoseMUA_DymeBridalTrial_1.jpg")} />
                        <SliderImage img={require("../Images/blog/dymebridaltrail/PurpleRoseMUA_DymeBridalTrial_2.jpg")} />
                        <SliderImage img={require("../Images/blog/dymebridaltrail/PurpleRoseMUA_DymeBridalTrial_3.jpg")} /> 
                        <SliderImage img={require("../Images/blog/dymebridaltrail/PurpleRoseMUA_DymeBridalTrial_4.jpg")} /> 
                    </PostSlider>

                    <PostVideo
                    video="https://www.youtube.com/embed/85YlXg9LUYw"
                    videoTitle="Fight Club (Official Video)"
                    postTitle="Fight Club (Featuring @Sicknal)"
                    postDate="1 Feb"
                    postDateYear="2020"
                    author="Jeanerien Barnard"
                    postText="It's finally here. You can find the full HQ version on YouTube. The normal song on Spotify. Grimehouse sent out a special thanks to everyone involved. See instagram link. We had so much fun being part of the video as well as doing the special effects on the fighters."
                    instagramURL="https://www.instagram.com/p/B7-xbRlHB-z/"
                    youtubeURL="https://www.youtube.com/watch?v=85YlXg9LUYw"
                    soundCloudURL="https://soundcloud.com/uforecordz/grimehouse-fight-club-featuring-sicknal"
                    facebookURL="https://www.facebook.com/Grimehouse/videos/177994500106508/"
                    twitterURL="https://twitter.com/Grimehouse_SA/status/1187119680265306119?s=20"
                    />

                    {/* <PostSlider
                    postTitle="Blogpost With Img slider"
                    postDate="1 Feb"
                    postDateYear="2020"
                    author="Jeanerien Barnard"
                    postText="Some Text"
                    >
                        <SliderImage img={require("../Images/blog/default/thum1.jpg")} />
                        <SliderImage img={require("../Images/blog/default/thum1.jpg")} />
                        <SliderImage img={require("../Images/blog/default/thum1.jpg")} /> 
                    </PostSlider> */}

                    <PostImage
                    img={require("../Images/blog/dupperwedding/Wedding_Mr_Ms_Dupper_Large.jpg")}
                    postTitle="Dupper Wedding"
                    postDate="4 Jan"
                    postDateYear="2020"
                    author="Jeanerien Barnard"
                    postText="Congratulations to Mr. and Ms. Dupper for tying the knot on 4 Jan 2020, we hope you all the best for your new adventures together. #duppermakiti"
                    instagramURL="https://www.instagram.com/explore/tags/duppermakiti/"
                    facebookURL="https://www.facebook.com/hashtag/duppermakiti"
                    />
                    
                    {/* <!-- PAGINATION START --> */}
                    {/* <div className="pagination-bx clearfix ">
                        <ul className="custom-pagination pagination">
                           <li><a href = "#">&laquo;</a></li>
                           <li className="active"><a href = "#">1</a></li>
                           <li><a href = "#">2</a></li>
                           <li><a href = "#">3</a></li>
                           <li><a href = "#">4</a></li>
                           <li><a href = "#">5</a></li>
                           <li><a href = "#">&raquo;</a></li>
                        </ul>
                    </div> */}
                    {/* <!-- PAGINATION END --> */}
                    
                </div>
                {/* <!-- LEFT PART END --> */}
                <div className="col-md-3">                
                    <aside className="side-bar">
                       {/* <Search /> */}
                       <RecentPost />                            
                        <WidgetGallery />
                        <Client />
                        <Newsletter />                                                                  
                        <Tags />                     
                       </aside>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- SECTION CONTENT END --> */}
    
</div>
}

export default BlogContent