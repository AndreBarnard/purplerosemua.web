import * as React from 'react';
import Title from './Title';

export interface IAppProps {
}

function Services() {

    return <div className="section-full bg-gray p-t80 p-b120">
    <div className="container">
    <Title 
        titleSpan="Our" 
        titleH2="Services" 
        paragraph="Some text about Purple Rose services" />
        <div className="section-content">
            <div className="owl-carousel our-pricing-carousel owl-btn-vertical-center owl-btn-hover nav nav-tabs">
                
                {/* <!-- Block 1 --> */}
                <div className="item active-arrow active">
                    <div data-toggle="tab" data-target="#pricing-item1" className="tab-block">
                        <div className="our-pricing-tab  radius-sm bdr-1 bdr-gray">
                            <div className="wt-icon-box-wraper center  p-lr10">
                                <div className="icon-lg m-b5">
                                    <span className="icon-cell  text-black"><i className="flaticon-people"></i></span>
                                </div>
                                <div className="icon-content">
                                    <span className="wt-tilte text-uppercase p-b10 inline-block font-weight-600">Spa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Block 2 --> */}
                <div className="item">
                    <div data-toggle="tab" data-target="#pricing-item2" className="tab-block">
                        <div className="our-pricing-tab  radius-sm bdr-1 bdr-gray">
                            <div className="wt-icon-box-wraper center  p-lr10">
                                <div className="icon-lg m-b5">
                                    <span className="icon-cell  text-black"><i className="flaticon-eye"></i></span>
                                </div>
                                <div className="icon-content">
                                    <span className="wt-tilte text-uppercase p-b10 inline-block font-weight-600">Hair Makeup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Block 3 --> */}
                <div className="item">
                    <div data-toggle="tab" data-target="#pricing-item3" className="tab-block">
                        <div className="our-pricing-tab  radius-sm bdr-1 bdr-gray">
                            <div className="wt-icon-box-wraper center  p-lr10">
                                <div className="icon-lg m-b5">
                                    <span className="icon-cell  text-black"><i className="flaticon-female-hairs"></i></span>
                                </div>
                                <div className="icon-content">
                                    <span className="wt-tilte text-uppercase p-b10 inline-block font-weight-600">Waxing</span>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Block 4 --> */}
                <div className="item">
                    <div data-toggle="tab" data-target="#pricing-item4" className="tab-block">
                        <div className="our-pricing-tab  radius-sm bdr-1 bdr-gray">
                            <div className="wt-icon-box-wraper center  p-lr10">
                                <div className="icon-lg m-b5">
                                    <span className="icon-cell  text-black"><i className="flaticon-mirror"></i></span>
                                </div>
                                <div className="icon-content">
                                    <span className="wt-tilte text-uppercase p-b10 inline-block font-weight-600">Facial</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Block 5 --> */}
                <div className="item">
                    <div data-toggle="tab" data-target="#pricing-item5" className="tab-block">
                        <div className="our-pricing-tab  radius-sm bdr-1 bdr-gray">
                            <div className="wt-icon-box-wraper center  p-lr10">
                                <div className="icon-lg m-b5">
                                    <span className="icon-cell  text-black"><i className="flaticon-spray-bottle"></i></span>
                                </div>
                                <div className="icon-content">
                                    <span className="wt-tilte text-uppercase p-b10 inline-block font-weight-600">Massage</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Block 6 --> */}
                <div className="item">
                    <div data-toggle="tab" data-target="#pricing-item6" className="tab-block">
                        <div className="our-pricing-tab  radius-sm bdr-1 bdr-gray">
                            <div className="wt-icon-box-wraper center  p-lr10">
                                <div className="icon-lg m-b5">
                                    <span className="icon-cell  text-black"><i className="flaticon-people"></i></span>
                                </div>
                                <div className="icon-content">
                                    <span className="wt-tilte text-uppercase p-b10 inline-block font-weight-600">Spa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Block 7 --> */}
                <div className="item">
                    <div data-toggle="tab" data-target="#pricing-item7" className="tab-block">
                        <div className="our-pricing-tab  radius-sm bdr-1 bdr-gray">
                            <div className="wt-icon-box-wraper center  p-lr10">
                                <div className="icon-lg m-b5">
                                    <span className="icon-cell  text-black"><i className="flaticon-eye"></i></span>
                                </div>
                                <div className="icon-content">
                                    <span className="wt-tilte text-uppercase p-b10 inline-block font-weight-600">Hair Makeup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
            
        <div className="tab-content">
            {/* <!-- Block 1 --> */}
            <div id="pricing-item1" className="pricing-tab-content-block tab-pane active active-arrow">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab1-1">Massage Therapy</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab1-2">Facials </a></li>
                                <li><a data-toggle="tab" href="#pricing-tab1-3">Pedicures</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab1-4">Manicures</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab1-5">Body Wraps</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab1-6">Waxing & Cosmetics</a></li>
                            </ul>
                            <div className="tab-content p-l50">
                            
                                <div id="pricing-tab1-1" className="tab-pane active">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Massage Therapy </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab1-2" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Facials </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab1-3" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s3.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Pedicures </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab1-4" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s4.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Manicures</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab1-5" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s5.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Body Wraps</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab1-6" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s6.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Waxing & Cosmetics</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- Block 2 --> */}
            <div id="pricing-item2" className="pricing-tab-content-block tab-pane">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab2-1">Hair Color</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab2-2">Braids & Twist</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab2-3">Corrective Color</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab2-4">Hair Extension</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab2-5">Hair Cut</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab2-6">Partial Foil</a></li>
                            </ul>
                            <div className="tab-content p-l50">
                            
                                <div id="pricing-tab2-1" className="tab-pane active">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Hair Color </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab2-2" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s3.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Braids & Twist </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab2-3" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s4.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Corrective Color</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab2-4" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s5.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Hair Extension</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab2-5" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s6.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Hair Cut</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab2-6" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s1.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Partial Foil</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- Block 3 --> */}
            <div id="pricing-item3" className="pricing-tab-content-block tab-pane">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab3-1">Eye Brows </a></li>
                                <li><a data-toggle="tab" href="#pricing-tab3-2">Lips </a></li>
                                <li><a data-toggle="tab" href="#pricing-tab3-3">Eye Brow & Lips</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab3-4">Chin & Lips </a></li>
                                <li><a data-toggle="tab" href="#pricing-tab3-5">Side of Face</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab3-6">Lower Leg</a></li>    
                            </ul>
                            <div className="tab-content p-l50">
                            
                                <div id="pricing-tab3-1" className="tab-pane active">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s3.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Eye Brows </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab3-2" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s4.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Lips </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab3-3" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s5.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Eye Brow & Lips </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab3-4" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s6.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Chin & Lips </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab3-5" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s1.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Side of Face</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab3-6" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s2.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Lower Leg</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- Block 4 --> */}
            <div id="pricing-item4" className="pricing-tab-content-block tab-pane">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab4-1">Hand-On Facial </a></li>
                                <li><a data-toggle="tab" href="#pricing-tab4-2">Electrotherapy </a></li>
                                <li><a data-toggle="tab" href="#pricing-tab4-3">Clean up</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab4-4">Anti Ageing </a></li>
                                <li><a data-toggle="tab" href="#pricing-tab4-5">Glow & Radiance</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab4-6">Normal Wash</a></li>
                            </ul>
                            <div className="tab-content p-l50">
                            
                                <div id="pricing-tab4-1" className="tab-pane active">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s4.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Hand-On Facial</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab4-2" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s5.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Electrotherapy </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab4-3" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s6.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Clean up</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab4-4" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s1.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Anti Ageing </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab4-5" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s2.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Glow & Radiance</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab4-6" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s3.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Normal Wash</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- Block 5 --> */}
            <div id="pricing-item5" className="pricing-tab-content-block tab-pane">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab5-1">Head</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab5-2">Back</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab5-3">Foot</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab5-4">Aromatherapy</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab5-5">Scrub</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab5-6">Tissue</a></li>
                            </ul>
                            <div className="tab-content p-l50">
                            
                                <div id="pricing-tab5-1" className="tab-pane active">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s5.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Head</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab5-2" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s6.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Back </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab5-3" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s1.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Foot</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab5-4" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s2.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Aromatherapy</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab5-5" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s3.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Scrub</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab5-6" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s4.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Tissue</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- Block 6 --> */}
            <div id="pricing-item6" className="pricing-tab-content-block tab-pane ">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab6-1">Massage Therapy</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab6-2">Facials </a></li>
                                <li><a data-toggle="tab" href="#pricing-tab6-3">Pedicures</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab6-4">Manicures</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab6-5">Body Wraps</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab6-6">Waxing & Cosmetics</a></li>
                            </ul>
                            <div className="tab-content p-l50">
                            
                                <div id="pricing-tab6-1" className="tab-pane active">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s6.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Massage Therapy </h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab6-2" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Facials</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab6-3" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s2.jpg" alt="" />

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Pedicures</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab6-4" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s4.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Manicures</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab6-5" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s4.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Body Wraps</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab6-6" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s5.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Waxing & Cosmetics</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- Block 7 --> */}
            <div id="pricing-item7" className="pricing-tab-content-block tab-pane">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab7-1">Hair Color</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab7-2">Braids & Twist</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab7-3">Corrective Color</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab7-4">Hair Extension</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab7-5">Hair Cut</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab7-6">Partial Foil</a></li>
                            </ul>
                            <div className="tab-content p-l50">
                            
                                <div id="pricing-tab7-1" className="tab-pane active">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Hair Color</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab7-2" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Braids & Twist</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab7-3" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s3.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Corrective Color</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab7-4" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s4.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Hair Extension</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab7-5" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s5.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Hair Cut</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="pricing-tab7-6" className="tab-pane">
                                    <div className="pricing-tab-inner">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="wt-media">
                                                    <img src="images/our-services/large/s6.jpg"  alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wt-tilte">
                                                    <h3 className="font-26 p-b20 font-weight-400">Partial Foil</h3>
                                                    <h4 className="text-primary">$40 - $80</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy
                                                    text of the printing and eentially unchanged.
                                                    </p>
                                                    <a href="" className="site-button skew-icon-btn radius-sm">
                                                      <span className="font-weight-700 inline-block text-uppercase p-lr15">More</span> 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
        
    </div>
</div>
}


export default Services