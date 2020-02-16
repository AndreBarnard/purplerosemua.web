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
            p1="Purple Rose MUA was founded in 2012, we are a Cape Town, based professional makeup artistry. We take great pride in our work ethic and professionalism to deliver a unique experience for every client."
            p2="Some text about company"
            />
            <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="about-types row">
                    <ServiceType
                    flaticon="flaticon-female-hairs"
                    heading="Waxing"
                    desc="Text about service"
                    />

                    <ServiceType
                    flaticon="flaticon-eye"
                    heading="Makeup"
                    desc="Text about service"
                    />

                    <ServiceType
                    flaticon="flaticon-mirror"
                    heading="Facial"
                    desc="Text about service"
                    />
                    
                    <ServiceType
                    flaticon="flaticon-spray-bottle"
                    heading="Massage"
                    desc="Text about service"
                    />
                </div>
            </div>
        </div>
    </div>
</div>  
}

export default CompanySection