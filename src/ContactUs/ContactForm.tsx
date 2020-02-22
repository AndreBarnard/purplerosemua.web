import * as React from 'react';
import SectionHeadSmall from '../Components/Site/SectionHeadSmall'

export interface IAppProps {
}

function ContactForm() {

    return <div className="wt-box col-md-6">
    <SectionHeadSmall heading="Contact Form " />     
    <form className="cons-contact-form" method="post" action="form-handler.php">    
        <div className="row">        
            <div className="col-md-6">
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input name="username" type="text" required className="form-control" placeholder="Name" />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                        <input name="email" type="text" className="form-control" required placeholder="Email" />
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon v-align-m"><i className="fa fa-pencil"></i></span>
                        <textarea name="message" rows={4} className="form-control Message" required></textarea>
                    </div>
                </div>
            </div>
            <div className="col-md-12 text-right">
                <button name="submit" type="submit" value="Submit" className="site-button  m-r15">Submit  <i className="fa fa-angle-double-right"></i></button>
                <button name="Resat" type="reset" value="Reset"  className="site-button " >Reset  <i className="fa fa-angle-double-right"></i></button>
            </div>
        </div>
    </form>    
</div>    
}

export default ContactForm