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
        paragraph="Purple Rose MUA is experts in the beauty and make-up industry see our wide variety of services" />
        <div className="section-content">
            <div className="owl-carousel our-pricing-carousel owl-btn-vertical-center owl-btn-hover nav nav-tabs">
                
                <SeviceBlock flaticon="flaticon-eye" title="Makeup" target="#pricing-item1" blockClassName="item active-arrow active" />
                <SeviceBlock flaticon="flaticon-female-hairs" target="#pricing-item2" title="Hair" />
                <SeviceBlock flaticon="flaticon-shaving" target="#pricing-item3" title="Threading & Waxing" />
                <SeviceBlock flaticon="flaticon-eyelashes" target="#pricing-item4" title="Tinting & Lash Lifting" />
                <SeviceBlock flaticon="flaticon-brushes" title="Special Effects" target="#pricing-item5"/>      
                <SeviceBlock flaticon="flaticon-nail" title="Nails" target="#pricing-item6"/>   
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
                                img={require('../../Images/our-services/makeup/PurpleRose_Makeup_NaturalGlowUp.jpg')}
                                heading="Natural Glow Up"
                                price="R700"
                                desc="Natural make-up will enhance your deatures, rather than disquise flaws. It's a simple approach that focuseson a few key areas - skin, eyes and lips and bring out your best in a suble way."
                                active={true}/>
                                
                                <ServiceTabContent 
                                id="pricing-tab1-2"
                                img={require('../../Images/our-services/makeup/PurpleRose_Makeup_GlowUp.jpg')}
                                heading="Glow Up"
                                price="R800"
                                desc="A glow up make-up look will change your entire aura. By adding some glow, booting your brows and smoky eyes. While toping it with colourfull lips and amping up the volume. Finally setting your look for `just applied` makeup all day and night look."
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab1-3"
                                img={require('../../Images/our-services/makeup/PurpleRose_Makeup_Bridal.jpg')}
                                heading="Happily Ever After"
                                price="R1 400"
                                desc="Bridal make-up is usually natural, gorgeous and glowing, with soft defintion on the eyes and a natural lip. It is an essential part pf the wedding planning process to design the prefect look for your special day."
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab1-4"
                                img={require('../../Images/our-services/makeup/PurpleRose_Makeup_Bridesmaid.jpg')}
                                heading="Bridesmaid"
                                price="R800"
                                desc=""
                                active={false}/>
                                
                                <ServiceTabContent 
                                id="pricing-tab1-5"
                                img={require('../../Images/our-services/makeup/PurpleRose_Makeup_Flowergirl.jpeg')}
                                heading="Flower Girl (under 10)"
                                price="R120"
                                desc=""
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
                                img={require('../../Images/our-services/hair/PurpleRose_Hairstyle_Bride.jpg')}
                                heading="Bride"
                                price="R1 500"
                                desc=""
                                active={true}/>

                            <ServiceTabContent 
                                id="pricing-tab2-2"
                                img={require('../../Images/our-services/hair/PurpleRose_Hairstyle_BridelTrail.jpg')}
                                heading="Bride Trail"
                                price="R750"
                                desc=""
                                active={false}/>

                            <ServiceTabContent 
                                id="pricing-tab2-3"
                                img={require('../../Images/our-services/hair/PurpleRose_Hairstyle_Bridesmaid.jpg')}
                                heading="Additional hair"
                                price="R700 (per head)"
                                desc=""
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
                                img={require('../../Images/our-services/waxing/PurpleRose_Waxing_EyeBrows.jpg')}
                                heading="Brows"
                                price="R95"
                                desc=""
                                active={true}/>

                                <ServiceTabContent 
                                id="pricing-tab3-2"
                                img={require('../../Images/our-services/waxing/PurpleRose_Threading_Lips.jpg')}
                                heading="Lip"
                                price="R65"
                                desc=""
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab3-3"
                                img={require('../../Images/our-services/waxing/PurpleRose_Threading_Chin.jpg')}
                                heading="Chin"
                                price="R65"
                                desc=""
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab3-4"
                                img={require('../../Images/our-services/waxing/PurpleRose_Threading_Sides.jpg')}
                                heading="Sides"
                                price="R85"
                                desc=""
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab3-5"
                                img={require('../../Images/our-services/waxing/PurpleRose_Threading_Fullface.jpg')}
                                heading="Full Face"
                                price="R250"
                                desc=""
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab3-6"
                                img={require('../../Images/our-services/waxing/PurpleRose_Waxing_Nostrils.jpg')}
                                heading="Nostril Waxing"
                                price="R65"
                                desc=""
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
                                img={require('../../Images/our-services/tinting/PurpleRose_Tinting_Lashtint.jpg')}
                                heading="Lash Tint"
                                price="R80"
                                desc=""
                                active={true}/>

                                <ServiceTabContent 
                                id="pricing-tab4-2"
                                img={require('../../Images/our-services/tinting/PurpleRose_Tinting_TintBrow.jpg')}
                                heading="Brow Tint"
                                price="R60"
                                desc=""
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab4-3"
                                img={require('../../Images/our-services/tinting/PurpleRose_Lifting_Lashlifting.jpg')}
                                heading="Lash Lifting"
                                price="R420"
                                desc=""
                                active={false}/>

                                <ServiceTabContent 
                                id="pricing-tab4-4"
                                img={require('../../Images/our-services/tinting/PurpleRose_Lifting_Lashlifting_tinting.jpg')}
                                heading="Lash Lifting with Lash Tint"
                                price="R480"
                                desc=""
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
                                img={require('../../Images/our-services/specialeffects/PurpleRose_Facepaint_Skull.jpg')}
                                heading="Facepaint"
                                price="Ask for quote"
                                desc=""
                                active={true}/>

                            <ServiceTabContent 
                                id="pricing-tab5-2"
                                img={require('../../Images/our-services/specialeffects/PurpleRoseMUA_SpecialEffects_BulletWounds.jpg')}
                                heading="Bullet wounds"
                                price="Ask for quote"
                                desc=""
                                active={false}/>

                            <ServiceTabContent 
                                id="pricing-tab5-3"
                                img={require('../../Images/our-services/specialeffects/PurpleRoseMUA_SpecialEffects_Scarring.jpg')}
                                heading="Scarring"
                                price="Ask for quote"
                                desc=""
                                active={false}/>
                                
                            </div>
                        </div>
                    </div>
            </div> 
             {/* <!-- Hair --> */}
             <div id="pricing-item6" className="pricing-tab-content-block tab-pane">
                <div className="section-content p-t50">
                        {/* <!-- TABS DEFAULT NAV LEFT --> */}
                        <div className="wt-tabs vertical bg-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#pricing-tab6-1">Acrylic overlay</a></li>
                                <li><a data-toggle="tab" href="#pricing-tab6-2">Acrylic sculpting</a></li>
                            </ul>
                            <div className="tab-content p-l50">
                            
                            <ServiceTabContent 
                                id="pricing-tab6-1"
                                img={require('../../Images/our-services/nails/PurpleRose_AcrylicSculpting.jpg')}
                                heading="Acrylic sculpting"
                                price="R300"
                                desc=""
                                active={true}/>

                            <ServiceTabContent 
                                id="pricing-tab6-2"
                                img={require('../../Images/our-services/nails/PurpleRose_AcrylicSculpting.jpg')}
                                heading="Acrylic overlay"
                                price="R300"
                                desc=""
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