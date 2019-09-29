import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import '../../components/UI/Button/Button.css';
import './Navigation.css';

class Navigation extends Component {

    

    render(){

        let styles = {};
        let classes = null;

        const theKeys = Object.keys(this.props.linkedinButton);

        theKeys.forEach((key, index) => {
            if(key !== "type" || key !== 'newMargin'){

                
                    styles[key] = this.props.linkedinButton[key];
                
            }
        });

        if(window.innerWidth < 649){
            classes = "lin";
            styles = {
                ...styles,
                'marginTop': '75px'
            }
        }

        let mobileStyles = {
            'margin' : '0px',
            'padding': '0px'
        };

        let buttons = (<div style={this.props.styles}>
            <Button styles={this.props.projectButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
        {/*<Button styles={this.props.linkedinButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />*/}
            <a href="https://www.linkedin.com/in/mark-mcdaniels-68b39789">
               <div id={styles.type} className={classes} style={styles} onMouseOver={this.props.hover} onMouseOut={this.props.hover} title="Linkedin"></div></a>
            <Button styles={this.props.homeButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
            <Button styles={this.props.gitButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
            <Button styles={this.props.codepenButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
            <Button styles={this.props.contactButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
            <Button styles={this.props.cvButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
        </div>);

        if(this.props.mobile){
            buttons = (<div className="Mobile" style={this.props.style}>
                <Button styles={this.props.projectButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />
                {/*<Button styles={this.props.linkedinButton} hover={this.props.hover} clicked={this.props.clicked} mobile={this.props.mobile} />*/}
                <a href="https://www.linkedin.com/in/mark-mcdaniels-68b39789">
               <div id={styles.type} className="lin" style={styles} onMouseOver={this.props.hover} onMouseOut={this.props.hover} title="Linkedin"></div></a>
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