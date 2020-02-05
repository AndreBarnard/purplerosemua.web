import * as React from 'react';
import Panel from './Panel';

export interface IProps {
}

function Accordion(props : IProps) {
    return <div> 
                <div className="wt-accordion acc-bg-gray" id="accordion9">
                    <Panel 
                    active={true}
                    heading="Awsome Web Design"
                    desc="Some text"
                    fontAwesome="fa fa-globe"
                    id="1"
                    />

                    <Panel 
                    active={true}
                    heading="Fast Developement"
                    desc="Some text"
                    fontAwesome="fa fa-photo"
                    id="2"
                    />

                    <Panel 
                    active={true}
                    heading="Fast Work"
                    desc="Some text"
                    fontAwesome="fa fa-cog"
                    id="3"
                    />
                    
                </div>
            </div>
}

export default Accordion