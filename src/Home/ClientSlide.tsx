import * as React from 'react';
import bg7 from '../Images/Background/bg-7.png';

export interface IAppProps {
}

function ClientSlide() {

    return <div className="section-full p-t50 p-b10 overlay-wraper pr-bg-color bg-repeat" style={{backgroundImage:`url(${bg7})`}}>
    <div className="container">
        
        {/* <!-- IMAGE CAROUSEL START --> */}
        <div className="section-content">
            <div className="owl-carousel client-logo-carousel">
            
                {/* <!-- COLUMNS 1 -->  */}
                <div className="item">
                    <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                            <a href="javascript:;"><img src={require('../Images/client-logo/logo1.png')} alt="" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- COLUMNS 2 -->  */}
                <div className="item">
                    <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                            <a href="javascript:;"><img src={require('../Images/client-logo/logo2.png')} alt="" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- COLUMNS 3 -->  */}
                <div className="item">
                    <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                            <a href="javascript:;"><img src={require('../Images/client-logo/logo3.png')} alt="" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- COLUMNS 4 -->  */}
                <div className="item">
                    <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                            <a href="javascript:;"><img src={require('../Images/client-logo/logo4.png')} alt="" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- COLUMNS 5 -->  */}
                <div className="item">
                    <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                            <a href="javascript:;"><img src={require('../Images/client-logo/logo5.png')} alt="" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- COLUMNS 6 -->  */}
                <div className="item">
                    <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                            <a href="javascript:;"><img src={require('../Images/client-logo/logo6.png')} alt="" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- COLUMNS 7 -->  */}
                <div className="item">
                    <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                            <a href="javascript:;"><img src={require('../Images/client-logo/logo7.png')} alt="" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- COLUMNS 8 -->  */}
                <div className="item">
                    <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                            <a href="javascript:;"><img src={require('../Images/client-logo/logo8.png')} alt="" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- COLUMNS 9 -->  */}
                <div className="item">
                    <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                            <a href="javascript:;"><img src={require('../Images/client-logo/logo9.png')} alt="" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- COLUMNS 10 -->  */}
                <div className="item">
                    <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                            <a href="javascript:;"><img src={require('../Images/client-logo/logo10.png')} alt="" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- COLUMNS 11 -->  */}
                <div className="item">
                    <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                            <a href="javascript:;"><img src={require('../Images/client-logo/logo11.png')} alt="" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- COLUMNS 12 -->  */}
                <div className="item">
                    <div className="ow-client-logo">
                        <div className="client-logo wt-img-effect on-color">
                            <a href="javascript:;"><img src={require('../Images/client-logo/logo12.png')} alt="" /></a>
                        </div>
                    </div>
                </div>                        
            
            </div>
        </div>
        {/* <!-- IMAGE CAROUSEL START --> */}
    </div>
</div>
}


export default ClientSlide