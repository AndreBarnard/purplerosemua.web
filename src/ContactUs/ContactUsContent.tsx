import * as React from 'react';

export interface IAppProps {
}

function ContactUsContent() {

    return <div className="page-content">
        
    {/* <!-- BREADCRUMB ROW -->                             */}
   <div className="bg-gray-light p-tb20">
     <div className="container">
           <ul className="wt-breadcrumb breadcrumb-style-2">
               <li><a href="javascript:void(0);"><i className="fa fa-home"></i> Home</a></li>
               <li>Contact 2</li>
           </ul>
       </div>
   </div>
   {/* <!-- BREADCRUMB ROW END -->  */}
    
   {/* <!-- SECTION CONTENT -->  */}
   <div className="section-full p-t80 p-b50">
       <div className="container-fluid">
           <div className="wt-box col-md-6">
               <h4 className="text-uppercase">Contact Detail </h4>
               <div className="wt-separator-outer m-b30">
                  <div className="wt-separator style-icon">
                      <i className="fa fa-leaf text-black"></i>
                      <span className="separator-left bg-primary"></span>
                      <span className="separator-right bg-primary"></span>
                  </div>                            
              </div>
               <div className="row">
               
                   <div className="col-md-6 col-sm-6 m-b30">
                       <div className="wt-icon-box-wraper bx-style-1 p-a15 left clearfix">
                           <div className="wt-icon-box-sm bg-primary">
                               <span className="icon-cell text-white">
                                   <i className="fa fa-phone"></i>
                               </span>
                           </div>
                           <div className="icon-content">
                               <h5 className="wt-tilte text-uppercase">Phone</h5>
                               <p>+91 564 548 4854</p>
                           </div>
                       </div>
                   </div>
                   
                   <div className="col-md-6 col-sm-6 m-b30">
                       <div className="wt-icon-box-wraper bx-style-1 p-a15 left clearfix">
                           <div className="wt-icon-box-sm bg-primary">
                               <span className="icon-cell text-white">
                                   <i className="fa fa-envelope"></i>
                               </span>
                           </div>
                           <div className="icon-content">
                               <h5 className="wt-tilte text-uppercase">Email</h5>
                               <p>demo@gmail.com</p>
                           </div>
                       </div>
                   </div>
                   
                   <div className="col-md-6 col-sm-6 m-b30">
                       <div className="wt-icon-box-wraper bx-style-1 p-a15 left clearfix">
                           <div className="wt-icon-box-sm bg-primary">
                               <span className="icon-cell text-white">
                                   <i className="fa fa-fax"></i>
                               </span>
                           </div>
                           <div className="icon-content">
                               <h5 className="wt-tilte text-uppercase">Fax</h5>
                               <p>+91 564 548 4854</p>
                           </div>
                       </div>
                   </div>
                   
                   <div className="col-md-6 col-sm-6 m-b30">
                       <div className="wt-icon-box-wraper bx-style-1 p-a15 left clearfix">
                           <div className="wt-icon-box-sm bg-primary">
                               <span className="icon-cell text-white">
                                   <i className="fa fa-map-marker"></i>
                               </span>
                           </div>
                           <div className="icon-content">
                               <h5 className="wt-tilte text-uppercase">Address</h5>
                               <p>252 W 43rd St New York, NY</p>
                           </div>
                       </div>
                   </div>
               
               </div>
           </div>
           <div className="wt-box col-md-6">
               <h4 className="text-uppercase">Contact Form </h4>
               <div className="wt-separator-outer m-b30">
                  <div className="wt-separator style-icon">
                      <i className="fa fa-leaf text-black"></i>
                      <span className="separator-left bg-primary"></span>
                      <span className="separator-right bg-primary"></span>
                  </div>                            
               </div>
               
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
       </div>
   </div>
   {/* <!-- SECTION CONTENT END --> */}   
</div>
}


export default ContactUsContent