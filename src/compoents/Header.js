import React from 'react';
import { Link} from 'react-router-dom';
import Logo from '../images/yami-logo.svg';

function Header() {
    return (
   
            <div className="container header-container">
                
                <div className="row">

                    <div className="logo">
                        <Link to="/">
                        <img src={Logo} alt="yami" width="120" />
                        </Link>
                    </div>

                    <div className="nav"> info@yami.ng</div>

        
                </div>
            </div>
             

    )
}

export default Header
