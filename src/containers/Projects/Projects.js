import React, { Component } from 'react';
import "./Projects.css";

// import HushedApp from '../../assets/images/hushed-app-projects.svg';
// import HushedSite from '../../assets/images/hushed-site-projects.svg';
// import SpaceDev from '../../assets/images/spacedev-theme-projects.png';


class Projects extends Component {

    state = {
        projects: {
            height: '600px'
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
            {spacedev: {
                //image: SpaceDev,
                description: 'This is a free WordPress theme.',
                links: [{
                    url: 'https://github.com/MarkMcDaniels/myportfolio',
                    image: "",
                    alt: 'GitHub icon'
                }],
                alt: 'SpaceDev icon'
            }}
        ],
        opacity: '0',
        imgWidth: '420px',
        imgHeight: '500px'
    }

    componentDidMount(){
        

        

        this.setState({
            opacity: '1'
        });

        
        if(!this.props.mobile){const hushedAppImg = document.getElementById('hushedAppImg').style.width;
        console.log(hushedAppImg + " THE WIDTH");

        
        this.getComponentHeight();}
        window.addEventListener('resize', this.getComponentHeight.bind(this));
    
        //window.onresize = this.getComponentHeight.bind(this);
        
    }

    getComponentHeight = () => {
        const curWidth = document.getElementById('mm_main').clientWidth;
        console.log('[curWidth] '+ curWidth);

        // Looks strange, but I'm finding width by ratio for the screen with total width, and then getting the height by ratio to the screen width. They happen to be the same numerically.
        let newHeight = (curWidth / 1.85) / 1.91;
        console.log('[newHeight in projects] ' + newHeight);
        
        // Sets new height dynamically
        const url = window.location.pathname;
        if(url === '/projects'){
            const project = document.getElementById('projects_screen');
            project.style.height = String(newHeight) + "px";
        }
        // Project image dimensions
        let imgWidth = curWidth/ 10.03;
        let imgHeight = imgWidth /0.84;

        console.log('[imgWidth] ' + imgWidth);
        console.log('[imgHeight] ' + imgHeight);


        this.setState({
            projects: {
                height: newHeight
            },
            imgWidth: imgWidth,
            imgHeight: imgHeight
        });

        //console.log('[projectImg w h] ' + imgWidth + " : " + imgHeight);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.getComponentHeight.bind(this));
    }

    render(){

        // Couldn't map them in an abstract way because of how react imports images. Need to figure out if there is an alternative.
        
        // html structure => <div><div><img /><a></a></div><div><a></a><a></a></div></div>;
        
        const listStyle = {
            'display': 'flex', 
            'justifyContent': 'center', 
            'marginBottom' : "5%", 
            'marginTop' : '-7%'
        };

        const pStyle = {'fontSize': '1.3vw', 
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
                <div className="Hr"></div>
                <div className="Project_list">
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="hushedAppImg" className="Project_item" ><div style={{'flex': 'none','backgroundImage': 'url(' + require('./hushed-app-projects.svg') + ')', 'width' : this.state.imgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid black', 'borderRadius' : '10px', 'height' : this.state.imgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}}></div><p style={pStyle}>{this.state.projectList[0].hushedApp.description}</p>
                        </div>
                        <div style={listStyle}><a href={this.state.projectList[0].hushedApp.links[0].url} title="Hushed app on Google play store"><i className="fa fa-link" style={{'color': 'slategray', 'fontSize': '1.8vw'}}></i></a></div>
                    </div>
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="hushedSiteImg" className="Project_item" ><div style={{'flex': 'none','backgroundImage': 'url(' + require('./hushed-site-projects.svg') + ')', 'width' : this.state.imgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid red', 'borderRadius' : '10px', 'height' : this.state.imgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}}></div><p style={pStyle}>{this.state.projectList[1].hushedSite.description}</p>
                        </div>
                        <div style={listStyle}><a href={this.state.projectList[1].hushedSite.links[0].url} title="Hushed Responsive site"><i className="fa fa-link" style={{'color': 'slategray', 'fontSize': '1.8vw'}}></i></a></div>
                    </div>
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="spaceDevImg" className="Project_item" ><div style={{'flex': 'none','backgroundImage': 'url(' + require('./spacedev-theme-projects.png') + ')', 'width' : this.state.imgWidth, 'backgroundRepeat': 'no-repeat', 'border' : '1px solid black', 'borderRadius' : '10px', 'height' : this.state.imgHeight, 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}}></div><p style={pStyle}>{this.state.projectList[2].spacedev.description}</p>
                        </div>
                        <div style={listStyle}><a href={this.state.projectList[2].spacedev.links[0].url} title="Theme on github"><i className="fa fa-github" style={{'color': 'slategray', 'fontSize': '1.8vw'}}></i></a></div>
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
                'padding': '0px',
                'margin': '0px',
                'fontSize': '0.8rem'
            };


            projects = (<React.Fragment><div id="projects_screen" className='Projects_mobile' style={styles}>
            <p className="Project_title">Projects</p>
                <div className="Hr"></div>
                <div className="Project_list">
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="hushedAppImg" className="Project_item_mobile" ><div style={{'flex': 'none','backgroundImage': 'url(' + require('./hushed-app-projects.svg') + ')', 'width' : '100px', 'backgroundRepeat': 'no-repeat', 'border' : '1px solid black', 'borderRadius' : '10px', 'height' : (100/0.84) + "px", 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}}></div><p style={pStyle}>{this.state.projectList[0].hushedApp.description}</p>
                        </div>
                        <div style={listStyle}><a href={this.state.projectList[0].hushedApp.links[0].url} title="Hushed app on Google play store"><i className="fa fa-link" style={{'color': 'slategray', 'fontSize': '1.8vw'}}></i></a></div>
                    </div>
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="hushedSiteImg" className="Project_item_mobile" ><div style={{'flex': 'none','backgroundImage': 'url(' + require('./hushed-site-projects.svg') + ')', 'width' : '100px', 'backgroundRepeat': 'no-repeat', 'border' : '1px solid red', 'borderRadius' : '10px', 'height' : (100/0.84) + "px", 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}}></div><p style={pStyle}>{this.state.projectList[1].hushedSite.description}</p>
                        </div>
                        <div style={listStyle}><a href={this.state.projectList[1].hushedSite.links[0].url} title="Hushed Responsive site"><i className="fa fa-link" style={{'color': 'slategray', 'fontSize': '1.8vw'}}></i></a></div>
                    </div>
                    <div style={{'display' : 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'marginBottom': '5%'}}>
                        <div id="spaceDevImg" className="Project_item_mobile" ><div style={{'flex': 'none','backgroundImage': 'url(' + require('./spacedev-theme-projects.png') + ')', 'width' : '100px', 'backgroundRepeat': 'no-repeat', 'border' : '1px solid black', 'borderRadius' : '10px', 'height' : (100/0.84) + "px", 'backgroundSize': 'cover', 'boxSizing' : 'border-box', 'alignItems' : 'flex-start'}}></div><p style={pStyle}>{this.state.projectList[2].spacedev.description}</p>
                        </div>
                        <div style={listStyle}><a href={this.state.projectList[2].spacedev.links[0].url} title="Theme on github"><i className="fa fa-github" style={{'color': 'slategray', 'fontSize': '1.8vw'}}></i></a></div>
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