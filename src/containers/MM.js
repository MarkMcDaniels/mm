import React, { Component } from 'react';
import './MM.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import ReactDom from 'react-dom';

import Button from "../components/UI/Button/Button";
import Home from "../components/Layout/Home/Home";
import Contact from "../components/Layout/Contact/Contact";
import Projects from '../containers/Projects/Projects';
import Github from '../containers/Github/Github';
import Codepen from '../containers/Codepen/Codepen';
import Canvas from '../containers/Canvas/Canvas';
import Space from '../containers/Space/Space';
import Screen from '../containers/Screen/Screen';
import Navigation from '../containers/Navigation/Navigation';
import CV from '../containers/CV/CV';


import { isAbsolute } from 'path';
import { thisExpression, tsImportEqualsDeclaration } from '@babel/types';

//import { CustomConsole } from '@jest/console';
// import { eventNames } from 'cluster';

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
            marginTop: '44.45%',
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
            backgroundImage: 'url(' + require('./home_icon_green.svg') + ')'
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
            height: '364px',
            active: 'home'
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
        screenActive: false,
        prevActiveScreen: 'home',
        screenId: 'home',
        deckHeight: null,
        spaceHeight: '425px',
        spaceRatio: 2.1384,
        spaceWidth: '908.823px',
        mobile: false,
        test: false
    }

    componentDidMount () {
        
      
        // Sets initial values for width
        this.getBaseline();

        // Sets initial values for height based on width ratio
        this.getHeight();

        // When viewing area changes size it updates like a draw()
        //window.addEventListener('sizemodechange', this.getHeight.bind(this));
        

        window.addEventListener('resize', this.getHeight.bind(this));
        

        window.addEventListener('resize', this.setMobile.bind(this));
        
        
    }

    componentWillMount () {
        this.getBaseline();
        
        const curWidth = window.innerWidth;
        
        if(curWidth < 649){
            this.setState({
                mobile: true
            });
        }
    }



    componentDidUpdate () {
        if(this.props.history.action === 'REPLACE' && this.state.screenActive){

            let cvButton = {
                ...this.state.cvButton,
                backgroundImage: 'url(' + require('./cv_icon_red.svg') + ')'
            };

            let contactButton = {
                ...this.state.contactButton,
                backgroundImage: 'url(' + require('./mail_icon_red.svg') + ')'
            };

            if(window.innerWidth < 649){
                cvButton = {
                    ...this.state.cvButton,
                    backgroundImage: 'url(' + require('./resume_icon_red_mobile.svg') + ')'
                };
                contactButton = {
                    ...this.state.contactButton,
                    backgroundImage: 'url(' + require('./mail_icon_red_mobile.svg') + ')'
                };
            }
         
            this.setState({
                screenActive: false,
                prevActiveScreen: 'home',
                screenId: 'home',
                homeButton: {
                    ...this.state.homeButton,
                    backgroundImage: 'url(' + require('./home_icon_green.svg') + ')'
                },
                projectButton: {
                    ...this.state.projectButton,
                    backgroundImage: 'url(' + require('./project_icon_red.svg') + ')'
                },
                contactButton: contactButton,
                linkedinButton: {
                    ...this.state.linkedinButton,
                    backgroundImage: 'url(' + require('./linkedin_icon_red.svg') + ')'
                },
                gitButton: {
                    ...this.state.gitButton,
                    backgroundImage: 'url(' + require('./git_icon_red.svg') + ")"
                },
                codepenButton: {
                    ...this.state.codepenButton,
                    backgroundImage: 'url(' + require('./codepen_icon_red.svg') + ')'
                },
                cvButton: cvButton
                
            });
            

            const screen = document.getElementById('screen');

            if(this.state.mobile && screen !== null){
                
                screen.style.width = '25%';
                screen.style.height = '1%';
                screen.style.opacity = '0';
                screen.style.transition = 'width 0.4s, height 1s, margin-top 1s, opacity 0.5s';
                screen.style.marginTop = '25%';
            } 
            
            else if (window.innerWidth > 649 && window.location.pathname !== "/"){

                
                if(this.state.screenActive ){
                    screen.style.width = '54%';
                    screen.style.height = this.state.screen.height;
                    screen.style.marginTop = '7%';
                    screen.style.opacity = '1';
                }
                this.setState({
                    mobile: false
                });
            }
            
            // if(window.innerWidth > 649 && this.state.screenId === 'home'){
            //     this.setState({
            //         screenActive: false
            //     });
            // }

            
            
        }
        

    }

    setMobile = () => {
        
        const screen = document.getElementById('screen');
        
        let screenActive = this.state.screenActive;


        if(window.innerWidth < 649){
        let mobile = this.state.mobile;
        let cvButton = {...this.state.cvButton};
        let contactButton = {...this.state.contactButton};

        if(window.innerWidth < 649){

            
                cvButton = {
                    ...this.state.cvButton,
                    backgroundImage: 'url(' + require('./resume_icon_red_mobile.svg') + ')'
                };
        
                contactButton = {
                    ...this.state.contactButton,
                    backgroundImage: 'url(' + require('./mail_icon_red_mobile.svg') + ')'
                };
                mobile = true;
          
        
        } else {
            if(window.location.url !== '/'){
                screenActive = true;
                screen.style.width = '54%';
                screen.style.height = this.state.screen.height;
                screen.style.marginTop = '7%';
                screen.style.opacity = '1';
                screen.style.transition = 'none';
            } else {
                // screen.style.transition = 'width 0.4s, height 1s, margin-top 1s, opacity 0.5s';
                // screen.style.height = '1%';
                // screenActive = false;
                // screen.style.opacity = '0';
            }

            mobile = false;
        }

        if(window.innerWidth > 649 && window.location.url !== "/"){
            screenActive = false;
            screen.style.transition = 'width 0.4s, height 1s, margin-top 1s, opacity 0.5s';
            screen.style.height = '1%';
            screenActive = false;
            screen.style.opacity = '0';
        }

        this.setState({
            cvButton: cvButton,
            contactButton: contactButton,
            mobile: mobile,
            screenActive: screenActive
        });

    } else {
        if(window.location.url !== "/"){
            screenActive = true;
            screen.style.width = '54%';
            screen.style.height = this.state.screen.height;
            screen.style.marginTop = '7%';
            screen.style.opacity = '1';
            screen.style.transition = 'none';
        }

        this.setState({
            screenActive: screenActive
        });
    }
    

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
        // width ratio 22.66 for homebutton
        
        // Side buttons
        const sideButtonSize = curWidth / 28.46;
        

        // Set space and stars -- 2.1426
        const spaceWidth = curWidth / 1.02;
        const spaceRatio =  2.1426;
        const spaceHeight = spaceWidth / spaceRatio;
        
        
        // Sets mobile buttons images
        let cvButton = {...this.state.cvButton};
        let contactButton = {...this.state.contactButton};
        let mobile = {...this.state.mobile};
        if(window.innerWidth < 649){
            cvButton =  {
                ...this.state.cvButton,
                backgroundImage: 'url(' + require('./resume_icon_red_mobile.svg') + ')'
            };

            contactButton = {
                ...this.state.contactButton,
                backgroundImage: 'url(' + require('./mail_icon_red_mobile.svg') + ')'
            };
            mobile = true;
        }

        
        
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
            sideButtonSize: sideButtonSize,
            spaceHeight: spaceHeight + "px",
            spaceWidth: spaceWidth + "px",
            spaceRatio: spaceRatio,
            cvButton: cvButton,
            contactButton: contactButton,
            mobile: mobile
            
            });

            
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

    getActivePageButton = () => {
        
        const url = window.location.pathname;

        const curMobile = window.innerWidth < 649 ? true : false;

        let cvButton = this.state.cvButton;
        let contactButton = this.state.contactButton;
        let homeButton = this.state.homeButton;
        let projectButton = this.state.projectButton;
        let linkedinButton = this.state.linkedinButton;
        let gitButton = this.state.gitButton;
        let codepenButton = this.state.codepenButton;

        switch (url){

            case '/':
                homeButton = {
                    ...this.state.homeButton,
                    backgroundImage: 'url(' + require('./home_icon_green.svg') + ')'
                };

                if(curMobile) {
                    cvButton = {
                        ...this.state.cvButton,
                    backgroundImage: 'url(' + require('./mail_icon_red_mobile.svg') + ')'
                    };

                    contactButton = {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./resume_icon_red_mobile.svg') + ')'
                    };
                } else {
                    cvButton = {
                        ...this.state.cvButton,
                    backgroundImage: 'url(' + require('./cv_icon_red.svg') + ')'
                    };

                    contactButton = {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_red.svg') + ')'
                    };
                }
                

                projectButton = {
                    ...this.state.projectButton,
                    backgroundImage: 'url(' + require('./project_icon_red.svg') + ')'
                };


                linkedinButton= {
                    ...this.state.linkedinButton,
                    backgroundImage: 'url(' + require('./linkedin_icon_red.svg') + ')'
                }

                codepenButton = {
                    ...this.state.codepenButton,
                    backgroundImage: 'url(' + require('./codepen_icon_red.svg') + ')'
                };

                gitButton = {
                    ...this.state.gitButton,
                    backgroundImage: 'url(' + require('./git_icon_red.svg') + ")"
                };

                break;

                case '/projects':
                    homeButton = {
                        ...this.state.homeButton,
                        backgroundImage: 'url(' + require('./home_icon_red.svg') + ')'
                    };
    
                    if(curMobile) {
                        cvButton = {
                            ...this.state.cvButton,
                        backgroundImage: 'url(' + require('./resume_icon_red_mobile.svg') + ')'
                        };
    
                        contactButton = {
                            ...this.state.contactButton,
                            backgroundImage: 'url(' + require('./mail_icon_red_mobile.svg') + ')'
                        };
                    } else {
                        cvButton = {
                            ...this.state.cvButton,
                        backgroundImage: 'url(' + require('./cv_icon_red.svg') + ')'
                        };
    
                        contactButton = {
                            ...this.state.contactButton,
                            backgroundImage: 'url(' + require('./mail_icon_red.svg') + ')'
                        };
                    }
                    
    
                    projectButton = {
                        ...this.state.projectButton,
                        backgroundImage: 'url(' + require('./project_icon_green.svg') + ')'
                    };
    
    
                    linkedinButton= {
                        ...this.state.linkedinButton,
                        backgroundImage: 'url(' + require('./linkedin_icon_red.svg') + ')'
                    }
    
                    codepenButton = {
                        ...this.state.codepenButton,
                        backgroundImage: 'url(' + require('./codepen_icon_red.svg') + ')'
                    };
    
                    gitButton = {
                        ...this.state.gitButton,
                        backgroundImage: 'url(' + require('./git_icon_red.svg') + ")"
                    };


                break;

            case '/codepen':
                homeButton = {
                    ...this.state.homeButton,
                    backgroundImage: 'url(' + require('./home_icon_red.svg') + ')'
                };

                if(curMobile) {
                    cvButton = {
                        ...this.state.cvButton,
                    backgroundImage: 'url(' + require('./resume_icon_red_mobile.svg') + ')'
                    };

                    contactButton = {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_red_mobile.svg') + ')'
                    };
                } else {
                    cvButton = {
                        ...this.state.cvButton,
                    backgroundImage: 'url(' + require('./cv_icon_red.svg') + ')'
                    };

                    contactButton = {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_red.svg') + ')'
                    };
                }
                

                projectButton = {
                    ...this.state.projectButton,
                    backgroundImage: 'url(' + require('./project_icon_red.svg') + ')'
                };


                linkedinButton= {
                    ...this.state.linkedinButton,
                    backgroundImage: 'url(' + require('./linkedin_icon_red.svg') + ')'
                }

                codepenButton = {
                    ...this.state.codepenButton,
                    backgroundImage: 'url(' + require('./codepen_icon_green.svg') + ')'
                };

                gitButton = {
                    ...this.state.gitButton,
                    backgroundImage: 'url(' + require('./git_icon_red.svg') + ")"
                };

            break;

            case '/github':
                homeButton = {
                    ...this.state.homeButton,
                    backgroundImage: 'url(' + require('./home_icon_red.svg') + ')'
                };

                if(curMobile) {
                    cvButton = {
                        ...this.state.cvButton,
                    backgroundImage: 'url(' + require('./resume_icon_red_mobile.svg') + ')'
                    };

                    contactButton = {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_red_mobile.svg') + ')'
                    };
                } else {
                    cvButton = {
                        ...this.state.cvButton,
                    backgroundImage: 'url(' + require('./cv_icon_red.svg') + ')'
                    };

                    contactButton = {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_red.svg') + ')'
                    };
                }
                

                projectButton = {
                    ...this.state.projectButton,
                    backgroundImage: 'url(' + require('./project_icon_red.svg') + ')'
                };


                linkedinButton= {
                    ...this.state.linkedinButton,
                    backgroundImage: 'url(' + require('./linkedin_icon_red.svg') + ')'
                }

                codepenButton = {
                    ...this.state.codepenButton,
                    backgroundImage: 'url(' + require('./codepen_icon_red.svg') + ')'
                };

                gitButton = {
                    ...this.state.gitButton,
                    backgroundImage: 'url(' + require('./git_icon_green.svg') + ")"
                };

                break;

            case '/contact':
                homeButton = {
                    ...this.state.homeButton,
                    backgroundImage: 'url(' + require('./home_icon_red.svg') + ')'
                };

                if(curMobile) {
                    cvButton = {
                        ...this.state.cvButton,
                    backgroundImage: 'url(' + require('./resume_icon_red_mobile.svg') + ')'
                    };

                    contactButton = {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_green_mobile.svg') + ')'
                    };
                } else {
                    cvButton = {
                        ...this.state.cvButton,
                    backgroundImage: 'url(' + require('./cv_icon_red.svg') + ')'
                    };

                    contactButton = {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_green.svg') + ')'
                    };
                }
                

                projectButton = {
                    ...this.state.projectButton,
                    backgroundImage: 'url(' + require('./project_icon_red.svg') + ')'
                };


                linkedinButton= {
                    ...this.state.linkedinButton,
                    backgroundImage: 'url(' + require('./linkedin_icon_red.svg') + ')'
                }

                codepenButton = {
                    ...this.state.codepenButton,
                    backgroundImage: 'url(' + require('./codepen_icon_red.svg') + ')'
                };

                gitButton = {
                    ...this.state.gitButton,
                    backgroundImage: 'url(' + require('./git_icon_red.svg') + ")"
                };

                break;

            case '/resume':
                homeButton = {
                    ...this.state.homeButton,
                    backgroundImage: 'url(' + require('./home_icon_red.svg') + ')'
                };

                if(curMobile) {
                    cvButton = {
                        ...this.state.cvButton,
                    backgroundImage: 'url(' + require('./resume_icon_green_mobile.svg') + ')'
                    };

                    contactButton = {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_red_mobile.svg') + ')'
                    };
                } else {
                    cvButton = {
                        ...this.state.cvButton,
                    backgroundImage: 'url(' + require('./cv_icon_green.svg') + ')'
                    };

                    contactButton = {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_red.svg') + ')'
                    };
                }
                

                projectButton = {
                    ...this.state.projectButton,
                    backgroundImage: 'url(' + require('./project_icon_red.svg') + ')'
                };


                linkedinButton= {
                    ...this.state.linkedinButton,
                    backgroundImage: 'url(' + require('./linkedin_icon_red.svg') + ')'
                }

                codepenButton = {
                    ...this.state.codepenButton,
                    backgroundImage: 'url(' + require('./codepen_icon_red.svg') + ')'
                };

                gitButton = {
                    ...this.state.gitButton,
                    backgroundImage: 'url(' + require('./git_icon_red.svg') + ")"
                };
                break;  

            default:
                break;

        }


        let screenActive = this.state.screenActive;

        const screen = document.getElementById('screen');

        if(url === "/" && screen !== null){
            screenActive = false;
            screen.style.transition = 'width 0.4s, height 1s, margin-top 1s, opacity 0.5s';
            screen.style.height = '1%';
            screen.style.opacity = '0';
        }
        
        this.setState({
            homeButton: homeButton,
            projectButton: projectButton,
            gitButton: gitButton,
            cvButton: cvButton,
            codepenButton: codepenButton,
            contactButton: contactButton,
            screenActive: screenActive
            
        });

    }

    onButtonClickHandler = (event) => {

        // Opens the middle content screen through css transition.
        // I've made it so differently than normal because I'm mananging the height of the screen dynamically
        // along with the deck.


        const screen = document.getElementById('screen');
        

        if(event.target.id === "home"){
            this.setState({
                screenActive: false,
                screenId: event.target.id,
                projectButton: {
                    ...this.state.projectButton,
                    backgroundImage: 'url(' + require('./project_icon_red.svg') + ')'
                }
            });

            if(window.innerWidth > 649){
                screen.style.width = '25%';
                screen.style.height = '1%';
                screen.style.opacity = '0';
                screen.style.transition = 'width 0.4s, height 1s, margin-top 1s, opacity 0.7s';
                screen.style.marginTop = '25%';
            }
           
        } else {
            this.setState({
                screenActive: true,
                screenId: event.target.id
            });
            

            if(window.innerWidth > 649){
                screen.style.width = '54%';
                screen.style.height = this.state.screen.height;
                screen.style.marginTop = '7%';
                screen.style.opacity = '1';
            }
        }


        if(this.state.prevActiveScreen === 'home'){
            this.setState({
                homeButton: {
                    ...this.state.homeButton,
                    backgroundImage: 'url(' + require('./home_icon_red.svg') + ')'
                }
            });
        } else if (this.state.prevActiveScreen === 'project'){
            this.setState({
                projectButton: {
                    ...this.state.projectButton,
                    backgroundImage: 'url(' + require('./project_icon_red.svg') + ')'
                }
            });
        } else if(this.state.prevActiveScreen === 'contact'){
            if(window.innerWidth < 649){
                this.setState({
                    contactButton: {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_red_mobile.svg') + ')'
                    }
                });
            } else {


                this.setState({
                    contactButton: {
                        ...this.state.contactButton,
                        backgroundImage: 'url(' + require('./mail_icon_red.svg') + ')'
                    }
                });
            }
        //} else if(this.state.prevActiveScreen === 'linkedin'){
        //     this.setState({
        //         linkedinButton: {
        //             ...this.state.linkedinButton,
        //             backgroundImage: 'url(' + require('./linkedin_icon_red.svg') + ')'
        //         }
        //     });
        } else if(this.state.prevActiveScreen === 'git'){
            this.setState({
                gitButton: {
                    ...this.state.gitButton,
                    backgroundImage: 'url(' + require('./git_icon_red.svg') + ")"
                }
            });
        } else if(this.state.prevActiveScreen === 'codepen'){
            this.setState({
                codepenButton: {
                    ...this.state.codepenButton,
                    backgroundImage: 'url(' + require('./codepen_icon_red.svg') + ')'
                }
            });

        } else if(this.state.prevActiveScreen === 'cv'){
            if(window.innerWidth < 649){
                this.setState({
                    cvButton: {
                        ...this.state.cvButton,
                        backgroundImage: 'url(' + require('./resume_icon_red_mobile.svg') + ')'
                    }
                }); 
            } else{
                this.setState({
                    cvButton: {
                        ...this.state.cvButton,
                        backgroundImage: 'url(' + require('./cv_icon_red.svg') + ')'
                    }
                });
            }
        }
        
        
        


        this.hoverButton(event);

        if(this.prevActiveScreen !== event.target.id){
            this.setState({
                prevActiveScreen: event.target.id
            });
        }

        
    }

    hoverButton = (event) => {


        let mouseOverState = {homeButton : {
            ...this.state.homeButton,
            }
        };
        let mouseOutState  = {homeButton : {
            ...this.state.homeButton,
            }
        };
        
        switch (event.target.id){
            case 'project':
                

                if(this.state.screenActive && this.state.screenId === 'project'){
                    
                    mouseOverState = {projectButton: {
                        ...this.state.projectButton,
                        backgroundImage: 'url(' + require('./project_icon_green.svg') + ')'
                        }
                    };

                    mouseOutState = {projectButton: {
                        ...this.state.projectButton,
                        backgroundImage: 'url(' + require('./project_icon_green.svg') + ')'
                        }
                    };


                } else {


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
                }

                break;

            case 'linkedin':
                
                if(this.state.screenActive && this.state.screenId === 'linkedin'){

                    mouseOverState = {
                        linkedinButton: {
                            ...this.state.linkedinButton,
                            backgroundImage: 'url(' + require('./linkedin_icon_green.svg') + ')'
                        }
                    };
                    
    
    
                    mouseOutState = {
                        linkedinButton: {
                            ...this.state.linkedinButton,
                            backgroundImage: 'url(' + require('./linkedin_icon_green.svg') + ')'
                        }
                    };

                } else {
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
                }
                break;

            case 'home':
                if(this.state.screenActive === false && this.state.screenId === 'home'){
                    mouseOutState = null;
                } else{
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
                }
                
                break;
            
            case 'git':
                if(this.state.screenActive && this.state.screenId === 'git'){
                    mouseOverState = {
                        gitButton: {
                            ...this.state.gitButton,
                            backgroundImage: 'url(' + require('./git_icon_green.svg') + ')'
                        }
                    };
                    
                    mouseOutState = {
                        gitButton: {
                            ...this.state.gitButton,
                            backgroundImage: 'url(' + require('./git_icon_green.svg') + ')'
                        }
                    }; 
                } else {
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
                }
                break;

            case 'codepen':
                if(this.state.screenActive && this.state.screenId === 'codepen'){
                    mouseOverState = {
                        codepenButton: {
                            ...this.state.codepenButton,
                            backgroundImage: 'url(' + require('./codepen_icon_green.svg') + ')'
                        }
                    };
                    
                    mouseOutState = {
                        codepenButton: {
                            ...this.state.codepenButton,
                            backgroundImage: 'url(' + require('./codepen_icon_green.svg') + ')'
                        }
                    };
                } else {
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
                }
                break;

            case 'contact':
                if(this.state.screenActive && this.state.screenId === 'contact'){
                    if(window.innerWidth < 649){
                        mouseOverState = {
                            contactButton: {
                                ...this.state.contactButton,
                                backgroundImage: 'url(' + require('./mail_icon_green_mobile.svg') + ')'
                            }
                        };
        
                        mouseOutState = {
                            contactButton: {
                                ...this.state.contactButton,
                                backgroundImage: 'url(' + require('./mail_icon_green_mobile.svg') + ')'
                            }
                        };
                    } else {
                        mouseOverState = {
                            contactButton: {
                                ...this.state.contactButton,
                                backgroundImage: 'url(' + require('./mail_icon_green.svg') + ')'
                            }
                        };
        
                        mouseOutState = {
                            contactButton: {
                                ...this.state.contactButton,
                                backgroundImage: 'url(' + require('./mail_icon_green.svg') + ')'
                            }
                        };
                    }
                } else {
                    if(window.innerWidth < 649){
                        mouseOverState = {
                            contactButton: {
                                ...this.state.contactButton,
                                backgroundImage: 'url(' + require('./mail_icon_green_mobile.svg') + ')'
                            }
                        };
    
                        mouseOutState = {
                            contactButton: {
                                ...this.state.contactButton,
                                backgroundImage: 'url(' + require('./mail_icon_red_mobile.svg') + ')'
                            }
                        };
                    } else {
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
                    }
                }
                break;

            case 'cv':
                if(this.state.screenActive && this.state.screenId === 'cv'){
                    if(window.innerWidth < 649){
                        mouseOverState = {
                            cvButton: {
                                ...this.state.cvButton,
                                backgroundImage: 'url(' + require('./resume_icon_green_mobile.svg') + ')'
                            }
                        };
        
                        mouseOutState = {
                            cvButton: {
                                ...this.state.cvButton,
                                backgroundImage: 'url(' + require('./resume_icon_green_mobile.svg') + ')'
                            }
                        };
                    } else {
                        mouseOverState = {
                            cvButton: {
                                ...this.state.cvButton,
                                backgroundImage: 'url(' + require('./cv_icon_green.svg') + ')'
                            }
                        };
        
                        mouseOutState = {
                            cvButton: {
                                ...this.state.cvButton,
                                backgroundImage: 'url(' + require('./cv_icon_green.svg') + ')'
                            }
                        };
                    }
                } else {
                    if(window.innerWidth < 649){
                        mouseOverState = {
                            cvButton: {
                                ...this.state.cvButton,
                                backgroundImage: 'url(' + require('./resume_icon_green_mobile.svg') + ')'
                            }
                        };
        
                        mouseOutState = {
                            cvButton: {
                                ...this.state.cvButton,
                                backgroundImage: 'url(' + require('./resume_icon_red_mobile.svg') + ')'
                            }
                        };
                    } else {
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
                    }
                }
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
        let mobile = this.state.mobile;
        let cvButton = this.state.cvButton;
        let contactButton = this.state.contactButton;

        console.log('[ACTIVE SCREEN BEFORE] ' + this.state.screenActive);
        let nextWidth = this.state.nextWidth;
        
        const curWidth = window.innerWidth;

        if(nextWidth === 'auto'){
            testWidth = curWidth;
            

        } else {
            testWidth = nextWidth;
            
        }

        
        this.state.prevWidth === curWidth ? prevWidth = curWidth : prevWidth = prevWidth - curWidth;
      
        
        percChange = curWidth/testWidth;
        newHeight = Math.floor(curWidth/1.7);

        newScreenHeight = newHeight / 1.75;

        // when newHeight is larger than
        if(newHeight > window.innerHeight){
            newHeight = Math.floor(nextWidth/1.7);
            
        } else {
            imgBrowserDiff = window.innerHeight - newHeight;
            newMargin = Math.floor(imgBrowserDiff / 2);
        }
        
        
        

        // Set space and stars
        const spaceWidth = curWidth / 1.02;
        const spaceRatio = this.state.spaceRatio;
        const spaceHeight = spaceWidth / spaceRatio;


        // mobile buttons and state management.
        if(window.innerWidth > 649){
            this.getActivePageButton();
            mobile = false;
            cvButton = {
                ...this.state.cvButton, 

            };

        }


        this.setState({
            width: "auto",
            minHeight: newHeight,
            marginTop: newMargin,
            nextWidth: curWidth,
            buttonChange: percChange,
            screen: {
                
                height: newScreenHeight + "px"
            },
            spaceHeight: spaceHeight + 'px',
            spaceWidth: spaceWidth+'px'
        });

        // Sets the new height of the internal screen, and removes the transition so it changes smoothly.
        const screen = document.getElementById('screen');

        if(window.innerWidth < 649 ){
            
            if(this.state.screenActive  && screen !== null){
                screen.style.transition ="none";
                screen.style.height = this.state.screen.height;
            } else {
                if(screen !== null){
                    screen.style.transition = 'width 0.4s, height 1s, margin-top 1s, opacity 0.5s';
                    screen.style.height = '1%';
                    
                    
                } 
            }

        }

            
        
        console.log('[ACTIVE SCREEN AFTER] ' + this.state.screenActive);

        this.setButtonWidth();
        
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.getHeight.bind(this));
        window.addEventListener('resize', this.setMobile.bind(this));
    

    }

    redirectHandler = () => {

        // Redirects when url is accessed without the screen being active. This means the user hasn't clicked any buttons.
        const url = window.location.pathname;

        if(url !== "/" && !this.state.screenActive){
            return <Redirect from={url} to="/" />;
        } else if(url === "/" && this.state.screenActive){
            return <Redirect from={url} to="/" />;
        } 
        return null;
    };

    resetHandler = (id) => {

    };



    render(){
        let deckStyles = {
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
            'backgroundColor': 'white'

        };

        const space = {
            'backgroundColor': 'black', 
            'width': this.state.spaceWidth, 
            'height': this.state.spaceHeight, 
            'zIndex': '-300',
            'position': 'absolute',
            'marginTop': '3%'
        };

        const stars = {

            'width': this.state.spaceWidth, 
            'height': this.state.spaceHeight,
            'zIndex': '1250',
            'position': 'absolute',
            'marginTop': '3%'

        }

        // Button styles
        let buttons = {
            'width': '100%',
            'height': '100%',
            'zIndex': '5'
        };

        let projectButton = this.state.projectButton;
        let linkedinButton = this.state.linkedinButton;
        let homeButton = this.state.homeButton;
        let gitButton = this.state.gitButton;
        let codepenButton = this.state.codepenButton;
        let contactButton = this.state.contactButton;
        let cvButton = this.state.cvButton;

        let screen = animStart;
        
        // Redirects all straight access url requests that are outside of the user experience from home.
        // I do this because the entire site's infrastructure is dynamic, and it saves me from re-writing the 
        // two entirely different code paths.

        let redirect = this.redirectHandler();

        // Mobile changes.
        if(window.innerWidth < 649){
            
            

            deckStyles = {
                //...deckStyles,
                'backgroundImage': 'none',
                'backgroundColor': 'white',
                'margin': '0px auto',
                'padding': '0px',
                'width': '100%',
                'height': '100%',
                'display': 'flex',
                'justifyContent': 'center'
                

            };

            screen = {
                'display': 'none'
            }

            buttons = {
                'width': '100%',
                'height': '100%',
                'zIndex': '5'
            }

            projectButton = {
                ...this.state.projectButton,
                marginLeft: '0%',
                marginTop: '0%',
                width: '60px',
                height: '60px'
            };
            
            linkedinButton ={
                ...this.state.linkedinButton,
                marginLeft: '0%',
                marginTop: '0%',
                width: '60px',
                height: '60px'
            }

            homeButton = {
                ...this.state.homeButton,
                marginLeft: '0%',
                marginTop: '0%',
                width: '50px',
                height: (50 / 0.7142) + 'px'
            };

            gitButton = {
                ...this.state.gitButton,
                marginLeft: '0%',
                marginTop: '0%',
                width: '60px',
                height: '60px'
            };

            codepenButton = {
                ...this.state.codepenButton,
                marginLeft: '0%',
                marginTop: '0%',
                width: '60px',
                height: '60px'
            };

            contactButton = {
                ...this.state.contactButton,
                marginLeft: '0%',
                marginTop: '0%',
                width: '60px',
                height: '60px'
            };

            cvButton = {
                ...this.state.cvButton,
                marginLeft: '0%',
                marginTop: '0%',
                width: '60px',
                height: '60px'
            };
        }
        
        
        return (
            <div id="mm_main" className="Deck" style={deckStyles} ref="mm" onMouseOver={this.state.hoverButton}>
                
                <Space styles={space} mobile={window.innerWidth < 649 ? true : false} ratio={this.state.spaceRatio} />
                
                <Navigation
                 mobile={window.innerWidth < 649 ? true : false} styles={buttons} 
                 projectButton={projectButton} 
                 homeButton={homeButton} 
                 codepenButton={codepenButton}
                 contactButton={contactButton}
                 cvButton={cvButton}
                 linkedinButton={linkedinButton}
                 gitButton={gitButton}


                 hover={this.hoverButton}
                 clicked={this.onButtonClickHandler}

                />
          
                <Screen styles={screen} mobile={window.innerWidth < 649 ? true : false} />
                <Switch>
                    {redirect}
                    <Route path='/resume' component={CV} />
                    <Route path='/projects' render={() => <Projects mobile={window.innerWidth < 649 ? true : false} />} />
                    <Route path="/contact" render={() => <Contact />} />
                    <Route path='/github' component={Github} />
                    <Route path="/codepen" component={Codepen} />
                    <Route path="/" component={Home} />
                </Switch>
                       
            </div>
        );
    }

}

export default withRouter(MM);