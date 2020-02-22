import * as React from 'react';

export interface IProps {
}

function Tags(props : IProps) {
    return <div className="widget bg-white  widget_tag_cloud">
    <h4 className="widget-title">Tags</h4>
    <div className="tagcloud">
        <a href="javascript:void(0);">Bridal </a>
        <a href="javascript:void(0);">Makeup</a>
        <a href="javascript:void(0);">Wedding</a>
        <a href="javascript:void(0);">Music Video</a>
        <a href="javascript:void(0);">Special Effects</a>
        <a href="javascript:void(0);">Purple Rose</a>
        <a href="javascript:void(0);">Dyme</a>
        <a href="javascript:void(0);">Makeup Stars </a>
    </div>
</div>   
}

export default Tags