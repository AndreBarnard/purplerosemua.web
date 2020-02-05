import * as React from 'react';
import SectionHead from '../Components/Site/SectionHead';
import Item from './ServicesContentItem';
import OurOffer from './OurOffer';
import WhyItsBest from './WhyItsBest';

export interface IProps {
}

function ServicesContentRight(props : IProps) {
    return <div className="col-md-9 col-sm-9 p-tb10">
    {/* <!-- BLOG POST CAROUSEL --> */}
 
  {/* <!-- SERVICES SITE --> */}
  <div className="p-lr15">
     <div className="section-head">
         <SectionHead heading="Services Sites" />    
     </div>                        
     <div className="section-content">
         <div className="owl-carousel blog-carousel  owl-btn-vertical-center">         
            <Item
                img={require("../Images/our-work/pic1.jpg")}
                heading="Wedding"
                day="17 Mar"
                year="2017"
                author="Jeanerien Barnard"
                desc="Sample texts"
            />
            <Item
                img={require("../Images/our-work/pic1.jpg")}
                heading="Facepaint"
                day="17 Mar"
                year="2017"
                author="Jeanerien Barnard"
                desc="Sample texts"
            />
            <Item
                img={require("../Images/our-work/pic1.jpg")}
                heading="Stage"
                day="17 Mar"
                year="2017"
                author="Jeanerien Barnard"
                desc="Sample texts"
            />

         </div>
     </div>
     <div className="row">
         <OurOffer />
         <WhyItsBest />          
      </div>
  </div>
</div>
}

export default ServicesContentRight