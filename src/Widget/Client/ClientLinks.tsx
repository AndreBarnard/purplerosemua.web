import * as React from 'react';

export interface IAppProps {
}

function ClientLinks(props: 
    {logo : string, 
    url : string
    }) {

    return <div className="item">
    <div className="ow-client-logo">
        <div className="client-logo wt-img-effect on-color">
            <a href={props.url} target="_blank"><img src={props.logo} alt="" /></a>
        </div>
    </div>
</div>
}


export default ClientLinks