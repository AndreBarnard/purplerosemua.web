import * as React from 'react';
import bg6 from '../Images/Background/bg-6.jpg';

export interface IAppProps {
}

function SpecialOffer() {


    return <div className="section-full  special-offer-block2 overlay-wraper bg-repeat p-t80 p-b50"  style={{backgroundImage: `url(${bg6})`}}>
    <div className="overlay-main bg-white opacity-01"></div>
    <div className="left-larg-pic">
        <div className="wt-media">
            <img src={require('../Images/Home/stone_flower2.png')} alt="" />
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-3">
                
            </div>
            <div className="col-md-9 col-sm-9">
                <div className="awesome-counter text-right">
                    <h3 className="font-24 text-secondry">You Owe Yourself This Moment</h3>
                    <h2 className="font-60 font-weight-600"><span className="text-primary">Our Special Offer </span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada.</p>
                </div>
                <div className="pull-right counter-small">
                    <ul className="list-inline">
                        <li>
                            <div className="wt-icon-box-wraper left p-a10 text-secondry">
                                <span className="icon-sm">
                                    <span className="flaticon-happy"></span>
                                </span>
                                <div className="icon-content">
                                    <div className="font-20 font-weight-600"><span className="counter">458</span><b>+</b></div>
                                    <span className="text-uppercase">Happy Clients</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="wt-icon-box-wraper left p-a10 text-secondry">
                                <span className="icon-sm">
                                    <span className="flaticon-trophy"></span>
                                </span>
                                <div className="icon-content">
                                    <div className="font-20 font-weight-600"><span className="counter">698</span><b>+</b></div>
                                    <span className="text-uppercase">Win Awards</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="wt-icon-box-wraper left p-a10 text-secondry">
                                <span className="icon-sm">
                                    <span className="flaticon-female-hairs"></span>
                                </span>
                                <div className="icon-content">
                                    <div className="font-20 font-weight-600"><span className="counter">894</span><b>+</b></div>
                                    <span className="text-uppercase">Our Trainer</span>
                                </div>
                            </div>
                        </li>
                    </ul>
            </div>
        </div>
    </div>
    </div>
</div> 
}


export default SpecialOffer