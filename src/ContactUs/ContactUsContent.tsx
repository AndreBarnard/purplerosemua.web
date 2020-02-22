import * as React from 'react';
import Banner from '../Components/Site/PageBanner';
import Breadcrumb from '../Components/Site/Breadcrumb'
import ContactDetail from './ContactDetail'
import ContactForm from './ContactForm'

export interface IAppProps {
}

function ContactUsContent() {

    const heading = "Contact Us";

    return <div className="page-content">    
    <Banner img={require('../Images/banner/contact-banner.jpg')} heading={heading} />
    <Breadcrumb heading={heading}/>      
   <div className="section-full p-t80 p-b50">
       <div className="container-fluid">
           <ContactDetail />
           <ContactForm />
       </div>
   </div>
</div>
}


export default ContactUsContent