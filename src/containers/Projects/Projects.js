import React, { Component } from 'react';
import "./Projects.css";




class Projects extends Component {

    state = {
        projects: {
            height: '100%'
        },
        projectList: [
            {hushedApp: {
                //image: [HushedApp],
                description: "The Hushed App allows you to silence all phone notifications for a short time, and then it turns them back on so you don't have to. Designed for classes, or appointments. Android phones don't have a built in solution.",
                links: [{
                    url: "https://play.google.com/store/apps/details?id=com.hushedapp.hushed&hl=en_US",
                    image: '',
                    alt: 'google play icon'
                
                }],
                alt: 'Hushed app icon'
            }},
            {hushedSite: {
                //image: HushedSite,
                description: "Responsive website for the Hushed app.",
                links: [{
                    url: 'http://thehushedapp.com/',
                    image: "",
                    alt: 'www icon'
                }],
                alt: 'Hushed site icon'
            }},
            {wordpress: {
                //image: SpaceDev,
                description: 'This is a free responsive WordPress theme.',
                links: [{
                    url: 'https://github.com/MarkMcDaniels/myportfolio',
                    image: "",
                    alt: 'GitHub icon'
                }],
                alt: 'Github icon'
            }},
            {portfolio: {
                description: 'This is an SPA that is dynamic, and responsive. I used React, extensive js, and axios.',
                links: [{
                    url: 'https://mark-mcdaniels.com',
                    image: '',
                    alt: 'My portfolio site'
                },
                {
                    url: 'https://github.com/MarkMcDaniels/mm',
                    image: '',
                    alt: "Portfolio Code on github"
                }
            ],
                alt: 'My portfolio site'
            }},
            {spaceLaunch:{
                description: "A SPA created in React that uses SpaceX's api for upcoming launches.",
                links: [{
                    url: 'https://mark-mcdaniels.com/spacelauncher',
                    image: '',
                    alt: 'Space launch icon'

                },
                {
                    url: 'https://github.com/MarkMcDaniels/space-stream',
                    image: '',
                    alt: 'Space launch github'
                }
            ],
                alt: 'Space launch github'

            }}
            
        ],
        opacity: '0',
        imgWidth: '420px',
        imgHeight: '500px',
        // mobile 100px
        mobileImgWidth: '100px',
        mobileImgHeight:  (100/0.84) + 'px'
    }

    componentDidMount(){
        

        

        this.setState({
            opacity: '1'
        });

        
        if(!this.props.mobile){const hushedAppImg = document.getElementById('hushedAppImg').style.width;
        
        
        this.getComponentHeight();}
        window.addEventListener('resize', this.getComponentHeight.bind(this));
    
   
        
    }

    getComponentHeight = () => {
        const curWidth = document.getElementById('mm_main').clientWidth;
        // Looks strange, but I'm finding width by ratio for the screen with total width, and then getting the height by ratio to the screen width.
        let newHeight = (curWidth / 1.85) / 1.91;
        
        // Sets new height dynamically
        const url = window.location.pathname;
        if(url === '/projects' && window.innerWidth > 649){
            const project = document.getElementById('projects_screen');
            project.style.height = String(newHeight) + "px";
        }
        // Project image dimensions
        let imgWidth = curWidth/ 10.03;
        let imgHeight = imgWidth /0.84;
        let mobileImgHeight = this.state.mobileImgHeight;
        let mobileImgWidth = this.state.mobileImgWidth;

        if(window.innerWidth < 649 && window.innerWidth > 401){
            newHeight = '100%';
            mobileImgHeight = (100/0.84) + 'px';
            mobileImgWidth = '100px';
        }
        
        if(window.innerWidth < 400){
            mobileImgWidth = '70px';
            mobileImgHeight = (70/0.84) + 'px';
            newHeight = '100%';
        }



        this.setState({
            projects: {
                height: newHeight
            },
            imgWidth: imgWidth,
            imgHeight: imgHeight,
            mobileImgWidth: mobileImgWidth,
            mobileImgHeight: mobileImgHeight
        });

    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.getComponentHeight.bind(this));
    }

    render(){

        // Couldn't map them in an abstract way because of how react imports images. Need to figure out if there is an alternative.
        
        // html structure => <div><div><img /><a></a></div><div><a></a><a></a></div></div>;
        
        let listStyle = {
            'display': 'flex', 
            'justifyContent': 'center', 
            'marginBottom' : "5%", 
            'marginTop' : '-7%'
        };

        let pStyle = {'fontSize': '1.3vw', 
        'padding' : '4%', 
        'justifyContent': 
        'flex-start', 
        "display": 'flex', 
        'textAlign': 'left'
        };

        let styles = {
            'height': this.state.projects.height,
            'opacity': this.state.opacity,
            'backgroundColor': 'white'
        };

        

        let projects = (<React.Fragment>
            <div id="projects_screen" className='Projects' style={styles}>
            <p className="Project_title">Projects</p>
                <div className="Project_list">
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="portfolioImg" className="Project_item" >
                            <div
                            style={{'flex': 'none','backgroundImage': 'url(' + require('./portfolio-site-projects.svg') + ')', 'width' : this.state.imgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid lightskyblue', 'borderRadius' : '10px', 'height' : this.state.imgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}} >
                                

                            </div>
                            <p style={pStyle}>{this.state.projectList[3].portfolio.description}</p>
                        </div>
                        <div style={listStyle}>
                            <a style={{'marginRight': '2%'}} href={this.state.projectList[3].portfolio.links[0].url} title={this.state.projectList[3].portfolio.links[0].alt} ><i className="fa fa-link" style={{'color': 'slategray', 'fontSize': '1.8vw', 'marginRight': '3%'}}></i></a>
                            <a href={this.state.projectList[3].portfolio.links[1].url} title={this.state.projectList[3].portfolio.links[1].alt} ><i className="fa fa-github" style={{'color': 'slategray', 'fontSize': '1.8vw'}}></i></a>
                            
                        </div>
                    </div>
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="hushedAppImg" className="Project_item" >
                            <div style={{'flex': 'none','backgroundImage': 'url(' + require('./hushed-app-projects.svg') + ')', 'width' : this.state.imgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid black', 'borderRadius' : '10px', 'height' : this.state.imgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}}>
                        </div>
                        <p style={pStyle}>{this.state.projectList[0].hushedApp.description}</p>
                        </div>
                        <div style={listStyle}>
                            <a href={this.state.projectList[0].hushedApp.links[0].url} title="Hushed app on Google play store"><i className="fa fa-link" style={{'color': 'slategray', 'fontSize': '1.8vw'}}></i></a>
                        </div>
                    </div>
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="hushedSiteImg" className="Project_item" >
                            <div style={{'flex': 'none','backgroundImage': 'url(' + require('./hushed-site-projects.svg') + ')', 'width' : this.state.imgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid red', 'borderRadius' : '10px', 'height' : this.state.imgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}}>
                            </div>
                            <p style={pStyle}>{this.state.projectList[1].hushedSite.description}</p>
                        </div>
                        <div style={listStyle}><a href={this.state.projectList[1].hushedSite.links[0].url} title="Hushed Responsive site"><i className="fa fa-link" style={{'color': 'slategray', 'fontSize': '1.8vw'}}></i></a></div>
                    </div>
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>  
                        <div id="spaceLaunchImg" className="Project_item" >
                            <div
                            style={{'flex': 'none','backgroundImage': 'url(' + require('./spacelaunch-app-projects.svg') + ')', 'width' : this.state.imgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid black', 'borderRadius' : '10px', 'height' : this.state.imgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}} >
                                

                            </div>
                            <p style={pStyle}>{this.state.projectList[4].spaceLaunch.description}</p>
                            </div>
                            <div style={listStyle}>
                                <a style={{'marginRight': '2%'}} href={this.state.projectList[4].spaceLaunch.links[0].url} title={this.state.projectList[4].spaceLaunch.links[0].alt} ><i className="fa fa-link" style={{'color': 'slategray', 'fontSize': '1.8vw', 'marginRight': '3%'}}></i></a>
                                <a href={this.state.projectList[4].spaceLaunch.links[1].url} title={this.state.projectList[4].spaceLaunch.links[1].alt} ><i className="fa fa-github" style={{'color': 'slategray', 'fontSize': '1.8vw'}}></i></a>
                            </div>
                        
                    </div>
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="wordpressImg" className="Project_item" ><div style={{'flex': 'none','backgroundImage': 'url(' + require('./wordpress-theme-projects.svg') + ')', 'width' : this.state.imgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid black', 'borderRadius' : '10px', 'height' : this.state.imgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}}></div><p style={pStyle}>{this.state.projectList[2].wordpress.description}</p>
                        </div>
                        <div style={listStyle}><a href={this.state.projectList[2].wordpress.links[0].url} title="Theme on github"><i className="fa fa-github" style={{'color': 'slategray', 'fontSize': '1.8vw'}}></i></a></div>
                    </div>
                    <div><p></p></div><div><a></a><a></a></div>
                    <div><p></p></div><div><a></a><a></a></div>
                </div>
                </div>
        </React.Fragment>);

        if(this.props.mobile){

            

            styles = {
                'backgroundColor': 'white',
                'width': '100%',
                'height': '100%',
                'position': 'absolute',
                'margin': '0px',
                //'fontSize': '0.8rem',
               // 'backgroundSize': '100%'
                'boxSizing': 'border-box',
                'overflow': 'auto'
            };

           

            listStyle = {
                ...listStyle,
                'marginTop': '-4%'
            }

            if(window.innerWidth < 649 && window.innerWidth > 401){
                pStyle = {
                    ...pStyle,
                    'fontSize': '0.8rem',
                    'color': 'slategray',
                    'margin': '0px',
                    'paddingTop': '0px'
                }
            }

            if(window.innerWidth < 400){
                pStyle = {
                    ...pStyle,
                    'fontSize': '0.6rem',
                    'color': 'slategray',
                    'margin': '0px',
                    'paddingTop': '0px'
                }
            }


            projects = (<React.Fragment><div id="projects_screen" className='Projects_mobile' style={styles}>
            <p className="Project_title_mobile">Projects</p>
                <div className="Project_list">
                <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="portfolioImg" className="Project_item_mobile" >
                            <div
                            style={{'flex': 'none','backgroundImage': 'url(' + require('./portfolio-site-projects.svg') + ')', 'width' : this.state.mobileImgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid lightskyblue', 'borderRadius' : '10px', 'height' : this.state.mobileImgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}} >
                                

                            </div>
                            <p style={pStyle}>{this.state.projectList[3].portfolio.description}</p>
                        </div>
                        <div style={listStyle}>
                            <a style={{'marginRight': '2%'}} href={this.state.projectList[3].portfolio.links[0].url} title={this.state.projectList[3].portfolio.links[0].alt} ><i className="fa fa-link" style={{'color': 'slategray', 'fontSize': '1.5rem', 'marginRight': '3%'}}></i></a>
                            <a href={this.state.projectList[3].portfolio.links[1].url} title={this.state.projectList[3].portfolio.links[1].alt} ><i className="fa fa-github" style={{'color': 'slategray', 'fontSize': '1.5rem'}}></i></a>
                            
                        </div>
                    </div>
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="hushedAppImg" className="Project_item_mobile" ><div style={{'flex': 'none','backgroundImage': 'url(' + require('./hushed-app-projects.svg') + ')', 'width' : this.state.mobileImgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid black', 'borderRadius' : '10px', 'height' : this.state.mobileImgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}}></div><p style={pStyle}>{this.state.projectList[0].hushedApp.description}</p>
                        </div>
                        <div style={listStyle}><a href={this.state.projectList[0].hushedApp.links[0].url} title="Hushed app on Google play store"><i className="fa fa-link" style={{'color': 'slategray', 'fontSize': '1.5rem'}}></i></a></div>
                    </div>
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="hushedSiteImg" className="Project_item_mobile" ><div style={{'flex': 'none','backgroundImage': 'url(' + require('./hushed-site-projects.svg') + ')', 'width' : this.state.mobileImgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid red', 'borderRadius' : '10px', 'height' : this.state.mobileImgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}}></div><p style={pStyle}>{this.state.projectList[1].hushedSite.description}</p>
                        </div>
                        <div style={listStyle}><a href={this.state.projectList[1].hushedSite.links[0].url} title="Hushed Responsive site"><i className="fa fa-link" style={{'color': 'slategray', 'fontSize': '1.5rem'}}></i></a></div>
                    </div>
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="portfolioImg" className="Project_item_mobile" >
                            <div
                            style={{'flex': 'none','backgroundImage': 'url(' + require('./spacelaunch-app-projects.svg') + ')', 'width' : this.state.mobileImgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid lightskyblue', 'borderRadius' : '10px', 'height' : this.state.mobileImgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}} >
                                

                            </div>
                            <p style={pStyle}>{this.state.projectList[4].spaceLaunch.description}</p>
                        </div>
                        <div style={listStyle}>
                            <a style={{'marginRight': '2%'}} href={this.state.projectList[4].spaceLaunch.links[0].url} title={this.state.projectList[4].spaceLaunch.links[0].alt} ><i className="fa fa-link" style={{'color': 'slategray', 'fontSize': '1.5rem', 'marginRight': '3%'}}></i></a>
                            <a href={this.state.projectList[4].spaceLaunch.links[1].url} title={this.state.projectList[4].spaceLaunch.links[1].alt} ><i className="fa fa-github" style={{'color': 'slategray', 'fontSize': '1.5rem'}}></i></a>
                            
                        </div>
                    </div>
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="wordpressImg" className="Project_item_mobile" ><div style={{'flex': 'none','backgroundImage': 'url(' + require('./wordpress-theme-projects.svg') + ')', 'width' : this.state.mobileImgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid black', 'borderRadius' : '10px', 'height' : this.state.mobileImgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}}></div><p style={pStyle}>{this.state.projectList[2].wordpress.description}</p>
                        </div>
                        <div style={listStyle}><a href={this.state.projectList[2].wordpress.links[0].url} title="Theme on github"><i className="fa fa-github" style={{'color': 'slategray', 'fontSize': '1.5rem'}}></i></a></div>
                    </div>
                    <div><p></p></div><div><a></a><a></a></div>
                    <div><p></p></div><div><a></a><a></a></div>
                </div>
                </div></React.Fragment>);
        }
       

        

        return (
            <React.Fragment>
                {projects}
            </React.Fragment>
                
              
            
            
        );
    }
}


export default Projects;