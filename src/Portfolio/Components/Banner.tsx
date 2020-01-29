import * as React from 'react';

export interface IAppProps {
}

function Banner(props : 
    {img : string,
     heading : string}) {

    return <div className="wt-bnr-inr overlay-wraper" style={{backgroundImage:`url(${props.img})`}}>
                <div className="overlay-main bg-black opacity-07"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <h1 className="text-white">{props.heading}</h1>
                    </div>
                </div>
            </div>
}

export default Banner