import * as React from 'react';

export interface IProps {
    active : boolean
    heading : string
    desc : string
    fontAwesome : string
    id : string
}


function Panel(props : IProps) {

    const parentID =  "#accordion" + props.id; 
    const childID =  "collapse" + props.id; 
    const childHash =  "#" + childID; 
    let activeClass = "acod-head";
    if (props.active)
    {
        activeClass = "acod-head acc-actives";
    }

    return <div className="panel wt-panel">            
    <div className={activeClass}>
        <h6 className="acod-title text-uppercase">
            <a data-toggle="collapse" href={childHash} data-parent={parentID} ><i className={props.fontAwesome}></i>
                {props.heading}
                <span className="indicator"><i className="fa fa-plus"></i></span>
            </a>
        </h6>
    </div>                
    <div id={childID} className="acod-body collapse">
        <div className="acod-content p-tb15">{props.desc}</div>
    </div>
    
</div>
}

export default Panel