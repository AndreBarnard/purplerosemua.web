import * as React from 'react';
import bg7 from '../../Images/Background/bg-6.jpg';
import Offer from './Offer';
import Stats from './Stats';
import '../../styles/_purplerose.scss'

export interface IAppProps {
}

function SpecialOffer() {


    return <div className="section-full  special-offer-block2 overlay-wraper bg-repeat p-t80 p-b50"  style={{backgroundImage: `url(${bg7})`}}>
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-3">
                <div className="wt-media">
                    <img  className="special-pic" src={require('../../Images/Home/PurpleRose_Nails_Acrylicsculpting_Special.jpg')} alt="Acrylic Sculpting" />
                </div> 
            </div>
            <div className="col-md-9 col-sm-9">
                <Offer 
                catchPhrase="Hands of glam, you desirve it."
                heading="Nails-on-wheels Special Offer"
                desc="We are running a special untill the end of April 2020, Acrylic sculpting to you door steps or only R250! Email or call us for a booking."
                />
                <div className="pull-right counter-small">
                    <ul className="list-inline">
                        <Stats 
                        counter={50}
                        heading="Happy Clients"
                        flaticon="flaticon-happy"
                        />
                        <Stats 
                        counter={1}
                        heading="Win Awards"
                        flaticon="flaticon-trophy"
                        />
                        <Stats 
                        counter={10}
                        heading="Trained"
                        flaticon="flaticon-female-hairs"
                        />
                    </ul>
            </div>
        </div>
    </div>
    </div>
</div> 
}


export default SpecialOffer