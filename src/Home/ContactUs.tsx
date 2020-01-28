import * as React from 'react';
import bg11 from '../Images/Background/bg-11.jpg';

export interface IAppProps {
}

function ContactUs() {

    return <div className="section-full overlay-wraper bg-parallax" data-stellar-background-ratio="0.2" style={{backgroundImage:`url(${bg11})`}}>
    <div className="overlay-main bg-white opacity-07"></div>
    <div className="container">

            <div className="row conntact-home">
                <div className="col-md-5 col-sm-5 contact-home4-left">
                    <div className="section-content p-tb30 overlay-wraper">
                        <div className="overlay-main bg-primary opacity-09"></div>	
                          <div className="p-a30" style={{zIndex:1, position:`relative`}}>
                            <h3 className="font-weight-400 text-white m-b5">Make an</h3>
                            <h2 className="text-white m-t0"  style={{fontFamily: `Crete Round, serif`}}><i>Appointment</i></h2>
                              <form  className="cons-contact-form2 form-transparent" method="post" action="form-handler2.php">
                                <div className="form-group">
                                    <input name="username" type="text" required className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input name="email" type="email" className="form-control" required placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input name="phone" type="number" className="form-control" required placeholder="Phone" />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" className="form-control" rows={4} placeholder="Message"></textarea>
                                    </div>
                                <button type="submit" className="site-button-secondry radius-sm">
                                  <span className="font-weight-700 inline-block text-uppercase p-lr15">Submit</span> 
                                </button>    
                            </form>
                          </div>                             
                    </div>
                </div>                        
                <div className="col-md-7 col-sm-7 contact-home4-right p-t130 p-b50" >
                    <div className="section-content">
                        <div className="opening-block bdr-5 bdr-primary p-a40 text-right">
                            <a href="services-2.html" className="bg-primary book-now-btn p-tb5 p-lr15 text-uppercase font-16 font-weight-500">All Services</a>
                            <h2 className="text-uppercase  text-secondry m-tb0">Best Services</h2>
                            <span className="font-60 font-weight-600 text-uppercase text-primary">Open Hours</span>
                            <p>If you feel tired and stressed after a working day, we are happy to give you an enjoyable and healthy solution to find your balance again.</p>
                            <div className="clearfix">
                                <ul className="list-unstyled m-b0">
                                    <li><div className="clearfix"><span className="opening-date">Mon-Fri:</span><span className="opening-time">9 AM - 6 PM</span></div></li>
                                    <li><div className="clearfix"><span className="opening-date">Saturday:</span> <span className="opening-time">9 AM- 6 PM</span></div></li>
                                    <li><div className="clearfix"><span className="opening-date">Sunday:</span> <span className="opening-time">Closed</span></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>                               
                </div>
            </div>        
    </div>    
</div> 
}


export default ContactUs