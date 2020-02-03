import * as React from 'react';
import FooterSectionHeading from './FooterSectionHeading';
import BlogPost from './BlogPost';

export interface IAppProps {
}

function ResentPost() {

    return <div className="col-md-3 col-sm-6">
    <div className="widget recent-posts-entry-date">
        <FooterSectionHeading heading="Resent Post" />
        <div className="widget-post-bx">
            <BlogPost 
            day="2" 
            month="Feb"
            author="Purlple Rose MUA"
            title="Grimehouse Fight Club (Official Video)"
            link="/blog"
            />

            <BlogPost 
            day="1" 
            month="Feb"
            author="Purlple Rose MUA"
            title="Dodgeball SA - CapeTown 10s 2020"
            link="/blog"
            />

            <BlogPost 
            day="25" 
            month="Jan"
            author="Purlple Rose MUA"
            title="Birthday Giveaway"
            link="/blog"
            />
        </div>
    </div>
</div>     
}


export default ResentPost