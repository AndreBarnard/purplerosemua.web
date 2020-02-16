import * as React from 'react';
import AboutInfo from './AboutInfo';
import ServiceType from './ServiceType';
import Title from '../Components/Site/Title';

export interface IProps {}

function CompanySection() {
    return  <div className="section-full p-tb100">
    <div className="container">
        <div className="row">
            <div className="col-md-5 col-sm-5 col-xs-6 col-xs-100pc">
                <div className="about-com-pic">
                    <img src={require("../Images/Site/PurpleRoseMUA_CapeTown_MakeUp.jpg")} alt="" className="img-responsive"/>
                </div>
            </div>
            <AboutInfo 
            p1="Purple Rose MUA was founded in 2012, we are a Cape Town based professional makeup artistry. We take great pride in our work ethic and professionalism to deliver a unique experience for every client."
            p2="At Purple Rose MUA we are truly passionate about makeup and feels so blessed to be given the honour of sharing in your important days and giving you the confident to enjoy your event. "
            />
            <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="about-types row">

                    <ServiceType
                    flaticon="flaticon-eye"
                    heading="Makeup"
                    desc="Makeup is where our passion lies and we specialis in Bridal, Fashion and Special Effects"
                    />

                    <ServiceType
                    flaticon="flaticon-people"
                    heading="Waxing"
                    desc="We provide a wide variety of waxing services see service page for more information"
                    />                   

                    <ServiceType
                    flaticon="flaticon-mirror"
                    heading="Tinting & Lash Lifting "
                    desc="We provide a wide variety of tinting and lash lifting services see service page for more information"
                    />
                    
                    <ServiceType
                    flaticon="flaticon-female-hairs"
                    heading="Hair Styling"
                    desc="We are anound for our hair styling skills, out hair styles Iran Grant has been in the indastry for many years."
                    />
                </div>
            </div>
        </div>
    </div>
</div>  
}

export default CompanySection