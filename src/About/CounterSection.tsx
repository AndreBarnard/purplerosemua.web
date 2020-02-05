import * as React from 'react';
import CounterBlock from './CounterBlock';

export interface IProps {}

function CounterSection(props : IProps) {
    return <div className="section-full p-t30 pr-bg-color">
                    
    <div className="container">
        <div className="section-content">
            <div className="row">     
                <CounterBlock 
                count={100}
                heading="HAPPY CLIENTS"
                fontAwesome="fa fa-users"
                />
                <CounterBlock 
                count={100}
                heading="JOBS DONE"
                fontAwesome="fa fa-building"
                />
                <CounterBlock 
                count={2}
                heading="WORKERS EMPLOYED"
                fontAwesome="fa fa-user-plus"
                />                
                <CounterBlock 
                count={1}
                heading="AWARDS WON"
                fontAwesome="fa fa-user-plus"
                /> 
            </div>
        </div>
    </div>
</div>
}

export default CounterSection