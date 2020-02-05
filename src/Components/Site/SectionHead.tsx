import * as React from 'react';

export interface IProps {
    heading : string
}

function SectionHead(props : IProps) {
    return <div className="text-left m-b10">
         <h3 className="text-uppercase">{props.heading}</h3>
         <div className="wt-separator-outer">
           <div className="wt-separator style-icon">
               <i className="fa fa-leaf text-black"></i>
               <span className="separator-left pr-bg-color"></span>
               <span className="separator-right pr-bg-color"></span>
           </div>                                                        
        </div>
     </div>
}

export default SectionHead