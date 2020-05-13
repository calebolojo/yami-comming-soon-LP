import React, { Component } from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { TimelineLite } from 'gsap';

export class Testimonials extends Component {

    constructor(props)
    {
        super(props);

        this.tl = null;
        this.testimonialDiv1 = null;
        this.testimonialDiv2 = null;
        this.testimonialDiv3 = null;
    }

    componentDidMount()
    {
        this.tl = new TimelineLite({repeat : 100});
        this.tl
        .from(this.testimonialDiv1, 0.25, { opacity : 1, x : -700} )
        .to(this.testimonialDiv1, 5, { autoAlpha : 1,  x : 0 })
        .to(this.testimonialDiv1, 0.25, { x : 700, display : 'none'}, "one")

        .from(this.testimonialDiv2, 0.25, { opacity : 1, x : -700}, "one-=0.25")
        .to(this.testimonialDiv2, 5, { autoAlpha : 1, display : 'block',  x : 0 })
        .to(this.testimonialDiv2, 0.25, { x : 700, display : 'none' }, "two")

        .from(this.testimonialDiv3, 0.25, { opacity : 1, x : -700 }, "two-=0.25")
        .to(this.testimonialDiv3, 5, { autoAlpha : 1, display : 'block',  x : 0 })
        .to(this.testimonialDiv3, 0.25, { x : 700, display : 'none' })
    }
        
        
render()
{
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


                <div className="testimonial-container">
                    <div 
                    className="test-row t1"
                    ref = {div => this.testimonialDiv1 = div}
                    >
                         <div className="testimonial-copy">
                           <p>Dear Yami Partners, I'm happy to testify that since I joined Yami, my business has not remained the same. Things have been looking up. My customer base has continued to grow as there's always funds to pay and/or transfer on their behalf.</p>
                        </div>
                        <div className="person">
                            
                                <p><span className="name">Pastor Abiodun Paul</span> - <span className="location">Abeokuta, Ogun State</span></p>
                  
                        
                        </div>
                    </div>

                    <div 
                    className="test-row t2"
                    ref = {div => this.testimonialDiv2 = div}
                    >
                         <div className="testimonial-copy">
                           <p> Yami relieved me of my business financial stress. When I thought I couldn't be in business again, Yami came to my world and my money agency business came alive again. Long life Yami, long live ambamm.</p>
                        </div>
                        <div className="person">
                          
                            <p><span className="name">Kehinde Esther</span> - <span className="location">Badagry, Lagos</span></p>
                        </div>
                    </div>


                    <div 
                    className="test-row t3"
                    ref = {div => this.testimonialDiv3 = div}
                    >
                         <div className="testimonial-copy">
                            <p>Waaw... Yami has been wonderfully amazing cuz it has really propelled and improved my mobile money business over the past few months. I'm so grateful to Yami being part of their loan beneficiaries.</p>
                            
                        </div>
                        <div className="person">
                         
                            <p><span className="name">Adewunmi Olayiwola Michael </span>
                            - <span className="location">Lagos</span></p>
                        </div>
                    </div>
                    
                </div>

                </div>
                

                

                
            </div>
        </div>
    )
} 
          }
    

 

export default Testimonials
