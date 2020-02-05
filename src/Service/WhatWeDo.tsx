import * as React from 'react';

export interface IProps {
}

function WhatWeDo(props : IProps) {
    return  <div className="wt-nav-block m-b50">
    <h4 className="wt-nav-title">What we do</h4>
    <ul className="wt-nav wt-nav-pills">
      <li><a href="javascript:void(0);">Makeup</a></li>
      <li><a href="javascript:void(0);">Hair</a></li>
      <li><a href="javascript:void(0);">Threading & Waxing</a></li>
      <li><a href="javascript:void(0);">Tinting & Lash Lifting</a></li>
      <li><a href="javascript:void(0);">Special Effects</a></li>
      <li><a href="javascript:void(0);">Makeup Classes</a></li>
    </ul>
</div>
}

export default WhatWeDo