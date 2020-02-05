import * as React from 'react';
import bg7 from '../../Images/Background/bg-6.jpg';
import Offer from './Offer';
import Stats from './Stats';

export interface IAppProps {
}

function SpecialOffer() {


    return <div className="section-full  special-offer-block2 overlay-wraper bg-repeat p-t80 p-b50"  style={{backgroundImage: `url(${bg7})`}}>
    <div className="overlay-main bg-white opacity-01"></div>
    <div className="left-larg-pic">
        <div className="wt-media">
            <img src={require('../../Images/Home/stone_flower2.png')} alt="" />
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-3">
                
            </div>
            <div className="col-md-9 col-sm-9">
                <Offer 
                catchPhrase="Look smashing hot, you desirve it."
                heading="Valentine Special Offer"
                desc="Feburary is the month of love, look fabulos on you night out, with our special offer for only R450 you can look hot and have you patner in ahw!!!"
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