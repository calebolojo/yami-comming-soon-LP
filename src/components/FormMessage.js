import React, { Component } from 'react'
import { FiCheckCircle } from 'react-icons/fi';
import { FiAlertTriangle } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { TimelineLite } from 'gsap/all';


export class FormMessage extends Component {

    constructor(props)
    {
        super(props);
        this.ErrorAlertBox = null;
        this.SuccessAlertBox = null;
        this.myTween = null
    }

    componentDidMount()
    {
        this.myTween = new TimelineLite();
        this.myTween
        .to(this.alertBox, 0.3, { opacity: 1, y : 16 })

    }



    render() {

        var show;

        if((this.props.status === "valid") && (this.props.success === true))
        {
           show = <SuccessMeassge />
        }

        else if(this.props.status === 'invalid') 
        {
          show = <ErrorMessage message="Oops! Email invalid. Try again" />
              
        }
        else if( this.props.status === "empty")
        {
           show = <ErrorMessage message="An email address is required" />
        }
        
     
           return(
            <div  className= "msg-content" ref={div => this.alertBox = div}>
               {show}
            </div>
           )  
               
    
    
    }
}

const SuccessMeassge = () =>
{
    return(
   <>
    <div className="msg-icon">
    <IconContext.Provider value={{ color : 'green', size : "1rem" }}>
    <FiCheckCircle  />
    </IconContext.Provider>
    </div>
    <div className="msg success">
    Yes! You will be the first to know when we launch!
    </div>
        </>
    )
}


const ErrorMessage = (props) => {
return(
    <>
    <div className="msg-icon">
    <IconContext.Provider value={{ color : 'red', size : "1rem" }}>
    <FiAlertTriangle  />
    </IconContext.Provider>
    </div>
    <div className="msg error">
    {/* An email address is required */}
    {props.message}
    </div>
    </>
)

}




export default FormMessage



