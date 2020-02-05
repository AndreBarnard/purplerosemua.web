import * as React from 'react';
import SectionHead from '../Components/Site/SectionHead';

export interface IProps {
}

function OurOffer(props : IProps) {
    return <div className="col-md-6 col-sm-6">
    <SectionHead heading="Our Offers" />    
    <div>
        <ul className="list-check secondry">
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</li>
            <li>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</li>
            <li>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</li>
            <li>Text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.t</li>
            <li>Dorem ipsum dolor sit amet rem Ipsum has been the industry's standard dummy text</li>
        </ul>
    </div>
</div>
}

export default OurOffer