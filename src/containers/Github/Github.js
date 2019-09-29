import React, { Component } from 'react';
import "./Github.css";

class Github extends Component {

    state = {
        opacity: '0',
        github: {
            height: '100%'
        }
    }

    componentDidMount(){
        
        this.setState({
            opacity: '1'
        });

        

        this.getComponentHeight();
        window.addEventListener('resize', this.getComponentHeight.bind(this));
    }

    getComponentHeight = () => {
        const curWidth = document.getElementById('mm_main').clientWidth;


        // Looks strange, but I'm finding width by ratio for the screen with total width, and then getting the height by ratio to the screen width. 
        let newHeight = (curWidth / 1.85) / 1.91;
        
        // Sets new height dynamically
        const url = window.location.pathname;
        if(url === '/github' && window.innerWidth > 649){
            const github = document.getElementById('github_screen');
            github.style.height = String(newHeight) + "px";
        } else {
            newHeight = '100%';
        }

        if(window.innerWidth < 649){
            newHeight = '100%';
        }



        // Project image dimensions
        let imgWidth = curWidth/ 10.03;
        let imgHeight = imgWidth /0.84;



        this.setState({
            github: {
                height: newHeight
            },
            imgWidth: imgWidth,
            imgHeight: imgHeight
        });
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.getComponentHeight.bind(this));
    }

    render(){

        let mList = null;
        let pStyle = null;
        let mIcon = null;

        let styles = {
            'height': this.state.github.height,
            'opacity': this.state.opacity,
            'textAlign': 'center'
        };

        if(window.innerWidth < 649){
            styles = {
                'backgroundColor': 'white',
                'width': '100%',
                'height': '100%',
                'overflow': 'auto'
            };

            mList = {
                'fontSize': '0.8rem'
            };

            pStyle = {
                'fontSize': '1.5rem',

                'textAlign': 'center'
            };

            mIcon = {
                'fontSize': '2.5rem',
                'width': '35px'
            };
        }


        return(
            <div id="github_screen" className="Github" style={styles}>
                <p style={pStyle} className="Github_title">Repos</p>
                <div className="Github_list" >
                    <a  style={mList} href="https://github.com/MarkMcDaniels?tab=repositories" title="Github repo's"><i style={mIcon} className="fa fa-github"></i>My main repository list.</a>
                    <a style={mList} href="https://github.com/MarkMcDaniels/mm" title="This website"><i style={mIcon} className="fa fa-trademark"></i>This portfolio website. Fully dynamic SPA written with react, and react-router.</a>
                    <a style={mList} href="https://github.com/MarkMcDaniels/space-stream" title="Spacex launch schedule"><i style={mIcon} className="fa fa-space-shuttle"></i>A SPA that uses Spacex's api. Built with react, react-router, and I use axios to query Spacex.</a>
                    <a style={mList} href="https://github.com/MarkMcDaniels/FCC-Front-end-Libraries-Projects" title="Free code camp projects"><i style={mIcon} className="fa fa-code"></i>Free Code camps front end certificate final projects. They're all built with react, react-redux, and sass.</a>
                    <a style={mList} href="https://github.com/MarkMcDaniels/stars" title="Paralaxing stars effect"><i style={mIcon} className="fa fa-star"></i>This is my paralaxing stars code.</a>
                </div>
            </div>
        );
    }
}

export default Github;