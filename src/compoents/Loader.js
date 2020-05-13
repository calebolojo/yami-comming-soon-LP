import React, { Component } from 'react';
import Lottie from 'react-lottie';
import loader from '../images/loader.json'


class Loader extends Component  {


    render()
    {

        const defaultOptions = {
            loop : true,
            autoplay : true,
            animationData : loader,
            rendererSettings : {
                preserveAspectRatio : 'xMidYMid slice'
            }
        };
       return (

       
            <Lottie 
                options = {defaultOptions}
                height={32}
                width={32}
            />
    
    
    ) 
    }
    
}

export default Loader
