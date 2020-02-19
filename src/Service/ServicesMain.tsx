import * as React from 'react';
import ServiceItem from './ServiceItem';
import ServicePagination from './ServicePagination';

export interface IProps {
}

function ServicesMain(props : IProps) {
    return  <div className="section-full p-t80 p-b50">
    <div className="bg-service-team">
        <div className="container">
            <div className="section-content m-b50 ">
                <div className="row">
                    <ServiceItem 
                    name="Happily Ever After"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_BridalMakeUp.jpg")}
                    desc="Bridal make-up is usually natural, gorgeous and glowing, with soft defintion on the eyes and a natural lip. It is an essential part pf the wedding planning process to design the prefect look for your special day."
                    />
                   <ServiceItem 
                    name="Natural Glow Up"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_NatualGlowup.jpg")}
                    desc="Natural make-up will enhance your deatures, rather than disquise flaws. It's a simple approach that focuseson a few key areas - skin, eyes and lips and bring out your best in a suble way."
                    />
                    <ServiceItem 
                    name="Glow Up"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_Glowup.jpg")}
                    desc="A glow up make-up look will change your entire aura. By adding some glow, booting your brows and smoky eyes. While toping it with colourfull lips and amping up the volume. Finally setting your look for `just applied` makeup all day and night look."
                    />
                    <ServiceItem 
                    name="Threading and Waxing"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_Waxing.jpg")}
                    desc="Threading is simply using cotton which is twisted in the centre to remove unwanted hair from the root. Waxing removes hair from the root by using a sticky substance, to adhere to body hair, and then removing this covering and pulling out the hair from the follicle."
                    />
                   <ServiceItem 
                    name="Tinting"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_Tinting.jpg")}
                    desc="Tinting involves carefull dying the lashes/brows with high quality tints to givethem a natural, lusious, darker apperance. Many different eyelash tint colours ( including blues, browns, blacks and greys ) are available so we can compliment the skin and hair colouring prefectly."
                    />
                    <ServiceItem 
                    name="Lash Lifting"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_LashLifting.jpg")}
                    desc="Lash lifting is one of the easiest and fastest ways to brighten and lift the entire face. Its a stunning alternative to eyelash extensions and is on of the essential treatments chosen by many makeup artist for giving that wide-eyed look to your natural lash."/>
                    <ServiceItem 
                    name="Hair Styling"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_HairStyling.jpg")}
                    desc="For short and sharp cuts, dignified updo styles, or long and luscious locks for your wedding, fashion shoot, or commercial – we’re experienced with all things hair."
                    />
                    <ServiceItem 
                    name="Special Effects"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_SpecailEffects.jpg")}
                    desc="Special Effects Makeup can be defined as the use of prosthetic sculpting, molding, casting and painting to create advanced cosmetic effects.It is mostly popular in TV shows, theater, movies and even at Holloween"
                    />
                    <ServiceItem 
                    name="Facepaint"
                    img={require("../Images/our-work/PurpleRoseMUA_CapeTown_Facepainting.jpg")}
                    desc="Face painting is the art of applying paint to a person's skin. Face painting is frequently composed of small decorative images applied to the face of a person although hands, arms and shoulders are popular locations."
                    />
                    
                </div>
            </div>
                  
           {/* <ServicePagination /> */}
        </div>
    </div>
 </div>
}

export default ServicesMain