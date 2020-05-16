import React, { useEffect, useRef } from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { TimelineLite, Power3, gsap, CSSPlugin } from 'gsap/all';



gsap.registerPlugin(CSSPlugin);

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

    var tl = new TimelineLite({repeat : 1000 });


     
    let testimonialDiv1 = useRef(null);
    let testimonialDiv2 = useRef(null);
    let testimonialDiv3 = useRef(null);

  



    useEffect(()=>   {
      
        tl.to
        (testimonialDiv1, 0, { opacity: 1 })
        .to(testimonialDiv1, 10, { x: 0} )
        .to(testimonialDiv1, 0.5, { opacity: 0, ease: Power3.ease }, "one")

        .to(testimonialDiv2, 0.5, { opacity: 1, ease: Power3.ease }, "one+=0.2")
        .to(testimonialDiv2, 10, {})
        .to(testimonialDiv2, 0.5, {opacity: 0, ease: Power3.ease}, "two")

        .to(testimonialDiv3, 0.5, { opacity: 1, ease: Power3.ease }, "two+=0.2")
        .to(testimonialDiv3, 10, {})
        .to(testimonialDiv3, 0.5, {opacity: 0, ease: Power3.ease}, "three")



    })

 
        
        

    return (
        <div>
             <div className="testimonial">
                
             <h5>What people are saying about Yami</h5>  



                <div className="test-content">

                    <div className="testimonial-quote">

                        <div className="quote">
                            <IconContext.Provider value={{ className : "icon-quote", size : "1em", color: "#DDDDDD" }}>
                        <div className="">
                            <FaQuoteLeft  />
                        </div>
                        </IconContext.Provider>
                        </div>
            
                    </div>


                <div className="testimonial-container">

                    <ul>
                        <li ref = {div => testimonialDiv1 = div}>
                            <div  className="t-div t1"> 
                                <div className="testimonial-copy">
                                    <p>{testimonials[0].comment}</p>
                                </div>
                                <div className="person">
                                <p><span className="name">{testimonials[0].name}</span> - <span className="location">{testimonials[0].location}</span></p>
                                </div>
                            </div>
                        </li>

                        <li ref = {div => testimonialDiv2 = div}>
                            <div  className="t-div t2" >
                                <div className="testimonial-copy">
                                    <p>{testimonials[1].comment}</p>
                                </div>
                                <div className="person">
                                <p><span className="name">{testimonials[1].name}</span> - <span className="location">{testimonials[1].location}</span></p>
                                </div>
                            </div>
                        </li>

                        <li ref = {div => testimonialDiv3 = div}>
                            <div  className="t-div t3" >
                                <div className="testimonial-copy">
                                    <p>{testimonials[2].comment}</p>
                                </div>
                                <div className="person">
                                <p><span className="name">{testimonials[2].name}</span> - <span className="location">{testimonials[2].location}</span></p>
                                </div>
                            </div>
                        </li>
                    </ul>


                    
                </div>

                </div>
                

                

                
            </div>
        </div>
    )
} 
     





 

export default Testimonials
