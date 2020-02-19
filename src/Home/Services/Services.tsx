import * as React from 'react';
import Title from '../Title';
import SeviceBlock from './SeviceBlock';
import ServiceTabContent from './ServiceTabContent';

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
                
                <SeviceBlock flaticon="flaticon-eye" title="Makeup" target="#pricing-item1" blockClassName="item active-arrow active" />
                <SeviceBlock flaticon="flaticon-female-hairs" target="#pricing-item2" title="Hair" />
                <SeviceBlock flaticon="flaticon-people" target="#pricing-item3" title="Threading & Waxing" />
                <SeviceBlock flaticon="flaticon-spray-bottle" target="#pricing-item4" title="Tinting & Lash Lifting" />
                <SeviceBlock flaticon="flaticon-mirror" title="Special Effects" target="#pricing-item5"/>
                <SeviceBlock flaticon="flaticon-people" title="Makeup Classes" target="#pricing-item6" />              
            </div>
        </div>
            
        <div className="tab-content">
            {/* <!-- Makeup --> */}
            <div id="pricing-item1" className="pricing-tab-content-block tab-pane active active-arrow">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab1-1">Natural Glow Up</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab1-2">Glow Up</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab1-3">Happily Ever After</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab1-4">Bridesmaid</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab1-5">Flower Girl</a></li>
                            </ul>
                            <div className="tab-content p-l50">                        
                                <ServiceTabContent 
                                id="pricing-tab1-1"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Natural Glow Up"
                                price="R700"
                                desc="some text bout the service"
                                active={true}/>
                                
                                <ServiceTabContent 
                                id="pricing-tab1-2"
                                img={require('../../Images/our-services/makeup/PurpleRose_Makeup_GlowUp.jpg')}
                                heading="Glow Up"
                                price="R800"
                                desc="some text bout the service"
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab1-3"
                                img={require('../../Images/our-services/makeup/PurpleRose_Makeup_Bridal.jpg')}
                                heading="Happily Ever After"
                                price="R1 400"
                                desc="some text bout the service"
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab1-4"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Bridesmaid"
                                price="R800"
                                desc="some text bout the service"
                                active={false}/>
                                
                                <ServiceTabContent 
                                id="pricing-tab1-5"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Flower Girl (under 10)"
                                price="R120"
                                desc="some text bout the service"
                                active={false}/>
                             
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- Hair --> */}
            <div id="pricing-item2" className="pricing-tab-content-block tab-pane">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab2-1">Bride</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab2-2">Bride Trail</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab2-3">Bridesmaid</a></li>
                            </ul>
                            <div className="tab-content p-l50">
                            
                            <ServiceTabContent 
                                id="pricing-tab2-1"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Bride"
                                price="R1 500"
                                desc="some text bout the service"
                                active={true}/>

                            <ServiceTabContent 
                                id="pricing-tab2-2"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Bride Trail"
                                price="R750"
                                desc="some text bout the service"
                                active={false}/>

                            <ServiceTabContent 
                                id="pricing-tab2-3"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Additional hair"
                                price="R700 (per head)"
                                desc="some text bout the service"
                                active={false}/>
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- Threading & Waxing --> */}
            <div id="pricing-item3" className="pricing-tab-content-block tab-pane">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab3-1">Brows </a></li>
                                <li><a data-toggle="tab" href="#pricing-tab3-2">Lip </a></li>
                                <li><a data-toggle="tab" href="#pricing-tab3-3">Chin</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab3-4">Sides</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab3-5">Full Face</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab3-6">Nostrils Waxing</a></li>    
                            </ul>
                            <div className="tab-content p-l50">
                                <ServiceTabContent 
                                id="pricing-tab3-1"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Brows"
                                price="R95"
                                desc="some text bout the service"
                                active={true}/>

                                <ServiceTabContent 
                                id="pricing-tab3-2"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Lip"
                                price="R65"
                                desc="some text bout the service"
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab3-3"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Chin"
                                price="R65"
                                desc="some text bout the service"
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab3-4"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Sides"
                                price="R85"
                                desc="some text bout the service"
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab3-5"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Full Face"
                                price="R250"
                                desc="some text bout the service"
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab3-6"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Nostril Waxing"
                                price="R65"
                                desc="some text bout the service"
                                active={false}/>
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- Tinting & Lash Lifting --> */}
            <div id="pricing-item4" className="pricing-tab-content-block tab-pane">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab4-1">Lash Tint</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab4-2">Brow Tint </a></li>
                                <li><a data-toggle="tab" href="#pricing-tab4-3">Lash Lifting</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab4-4">Lash Lifting with Lash Tint</a></li>
                            </ul>
                            <div className="tab-content p-l50">
                                <ServiceTabContent 
                                id="pricing-tab4-1"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Lash Tint"
                                price="R80"
                                desc="some text bout the service"
                                active={true}/>

                                <ServiceTabContent 
                                id="pricing-tab4-2"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Brow Tint"
                                price="R60"
                                desc="some text bout the service"
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab4-3"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Lash Lifting"
                                price="R420"
                                desc="some text bout the service"
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab4-4"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Lash Lifting with Lash Tint"
                                price="R480"
                                desc="some text bout the service"
                                active={false}/>
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- Special Effects --> */}
            <div id="pricing-item5" className="pricing-tab-content-block tab-pane">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab5-1">Facepaint</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab5-2">Bullet wounds</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab5-3">Scarring</a></li>
                            </ul>
                            <div className="tab-content p-l50">
                            
                            <ServiceTabContent 
                                id="pricing-tab5-1"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Facepaint"
                                price="Ask for quote"
                                desc="some text bout the service"
                                active={true}/>

                            <ServiceTabContent 
                                id="pricing-tab5-2"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Bullet wounds"
                                price="Ask for quote"
                                desc="some text bout the service"
                                active={true}/>

                            <ServiceTabContent 
                                id="pricing-tab5-3"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Scarring"
                                price="Ask for quote"
                                desc="some text bout the service"
                                active={true}/>
                                
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- Makeup Classes--> */}
            <div id="pricing-item6" className="pricing-tab-content-block tab-pane ">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab6-1">Designing your make-up kit</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab6-2">Blending techniques</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab6-3">Eyebrow shaping</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab6-4">Creating illusion with make-up</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab6-5">Natural and more dramatic applications</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab6-6">Every Day Woman</a></li>
                            </ul>
                            <div className="tab-content p-l50">
                            
                            <ServiceTabContent 
                                id="pricing-tab6-1"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Designing your make-up kit"
                                price="Ask for quote"
                                desc="some text bout the service"
                                active={true}/>
                            
                            <ServiceTabContent 
                                id="pricing-tab6-2"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Blending techniques"
                                price="Ask for quote"
                                desc="some text bout the service"
                                active={false}/>
                            
                            <ServiceTabContent 
                                id="pricing-tab6-3"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Eyebrow shaping"
                                price="Ask for quote"
                                desc="some text bout the service"
                                active={false}/>
                            
                            <ServiceTabContent 
                                id="pricing-tab6-4"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Creating illusion with make-up"
                                price="Ask for quote"
                                desc="some text bout the service"
                                active={false}/>

                            <ServiceTabContent 
                                id="pricing-tab6-5"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Natural and more dramatic applications"
                                price="Ask for quote"
                                desc="some text bout the service"
                                active={false}/>

                            <ServiceTabContent 
                                id="pricing-tab6-6"
                                img={require('../../Images/our-services/s1.jpg')}
                                heading="Every Day Woman"
                                price="Ask for quote"
                                desc="some text bout the service"
                                active={false}/>
                                
                            </div>
                        </div>
                    </div>
            </div>            
        </div>
        
    </div>
</div>
}


export default Services