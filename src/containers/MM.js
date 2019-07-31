import React, { Component } from 'react';
import './MM.css';

import Button from "../components/UI/Button/Button";

import deck from './deck2_2_with_chair_flatter.png';
import project_icon_green from './project_icon_green.svg';
import { isAbsolute } from 'path';

class MM extends Component {

    state = {
        width: 'auto',
        prevWidth: null,
        minHeight: 'auto',
        marginTop: 'auto',
        nextWidth: 'auto',
        projectButton: {
            type: 'project',
            float: 'left',
            //position: 'absolute',
            // 31.5
            marginLeft: "31.5%",
            backgroundImage: 'url(' + require('./project_icon_blue.svg') + ')',
            // 33.6
            marginTop: '33.6%',
            width: '39px',
            height : '39px',
            backgroundRepeat: 'no-repeat',
            backgroundSize : '100%'
        },
        linkedinButton: {
            type: 'linkedin',
            float: 'left',
            marginLeft: '5.7%',
            marginTop: '33.6%',
            width: '39px',
            height: '39px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundImage: 'url(' + require('./linkedin_icon_blue.svg') + ')'
        },

        buttonChange: 1.0,
        buttonSize: 39,
        buttonWidth: '39px',
        leftSize: 300,
        test: false
    }

    componentDidMount () {
        
      console.log(window.result.parsedResult.browser.name);
        // Sets initial values for width
        this.getBaseline();
        // Sets initial values for height based on width ratio
        this.getHeight();

        // When viewing area changes size it updates like a draw()
        window.addEventListener('resize', this.getHeight.bind(this));
    }

    componentWillMount () {
        this.getBaseline();
    }

    getBaseline = () => {
        const curWidth = window.innerWidth;
        
        this.setState({
            width: curWidth,
            prevWidth: curWidth,
             test: true
            });
        console.log("[prevWidth baseline] " + this.state.prevWidth + " " + curWidth + " " + this.state.test);
    }

    setButtonWidth = () => {
        const newButtonSize = this.state.buttonSize * this.state.buttonChange;
        const newButtonWidth = newButtonSize + "px";
        // console.log('[client width] ' + document.getElementById('mm_main').clientWidth);
        // console.log('[prevWidth] ' + this.state.prevWidth);
        // console.log('[nextWidth] ' + this.state.nextWidth);
        // console.log('[curWidth] ' + this.state.nextWidth - document.getElementById('mm_main').clientWidth );
        const newMargin = this.state.width - this.state.nextWidth;
        // console.log("[newmargin ] " + newMargin);
        this.setState({
            buttonSize: newButtonSize,
            buttonWidth: newButtonWidth,
            projectButton: {
                ...this.state.projectButton, 
                // the buttons are square so I use the same width as height
                height: newButtonWidth,
                width: newButtonWidth
            },
            linkedinButton: {
                ...this.state.linkedinButton,
                height: newButtonWidth,
                width: newButtonWidth
            }
        });
    }

    hoverButton = (event) => {


       

        let mouseOverState = {projectButton : {
            ...this.state.projectButton,
            }
        };
        let mouseOutState  = {projectButton : {
            ...this.state.projectButton,
            }
        };

        console.log('[target id] ' + event.target.id);
        
        switch (event.target.id){
            case 'project':
                console.log("i ran in project switch");
                mouseOverState = {projectButton: {
                    ...this.state.projectButton,
                    backgroundImage: 'url(' + require('./project_icon_green.svg') + ')'
                    }
                };

                mouseOutState = {projectButton: {
                    ...this.state.projectButton,
                    backgroundImage: 'url(' + require('./project_icon_blue.svg') + ')'
                    }
                };


                break;

            case 'linkedin':
                
                mouseOverState = {
                    linkedinButton: {
                        ...this.state.linkedinButton,
                        backgroundImage: 'url(' + require('./linkedin_icon_green.svg') + ')'
                    }
                };

                mouseOutState = {
                    linkedinButton: {
                        ...this.state.linkedinButton,
                        backgroundImage: 'url(' + require('./linkedin_icon_blue.svg') + ')'
                    }
                };
                
                break;

            default:
            
                break;
        }


       
        if(event.type === 'mouseover'){
            console.log("[mouseover]");

            console.log(mouseOverState);
            this.setState(mouseOverState);
        } else if (event.type==='mouseout'){
            console.log("[mouse out]");
            console.log(mouseOutState);
            this.setState(mouseOutState);
        }
                

        
    }

    getHeight = () => {
        
        let newHeight = 0;
        let newMargin = 0;
        let imgBrowserDiff = 0;
        let percChange = 0;
        let testWidth = null;
        let prevWidth = null;


        let nextWidth = this.state.nextWidth;
        

        const curWidth = document.getElementById('mm_main').clientWidth;
        //testWidth = nextWidth === 'auto' ? testWidth = curWidth : testWidth = nextWidth;
        if(nextWidth === 'auto'){
            testWidth = curWidth;
            

        } else {
            testWidth = nextWidth;
            
        }

        //prevWidth = this.state.prevWidth - curWidth;
        console.log("[prevWidth] " + this.state.prevWidth);
        console.log("[curWidth] " + curWidth);
        
        this.state.prevWidth === curWidth ? prevWidth = curWidth : prevWidth = prevWidth - curWidth;
        //console.log("[prevWidth] after change : " + prevWidth);
        
        percChange = curWidth/testWidth;
        //console.log("[nextWidth] " + nextWidth);
        //console.log("[curWidth] " + curWidth);
        newHeight = Math.floor(curWidth/1.7);

        // when newHeight is larger than
        if(newHeight > window.innerHeight){
            newHeight = Math.floor(nextWidth/1.7);
        }

        imgBrowserDiff = window.innerHeight - newHeight;
        newMargin = Math.floor(imgBrowserDiff / 2);

        //console.log("newmargin " + newMargin);
        //this.setState({width: curWidth});

        this.setState({
            width: "auto",
            minHeight: newHeight,
            marginTop: newMargin,
            nextWidth: curWidth,
            buttonChange: percChange
        });
        //console.log(newHeight + " new height");
        
        this.setButtonWidth();
        
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.getHeight.bind(this));
    }

    render(){
        const deckStyles = {
            "backgroundImage": 'url(' + require('./deck2_2_with_chair_flatter.png') + ')',
            
            'display': 'flex',
            'minHeight': this.state.minHeight,
            'width': this.state.width,
            'backgroundRepeat': 'no-repeat',
            'alignItems' : 'center',
            'alignContent' : 'center',
            'margin' : 'auto',
            'marginTop' : this.state.marginTop
        }

        const imgSizes = {
           'width' : this.state.buttonWidth
        }

        const imgPlace = {
            'position' : "absolute",
            "marginLeft": this.state.projectButton.leftMargin,
            "marginTop": '33.5%',
            "width": this.state.buttonWidth,
            'height' : this.state.buttonWidth,
            "backgroundImage": this.state.projectButton.backgroundImage,
            'backgroundRepeat': 'no-repeat',
            'backgroundSize' : '100%'
        }
        
        return (
            <div id="mm_main" className="Deck" style={deckStyles}>
            {/*<div className="imgTest" style={imgPlace} onMouseOver={this.hoverButton} onMouseOut={this.hoverButton}></div>*/}
            {/*src={project_icon_green} style={imgSizes} alt="green project icon"*/}
            <Button styles={this.state.projectButton} hover={this.hoverButton} ></Button>
            <Button styles={this.state.linkedinButton} hover={this.hoverButton} />
            </div>
        );
    }

}

export default MM;