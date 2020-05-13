import React from 'react'
import Loader from './Loader'

function SubscribeForm(props) {



    return (

        <div>
            <form onSubmit={props.handleOnSubmit}>
                <div className="form-row">
                    <div className="form-column field">
                    
                            <label htmlFor="name"></label>
                            <input 
                            type="text" 
                            name="email" 
                            placeholder="Your email address"
                            id="email"
                            value={props.email}
                            onChange={props.handleOnChange} 
                            /> 
                    </div>
                    <div className="form-column btn">
                        <button 
                        type="submit"
                        className="btn-submit"
                        >
                            {
                                props.loading === true ? (<Loader />) : 'Submit ' 
                            }
                        
                            </button>
                    </div>
                </div>
            </form>

            <div className="form-row">
                <div className="form-message">

                </div>
            </div>
        </div>
    )
}

export default SubscribeForm
