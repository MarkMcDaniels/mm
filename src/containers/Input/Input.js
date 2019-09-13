import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

    
    render(){
        return(
            <div className="Input">
                <label>Email:</label>
                <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <label>Message:</label>
                <textarea></textarea>
            </div>
        );
    }


}

export default Input;