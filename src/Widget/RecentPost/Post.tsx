import * as React from 'react';

export interface IProps {
    title: string
    date : string
    img : string
    commentCount? : number
}

function Post(props : IProps) {

    const count = props.commentCount || 0

    const renderComment = () => {
        let result : any = ""
        if(count > 0)
        {
        result = <li className="post-comment"><i className="fa fa-comments"></i> {count}}comment</li>
        }
        return result;
    }

    return <div className="widget-post clearfix bg-gray">
                <div className="wt-post-media">
                    <img src={props.img}  alt="" className="radius-bx" />
                </div>
                <div className="wt-post-info">
                    <div className="wt-post-header">
                        <h6 className="post-title">{props.title}</h6>
                    </div>
                    <div className="wt-post-meta">
                        <ul>
                            <li className="post-author">{props.date}</li>
                            {renderComment()}
                        </ul>
                    </div>
                </div>
            </div>                        
}

export default Post