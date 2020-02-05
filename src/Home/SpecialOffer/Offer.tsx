import * as React from 'react';

export interface IProps {
    catchPhrase : string
    heading : string
    desc : string
}

function Offer(props : IProps) {
    return <div className="awesome-counter text-right">
                <h3 className="font-24 text-secondry">{props.catchPhrase}</h3>
                <h2 className="font-60 font-weight-600"><span className="text-primary">{props.heading} </span></h2>
                <p>{props.desc}</p>
            </div>
}

export default Offer