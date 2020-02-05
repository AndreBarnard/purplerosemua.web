import * as React from 'react';

export interface IProps {
    img : string
    heading : string
    day: string
    year: string
    author : string
    desc : string
}

function ServicesContentItem(props : IProps) {
    return <div className="item">
    <div className="ow-blog-post date-style-2">
        <div className="ow-post-media wt-img-effect zoom-slow">
            <img src={props.img} alt="" />
        </div>
        <div className="ow-post-info p-tb30 bg-white">
            <div className="ow-post-title">
                <h4 className="post-title"><a href="javascript:void(0);" title="Video post">{props.heading}</a></h4>
            </div>
            <div className="ow-post-meta">
                <ul>
                    <li className="post-date"> <i className="fa fa-calendar"></i><strong>{props.day}</strong> <span> {props.year}</span> </li>
                    <li className="post-author"><i className="fa fa-user"></i>By <a href="javascript:void(0);" title="Posts by John" rel="author">{props.author}</a> </li>
                    {/* <li className="post-comment"><i className="fa fa-comments"></i> <a href="javascript:void(0);" className="comments-link">1 Comment</a> </li> */}
                </ul>
            </div>
            <div className="ow-post-text">
                <p>{props.desc}</p>
            </div>
            {/* <div className="ow-post-readmore "> 
                <a href="javascript:void(0);" title="READ MORE" rel="bookmark" className=" site-button-link"> READ MORE  <i className="fa fa-angle-double-right"></i></a> 
            </div> */}
            <div className="ow-post-tags clearfix">
                
            </div>
        </div>                                      
    </div>
</div>
}

export default ServicesContentItem