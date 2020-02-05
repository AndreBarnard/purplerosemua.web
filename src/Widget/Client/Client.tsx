import * as React from 'react';

export interface IProps {
}

function Client(props : IProps) {
    return <div className="widget">
    <h4 className="widget-title">Our Client</h4>
    <div className="owl-carousel widget-client p-t10">
    
        {/* <!-- COLUMNS 1 -->  */}
        <div className="item">
            <div className="ow-client-logo">
                <div className="client-logo wt-img-effect on-color">
                    <a href="#"><img src="images/client-logo/logo1.png" alt="" /></a>
                </div>
            </div>
        </div>
        {/* <!-- COLUMNS 2 -->  */}
        <div className="item">
            <div className="ow-client-logo">
                <div className="client-logo wt-img-effect on-color">
                    <a href="#"><img src="images/client-logo/logo2.png" alt="" /></a>
                </div>
            </div>
        </div>
        {/* <!-- COLUMNS 3 -->  */}
        <div className="item">
            <div className="ow-client-logo">
                <div className="client-logo wt-img-effect on-color">
                    <a href="#"><img src="images/client-logo/logo3.png" alt="" /></a>
                </div>
            </div>
        </div>

    </div>
</div> 
}

export default Client