import React, { Component } from 'react'
import Header from './Header';
// import { Link} from 'react-router-dom';
import { TimelineLite } from 'gsap/all';

import Testimonials from './Testimonials';
import SubscribeForm from './SubscribeForm';
import FormMessage from './FormMessage';
import Partners from '../compoents/Partners';
import Footer from '../compoents/Footer';
import Man from '../images/yami-man.png';
import AmtFigure from './AmtFigure';


export class Index extends Component {

    constructor(props) {
        super(props)

        this.state = 
        {
            email : '',
            status : '',
            success : false,
            loading : true
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.tl = null;
        this.phline = null;
        this.description = null;

    }


    checkEmail(email)
    {
        var regex = /\S+@\S+\.\S+/;
        return regex.test(email)
    }

    handleOnSubmit(e)
    {
        e.preventDefault();

        if(this.state.email !== '')
        {
            // validate email
            this.checkEmail(this.state.email) ?
            this.setState({ status : 'valid'}) :
            this.setState({ status : 'invalid'})
        }
         if(this.state.email === '')
        {
           this.setState({
               status : 'empty'
           })
        }

        if(this.checkEmail(this.state.email) === true && this.state.status === 'valid')
        {
            this.setState( { loading : true } )
            // send email to mailchimp
            const data = {
                members : 
                [
                    {email_address : this.state.email, status : 'subscribed'}
                ]
            }
            const postData = JSON.stringify(data)

            fetch(`https://cors-anywhere.herokuapp.com/https://us8.api.mailchimp.com/3.0/lists/${process.env.REACT_APP_MAILCHIMP_ID}`,
            {
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization : `auth ${process.env.REACT_APP_MAILCHIMP_API_KEY}`
                },
                body : postData
            
            })
            .then(response => response.json())
            .then(data => {
                console.log('success', data)
                this.setState({ 
                    success : true,
                    loading : false
                })
            })
            .catch(error => {
                console.log('Error', error)
            })

            console.log(process.env.REACT_APP_MAILCHIMP_ID, process.env.REACT_APP_MAILCHIMP_API_KEY);
            

               
        }
      
        
    }

    handleOnChange(e)
    {
        e.preventDefault();
        this.setState(
            {
                email : e.target.value
            }
        )
    }


    componentDidMount()
    {
        this.setState({ loading : false })

        this.tl = new TimelineLite();
        this.tl.from(this.phline, 0.5, { opacity : 0,  y : '1.25rem'});
        this.tl.from(this.description, 0.5, { opacity : 0,  y : '1rem'});
    }



    render() {



        return (
            <div id="wrapper">
                <section id="header">
                    <Header />
                </section>
           



            <section id="body">
                <div className="container">
                    <div className="row">

                        <div className="left">
                 
                            <div className="left-content">

                                <div className="page-heading">
                                    <div 
                                    className="ph-line"
                                    ref={div=>this.phline = div}>
                                        <h1>Easy Flexible Business loans</h1>
                                    </div> 
                                    
                                </div>
                           

                            <div 
                            className="description"
                            ref={div=>this.description=div}>
                                <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                          
                            </div>

                            <div className="subscribe">
                                <div className="subscribe-title">
                                    <h6>Like to be added to the waiting list?</h6>
                                </div>
                                <div className="subscribe-form">
                                    
                                    <SubscribeForm 
                                    handleOnChange={this.handleOnChange}
                                    handleOnSubmit={this.handleOnSubmit}
                                    email = { this.state.email }
                                    status = { this.state.status }
                                    loading = { this.state.loading }
                                    />
                                </div>

                                <div className="msg-container">

                                { 
                                    this.state.status !== "" ? 
                                    ( 
                                        <FormMessage 
                                        status = {this.state.status}
                                        success = {this.state.success}
                                        loading = {this.state.loading}
                                        />
                                    ) 
                                    : null
                                }
                               
                                      
                                </div>
                               
                            </div>

                            <div className="loan-disbursed">
                                <div className="total-amt">
                                    <div className="naira">N</div>
                                    <div className="figure">
                                        <AmtFigure 
                                        figure= {300}
                                        />,
                                        <AmtFigure 
                                        figure= {240}
                                        />,
                                        <AmtFigure 
                                        figure= {209}
                                        />
                                        
                                    </div>
                                </div>
                                <div className="desc-copy">
                                    <p>loan processed till date</p>
                                </div>
                            </div>
        
                            
                        </div>
                        </div>




                        <div className="right">
                           

                            <div className="right-section">
                                <div className="yami-man">
                                    <div className="man">
                                        <img src={Man} width="600" className="yami-man-image" alt="" />
                                    </div>
             

                                </div>
                               
                               
                                <Testimonials />
                            </div>
                        </div>

                    </div>
                </div>

            </section>


            <section id="partners">
                <Partners />
            </section>


            <section id="footer">
                <Footer />
            </section>

            </div>
        )
    }
}

export default Index
