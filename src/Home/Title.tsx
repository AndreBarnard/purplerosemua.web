import * as React from 'react';

export interface IAppProps {
}

function Title(props: 
    {titleSpan : string, 
    titleH2 : string,
    paragraph : string,
    }) {

    return <div className="section-head text-center">
    <h2><span className="text-primary">{props.titleSpan}</span> {props.titleH2}</h2>
    <div className="wt-separator-outer ">
        <div className="wt-separator style-icon">
            <i className="fa fa-leaf text-black"></i>
            <span className="separator-left bg-primary"></span>
            <span className="separator-right bg-primary"></span>
        </div>                            
    </div>
    <p>{props.paragraph}</p>
</div>
}
export default Title