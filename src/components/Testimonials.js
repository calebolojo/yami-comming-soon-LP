import React, { useState, useEffect, useRef } from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { TimelineLite, Power3 } from 'gsap';


const testimonials = [
    {
        comment : "Dear Yami Partners, I'm happy to testify that since I joined Yami, my business has not remained the same. Things have been looking up. My customer base has continued to grow as there's always funds to pay and/or transfer on their behalf.",
        name: "Pastor Abiodun Paul",
        location: "Abeokuta, Ogun State"
    },
    {
        comment: " Yami relieved me of my business financial stress. When I thought I couldn't be in business again, Yami came to my world and my money agency business came alive again. Long life Yami, long live ambamm.",
        name: "Kehinde Esther",
        location: "Badagry, Lagos"
    },
    {
        comment: "Waaw... Yami has been wonderfully amazing cuz it has really propelled and improved my mobile money business over the past few months. I'm so grateful to Yami being part of their loan beneficiaries.",
        name: "Adewunmi Olayiwola Michael",
        location: "Lagos"
}
]



export const Testimonials = () => {

    var tl = new TimelineLite({onComplete : () => {
        tl.reverse();
        tl.restart();
    }});

    const [state, setState] = useState({
        active1 : true,
        active2: false,
        active: false

    })

     
    let testimonialDiv1 = useRef(null);
    let testimonialDiv2 = useRef(null);
    let testimonialDiv3 = useRef(null);
    let testimonialContainer = useRef(null);

  



    useEffect(()=>   {
        tl.to(testimonialDiv1, 0,{ opacity : 1 })
        .to(testimonialDiv1, 5, {})
        .to(testimonialDiv1, 0.1, { opacity : 0}, "one")

        .to(testimonialDiv1, 0.3, {x : -1 * testimonialDiv1.offsetWidth}, "one-=0.3")
        .to(testimonialDiv2, 0.3, {x : -1 * testimonialDiv2.offsetWidth}, "one-=0.3")
        .to(testimonialDiv3, 0.3, {x : -1 * testimonialDiv3.offsetWidth}, "one-=0.3")
 
        .to(testimonialDiv2, 0.1, { opacity : 1})
        .to(testimonialDiv2, 5, {})
        .to(testimonialDiv2, 0.1, { opacity : 0}, "two")

        .to(testimonialDiv1, 0.3, {x : -2 * testimonialDiv1.offsetWidth}, "two-=0.3")
        .to(testimonialDiv2, 0.3, {x : -2 * testimonialDiv2.offsetWidth}, "two-=0.3")
        .to(testimonialDiv3, 0.3, {x : -2 * testimonialDiv3.offsetWidth}, "two-=0.3")


        .to(testimonialDiv3, 0.1, { opacity : 1})
        .to(testimonialDiv3, 5, {})
        .to(testimonialDiv3, 0.1, { opacity : 0}, "three")

        .to(testimonialDiv3, 0, {opacity: 0, x : 2 * testimonialDiv3.offsetWidth}, "three-=0.3")
        .to(testimonialDiv2, 0, {opacity: 0, x : 2 * testimonialDiv2.offsetWidth}, "three-=0.3")
        .to(testimonialDiv1, 0, {opacity: 0, x : 2 * testimonialDiv1.offsetWidth}, "three-=0.3")
       


    } ,[])

 
        
        

    return (
        <div>
             <div className="testimonial">
                
             <h5>What people are saying about Yami</h5>  



                <div className="test-content">

                    <div className="testimonial-quote">

                        <div className="quote">
                            <IconContext.Provider value={{ className : "icon-quote", size : "1.5em", color: "#DDDDDD" }}>
                        <div className="">
                            <FaQuoteLeft  />
                        </div>
                        </IconContext.Provider>
                        </div>
            
                    </div>


                <div 
                className="testimonial-container" 
                ref={div=>testimonialContainer = div}>

                    <div  className="test-row t1 active" ref = {div => testimonialDiv1 = div}>
                         <div className="testimonial-copy">
                             <p>{testimonials[0].comment}</p>
                        </div>
                        <div className="person">
                            <p><span className="name">{testimonials[0].name}</span> - <span className="location">{testimonials[0].location}</span></p>
                        </div>
                    </div>

                    <div  className="test-row t2" ref = {div => testimonialDiv2 = div}>
                         <div className="testimonial-copy">
                             <p>{testimonials[1].comment}</p>
                        </div>
                        <div className="person">
                            <p><span className="name">{testimonials[1].name}</span> - <span className="location">{testimonials[1].location}</span></p>
                        </div>
                    </div>


                    <div  className="test-row t3" ref = {div => testimonialDiv3 = div}>
                         <div className="testimonial-copy">
                             <p>{testimonials[2].comment}</p>
                        </div>
                        <div className="person">
                            <p><span className="name">{testimonials[2].name}</span> - <span className="location">{testimonials[2].location}</span></p>
                        </div>
                    </div>

              

                    
                </div>

                </div>
                

                

                
            </div>
        </div>
    )
} 
     





 

export default Testimonials
