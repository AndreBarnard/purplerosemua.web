import * as React from 'react';

export interface IProps {
}

function Tags(props : IProps) {
    return <div className="widget bg-white  widget_tag_cloud">
    <h4 className="widget-title">Tags</h4>
    <div className="tagcloud">
        <a href="javascript:void(0);">Trouble </a>
        <a href="javascript:void(0);">Programmers</a>
        <a href="javascript:void(0);">Never</a>
        <a href="javascript:void(0);">Tell</a>
        <a href="javascript:void(0);">Doing</a>
        <a href="javascript:void(0);">Person</a>
        <a href="javascript:void(0);">Inventors Tag</a>
        <a href="javascript:void(0);">Between </a>
        <a href="javascript:void(0);">Abilities</a>
        <a href="javascript:void(0);">Fault </a>
        <a href="javascript:void(0);">Gets </a>
        <a href="javascript:void(0);">Macho</a>
    </div>
</div>   
}

export default Tags