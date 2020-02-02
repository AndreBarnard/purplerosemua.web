import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import FooterSectionHeading from './FooterSectionHeading';

export interface IAppProps {
}

function Newsletter() {

    return <div className="widget widget_newsletter">
    <FooterSectionHeading heading="Newsletter" />
    <div className="newsletter-bx">
        <form role="search" method="post">
            <div className="input-group">
            <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
            <span className="input-group-btn">
                <button type="submit" className="site-button"><FontAwesomeIcon icon={faPaperPlane} /></button>
            </span>
        </div>
         </form>
    </div>
</div>
}


export default Newsletter