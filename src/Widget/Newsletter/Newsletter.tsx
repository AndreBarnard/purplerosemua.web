import * as React from 'react';

export interface IProps {
}

function Newsletter(props : IProps) {
    return <div className="widget widget_newsletter-2 bg-white  ">
    <h4 className="widget-title">Newsletter</h4>
    <div className="newsletter-bx p-a30">
        <div className="newsletter-icon">
            <i className="fa fa-envelope-o"></i>
        </div>
        
        <div className="newsletter-content">
            <i>Enter your e-mail and subscribe to our newsletter. Sit amet of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis</i>
         </div>
         <div className="m-t20">
            <form role="search" method="post">
            <div className="input-group">
                <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                <span className="input-group-btn">
                    <button type="submit" className="site-button"><i className="fa fa-paper-plane-o"></i></button>
                </span>
            </div>
        </form>
        </div>
    </div>
</div>  
}

export default Newsletter