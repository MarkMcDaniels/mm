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
            newMargin: 224,
            float: 'left',
            //position: 'absolute',
            // 31.5
            marginLeft: "31.5%",
            backgroundImage: 'url(' + require('./project_icon_red.svg') + ')',
            // 33.6
            marginTop: '44.5%',
            width: '55px',
            height : '55px',
            backgroundRepeat: 'no-repeat',
            backgroundSize : '100%'
        },
        linkedinButton: {
            type: 'linkedin',
            //position: 'absolute',
            float: 'left',
            marginLeft: '5.6%',
            marginTop: '44.5%',
            width: '41px',
            height: '41px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundImage: 'url(' + require('./linkedin_icon_red.svg') + ')'
        },
        homeButton: {
            type: 'home',
            
            //position: 'absolute',
            float: 'left',
            marginLeft: '3.85%',
            marginTop: '38.85%',
            width: '50px',
            height: '70px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundImage: 'url(' + require('./home_icon_red.svg') + ')'
        },
        gitButton: {
            type: 'git',
            float: 'left',
            marginLeft: '4.1%',
            marginTop: '44.53%',
            height: '41px',
            width: '41px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundImage: 'url(' + require('./git_icon_red.svg') + ')'
        },
        codepenButton: {
            type: 'codepen',
            float: 'left',
            marginLeft: '5.45%',
            marginTop: '44.54%',
            height: '41px',
            width: '41px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundImage: 'url(' + require('./codepen_icon_red.svg') + ')'

        },
        contactButton: {
            type: 'contact',
            float: 'left',
            marginLeft: '-47.5%',
            marginTop: '46.4%',
            height: '48px',
            width: '48px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundImage: 'url(' + require('./mail_icon_red.svg') + ')'
        },
        cvButton: {
            type: 'cv',
            float: 'left',
            marginLeft: '7.4%',
            marginTop: '46.5%',
            height: '48px',
            width: '48px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            backgroundImage: 'url(' + require('./cv_icon_red.svg') + ')'
        },
        screen: {
            height: '364px'
        },
        buttonChange: 1.0,
        buttonSize: 55,
        buttonWidth: '55px',
        homeButtonSize: 50,
        homeButtonWidth: '50px',
        homeButtonHeight: '72px',
        sideButtonSize: 48,
        sideButtonHeight: '48px',
        sideButtonWidth: '48px',
        leftSize: 300,
        screenActive: true,
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
        window.onresize = this.getHeight.bind(this);
    }

    componentWillMount () {
        this.getBaseline();
    }

    getBaseline = () => {
        // Takes width of current viewport, and builds initial widths of the UI based on the ratio of the current width
        const curWidth = window.innerWidth;

        // Main row buttons
        const buttonSize = curWidth / 30;
        const buttonWidth = buttonSize + "px";

        // Large home button
        const homeButtonWidth = curWidth / 22.66;
        const homeButtonHeight = (buttonSize / 0.7);
        // height ratio 15.74 for homeButton
        // console.log('[homebutton height] ' + homeButtonHeight);
        // width ratio 22.66 for homebutton
        // console.log('[homebutton width] ' + homeButtonWidth);

        // Side buttons
        const sideButtonSize = curWidth / 28.46;
        console.log('[sidebuttonsize] ' + sideButtonSize);


        
        this.setState({
            width: curWidth,
            prevWidth: curWidth,
            test: true,
            buttonSize: buttonSize,
            buttonWidth: buttonWidth,
            homeButtonSize: homeButtonHeight,
            homeButtonHeight: homeButtonHeight + 'px',
            homeButtonWidth: homeButtonWidth + "px",
            sideButtonWidth: sideButtonSize + 'px',
            sideButtonHeight: sideButtonSize + 'px',
            sideButtonSize: sideButtonSize
            
            });

            
        console.log("[prevWidth baseline] " + this.state.prevWidth + " " + curWidth + " " + this.state.test);
    }

    setButtonWidth = () => {
        // regular button changes
        const newButtonSize = this.state.buttonSize * this.state.buttonChange;
        const newButtonWidth = newButtonSize + "px";


        // home button change
        const homeButtonSize = this.state.homeButtonSize * this.state.buttonChange;
        const homeButtonWidth = homeButtonSize + "px";
        const homeButtonHeight = homeButtonSize / 0.7;
        const newHomeButtonHeight = homeButtonHeight + 'px';

        // side button changes
        const sideButtonSize = this.state.sideButtonSize * this.state.buttonChange;
        const sideButtonWidth = sideButtonSize + 'px';

        console.log('[contact margin] ' + this.state.contactButton.marginTop);
        const newMargin = this.state.width - this.state.nextWidth;


        this.setState({
            buttonSize: newButtonSize,
            buttonWidth: newButtonWidth,
            homeButtonSize: homeButtonSize,
            homeButtonWidth: homeButtonWidth,
            homeButtonHeight: newHomeButtonHeight,
            sideButtonSize: sideButtonSize,
            sideButtonHeight: sideButtonWidth,
            sideButtonWidth: sideButtonWidth,
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
            },
            homeButton: {
                ...this.state.homeButton,
                
                width: homeButtonWidth,
                height: newHomeButtonHeight
            },
            gitButton: {
                ...this.state.gitButton,
                height: newButtonWidth,
                width: newButtonWidth
            },
            codepenButton: {
                ...this.state.codepenButton,
                height: newButtonWidth,
                width: newButtonWidth
            },
            contactButton: {
                ...this.state.contactButton,
                height: sideButtonWidth,
                width: sideButtonWidth
            },
            cvButton: {
                ...this.state.cvButton,
                height: sideButtonSize,
                width: sideButtonSize
            }
        });
    }

    onButtonClickHandler = (event) => {
        const screen = document.getElementById('screen');
        screen.style.width = '54%';
        screen.style.height = this.state.screen.height;
        screen.style.marginTop = '7%';
        screen.style.opacity = '1';
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
        
        switch (event.target.id){
            case 'project':
                mouseOverState = {projectButton: {
                    ...this.state.projectButton,
                    backgroundImage: 'url(' + require('./project_icon_green.svg') + ')'
                    }
                };

                mouseOutState = {projectButton: {
                    ...this.state.projectButton,
                    backgroundImage: 'url(' + require('./project_icon_red.svg') + ')'
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
                        backgroundImage: 'url(' + require('./linkedin_icon_red.svg') + ')'
                    }
                };
                
                break;

            case 'home':
                mouseOverState = {
                    homeButton : {
                        ...this.state.homeButton,
                        backgroundImage: 'url(' + require('./home_icon_green.svg') + ')'
                    }
                };


                mouseOutState = {
                    homeButton : {
                        ...this.state.homeButton,
                        backgroundImage: 'url(' + require('./home_icon_red.svg') + ')'
                    }
                };
                
                break;
            
            case 'git':
                mouseOverState = {
                    gitButton: {
                        ...this.state.gitButton,
                        backgroundImage: 'url(' + require('./git_icon_green.svg') + ')'
                    }
                };
                
                mouseOutState = {
                    gitButton: {
                        ...this.state.gitButton,
                        backgroundImage: 'url(' + require('./git_icon_red.svg') + ')'
                    }
                };

                break;

            case 'codepen':
                    mouseOverState = {
                        codepenButton: {
                            ...this.state.codepenButton,
                            backgroundImage: 'url(' + require('./codepen_icon_green.svg') + ')'
                        }
                    };
                    
                    mouseOutState = {
                        codepenButton: {
                            ...this.state.codepenButton,
                            backgroundImage: 'url(' + require('./codepen_icon_red.svg') + ')'
                        }
                    };

                break;

            case 'contact':
                mouseOverState = {
                    contactButton: {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_green.svg') + ')'
                    }
                };

                mouseOutState = {
                    contactButton: {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_red.svg') + ')'
                    }
                };

                
                break;

            case 'cv':
                mouseOverState = {
                    cvButton: {
                        ...this.state.cvButton,
                        backgroundImage: 'url(' + require('./cv_icon_green.svg') + ')'
                    }
                };

                mouseOutState = {
                    cvButton: {
                        ...this.state.cvButton,
                        backgroundImage: 'url(' + require('./cv_icon_red.svg') + ')'
                    }
                };
                break;


            default:
            
                break;
        }


       
        if(event.type === 'mouseover'){
            
            this.setState(mouseOverState);
        } else if (event.type==='mouseout'){
            
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
        let newScreenHeight = 0;
        let normalButtonPerc = 5.96;
        let newInternalScreenHeight = null;


        let nextWidth = this.state.nextWidth;
        

        const curWidth = document.getElementById('mm_main').clientWidth;
        //testWidth = nextWidth === 'auto' ? testWidth = curWidth : testWidth = nextWidth;
        if(nextWidth === 'auto'){
            testWidth = curWidth;
            

        } else {
            testWidth = nextWidth;
            
        }

        //prevWidth = this.state.prevWidth - curWidth;
        // console.log("[prevWidth] " + this.state.prevWidth);
        // console.log("[curWidth] " + curWidth);
        
        this.state.prevWidth === curWidth ? prevWidth = curWidth : prevWidth = prevWidth - curWidth;
        //console.log("[prevWidth] after change : " + prevWidth);
        
        percChange = curWidth/testWidth;
        //console.log("[nextWidth] " + nextWidth);
        //console.log("[curWidth] " + curWidth);
        newHeight = Math.floor(curWidth/1.7);
        console.log('[newHeight] ' + newHeight);

        newScreenHeight = newHeight / 1.75;
        console.log('[newscreenheight] ' + newScreenHeight);

        // when newHeight is larger than
        if(newHeight > window.innerHeight){
            newHeight = Math.floor(nextWidth/1.7);
            
        }

        imgBrowserDiff = window.innerHeight - newHeight;
        newMargin = Math.floor(imgBrowserDiff / 2);

        
        // the current screen height
        newInternalScreenHeight = curWidth / 1.69;
        console.log('[newInternalScreenheight] ' + newInternalScreenHeight);
        console.log('[this.state.screen.height] ' + this.state.screen.height);


        // console.log('[newMargin] ' + newMargin);
        // console.log("[newmargin combined] " + (newMargin + this.state.projectButton.newMargin));
        // console.log('[margin state] ' + this.state.projectButton.newMargin);
        // console.log('[projecMargin imgBrowser] ' + (this.state.projectButton.newMargin + imgBrowserDiff));
        //this.setState({width: curWidth});

        this.setState({
            width: "auto",
            minHeight: newHeight,
            marginTop: newMargin,
            nextWidth: curWidth,
            buttonChange: percChange,
            screen: {
                ...this.state.screen,
                height: newScreenHeight + "px"
            }
        });
        //console.log(newHeight + " new height");
        
        this.setButtonWidth();
        
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.getHeight.bind(this));
    }

    render(){
        const deckStyles = {
            "backgroundImage": 'url(' + require('./deck3_1_with_chair_flatter.svg') + ')',
            
            'display': 'flex',
            //'minHeight': this.state.minHeight,
            'height': window.innerWidth / 1.7777,
            'width': this.state.width,
            'backgroundRepeat': 'no-repeat',
            'alignItems' : 'center',
            'alignContent' : 'center',
            'margin' : 'auto',
            'marginTop' : this.state.marginTop,
            'flexDirection' : 'column'
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

        // Screen pop up animation. The best way I could find to do this with react was with adding a class to modify initial values.
        const animEnd = {
            'width' : '54%',
            'height' : this.state.screen.height,
            'border' : '1px solid black',
            'position' : 'absolute',
            'overflow' : 'auto',
            'marginTop' : '7%',
            'animationName': 'screen',
            'animationDuration': '3s',
            'display': 'block',
            'opacity': '1'
        };

        const animStart = {
            'height': '1%',
            'position': 'absolute',
            'overflow': 'auto',
            //'border': '1px solid black',
            'opacity': '0',
            'marginTop': '25%',
            'width': '20%',
            'transition': 'width 0.4s, height 1s, margin-top 1s, opacity 0.5s',
            'zIndex': '-20',
            'backgroundColor': 'lightskyblue'

        };

        let screen = animStart;
        

        
        return (
            <div id="mm_main" className="Deck" style={deckStyles}>
            {/*<div className="imgTest" style={imgPlace} onMouseOver={this.hoverButton} onMouseOut={this.hoverButton}></div>*/}
            {/*src={project_icon_green} style={imgSizes} alt="green project icon"*/}
                <div style={{"width": '100%', 'height' : '100%'}}>
                    <Button styles={this.state.projectButton} hover={this.hoverButton} clicked={this.onButtonClickHandler} ></Button>
                    <Button styles={this.state.linkedinButton} hover={this.hoverButton} />
                    <Button styles={this.state.homeButton} hover={this.hoverButton} />
                    <Button styles={this.state.gitButton} hover={this.hoverButton} />
                    <Button styles={this.state.codepenButton} hover={this.hoverButton} />
                    <Button styles={this.state.contactButton} hover={this.hoverButton} />
                    <Button styles={this.state.cvButton} hover={this.hoverButton} />
                </div>
                <div id="screen" style={screen}>
                    
                </div>
            </div>
        );
    }

}

export default MM;