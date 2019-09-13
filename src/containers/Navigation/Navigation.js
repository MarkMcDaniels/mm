import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import '../../components/UI/Button/Button.css';
import './Navigation.css';

class Navigation extends Component {
    render(){


        let mobileStyles = {
            'margin' : '0px',
            'padding': '0px'
        };

        let buttons = (<div style={this.props.styles}>
            <Button styles={this.props.projectButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
            <Button styles={this.props.linkedinButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
            <Button styles={this.props.homeButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
            <Button styles={this.props.gitButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
            <Button styles={this.props.codepenButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
            <Button styles={this.props.contactButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
            <Button styles={this.props.cvButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
        </div>);

        if(this.props.mobile){
            buttons = (<div className="Mobile" style={this.props.style}>
                <Button styles={this.props.projectButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
                <Button styles={this.props.linkedinButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
                <Button styles={this.props.homeButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
                <Button styles={this.props.gitButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
                <Button styles={this.props.codepenButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
                <Button styles={this.props.contactButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
                <Button styles={this.props.cvButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
            </div>);
        }

        return (
            <React.Fragment>
                {buttons}
            </React.Fragment>
        );
    }
}

export default Navigation;