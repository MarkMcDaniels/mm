import React, { Component } from 'react';
import './Contact.css';

import axios from 'axios';

import Input from '../../../containers/Input/Input';


class Contact extends Component {
    
    state = {
        email: '',
        message: "",
        contact: {
            height: '100%'
        },
        opacity: '0',
        emailValidated: false,
        emailError: false,
        messageEscaped: false,
        messageSent: false

    }


    componentDidMount(){
        
        this.setState({
            opacity: '1'
        });
        
        this.getComponentHeight();
        window.addEventListener('resize', this.getComponentHeight.bind(this));
        //window.onresize = this.getComponentHeight.bind(this);
    }

    getComponentHeight = () => {
        const curWidth = document.getElementById('mm_main').clientWidth;


        // Looks strange, but I'm finding width by ratio for the screen with total width, and then getting the height by ratio to the screen width. They happen to be the same numerically.
        let newHeight = (curWidth / 1.85) / 1.91;
        
        // Sets new height dynamically
        const url = window.location.pathname;
        
        // React's lifecycle was still holding refrences to the components variables of the link before the current route.
        if(url === '/contact' && window.innerWidth > 649){
        const contact = document.getElementById('contact_screen');
        contact.style.height = String(newHeight) + "px";
        } else {
            newHeight = '100%';
        }

        this.setState({
            contact: {
                height: newHeight
            }
        });
    };

    onEmailChangeHandler = (event) => {
        
        this.setState({
            email: event.target.value
        });
        
    };

    onMessageChangeHandler = (event) => {
        // Character escape list.
        const escapeList = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2F;',
            '|': '&#124',
            '!': '&#33'
        };

        const escape = /[&<>"'/\|!]/g;
        

        const escaped = event.target.value.replace(escape, match => {
            
            return escapeList[match];
        });

        
        this.setState({
            message: escaped
        });
    };

    sumbitHandler = (event) => {
        
        const email = this.state.email;
        const message = this.state.message;

        // Matches an email address. 
        const reg = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$');
        const emailValidated = reg.test(email);
        if(emailValidated && this.state.message !== ""){
            this.setState({
                emailValidated: emailValidated,
                emailError: false
            });

            const contact = {
                email: email,
                message: message
            };

           
    
            axios.post("https://portfolio-f7cf9.firebaseio.com/message.json", contact)
            .then(res => {
                this.setState({
                    messageSent: true
                });

                console.log('[message sent]' + this.state.messageSent);
            })
            .catch(err => {
                console.log(err);
            });
        } else {

            this.setState({
                emailError: true
            });
        }

                  

        

    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.getComponentHeight.bind(this));
    }
    

    render(){

        let err = null;
        if(this.state.emailError){
            err = <i style={{'color': 'red'}}>--INVALID EMAIL ADDRESS!</i>;
        }

        let styles = {
            'height': this.state.contact.height,
            'opacity': this.state.opacity,
            'backgroundColor': 'white'
        };

        let pStyle = null;
        let mLabel = null;
        let mButton = null;

        if(window.innerWidth < 649){
            styles = {
                'width': '100%',
                'height': '100%',
                'backgroundColor': 'white',
                'overflow': 'auto'
            };

            pStyle = {
                'fontSize': '1.5rem',
                'textAlign': 'center'
            };

            mLabel = {
                'fontSize': '0.8rem'
            };

            mButton = {
                'fontSize': '0.8rem'
            }
        }
        
        return (
            <div id="contact_screen" className="Contact" style={styles}>
                <p style={pStyle}>Contact Me</p>
                <div className="form">
                    <label style={mLabel}><i style={{'color': 'red'}}>*</i> Email:{err}</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.onEmailChangeHandler} />
                    <label style={mLabel}><i style={{'color': 'red'}}>*</i> Message:</label>
                    <textarea onChange={this.onMessageChangeHandler} ></textarea>
                    <button style={mButton} type="submit" onClick={this.sumbitHandler}>Submit</button>
                </div>
                
            </div>
        );
    }

    
}

export default Contact;