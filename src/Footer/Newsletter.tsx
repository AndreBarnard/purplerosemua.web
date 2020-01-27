import * as React from 'react';

export interface IAppProps {
}

function Newsletter() {

    return <div className="widget widget_newsletter">
    <h4 className="widget-title">Newsletter</h4>
    <div className="newsletter-bx">
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
}


export default Newsletter