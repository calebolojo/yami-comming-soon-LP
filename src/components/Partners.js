import React from 'react'
import Paylink from '../images/paylink-logo.png';
import Flutterwave from '../images/flutterwave-logo.png';
import Cbn from '../images/cbn-logo.png';
import Interswitch from '../images/interswitch-logo.png';
import Paga from '../images/paga-logo.png';
import Remita from '../images/remita-logo.png';

function Partners() {
    return (
        <div className="container">
            <div className="row title-row">
                <div className="col">
                    <h5>Our reliable partners</h5>
                </div>
            </div>
            <div className="row logos-row">

                <div className="logo-col logo-1">
                    <img src={Paylink} alt="Paylink" width="117" />
                </div>

                <div className="logo-col logo-2">
                    <img src={Flutterwave} alt="Flutterwave" width="175" />
                </div>

                <div className="logo-col logo-3">
                    <img src={Remita} alt="Remita" width="98" />
                </div>

                <div className="logo-col logo-4">
                    <img src={Interswitch} alt="Interswitch" width="140" />
                </div>

                <div className="logo-col logo-5">
                    <img src={Paga} alt="Paga" width="140" />
                </div>

                
                <div className="logo-col logo-6">
                    <img src={Cbn} alt="CBN" width="44" />
                </div>


            </div>
        </div>
    )
}

export default Partners
