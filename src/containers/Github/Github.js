import React, { Component } from 'react';
import "./Github.css";

class Github extends Component {

    state = {
        opacity: '0',
        github: {
            height: '600px'
        }
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
        console.log('[curWidth] '+ curWidth);

        // Looks strange, but I'm finding width by ratio for the screen with total width, and then getting the height by ratio to the screen width. They happen to be the same numerically.
        let newHeight = (curWidth / 1.85) / 1.91;
        console.log('[newHeight in github] ' + newHeight);
        
        // Sets new height dynamically
        const url = window.location.pathname;
        if(url === '/github'){
            const github = document.getElementById('github_screen');
            github.style.height = String(newHeight) + "px";
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

        const styles = {
            'height': this.state.github.height,
            'opacity': this.state.opacity
        };


        return(
            <div id="github_screen" className="Github" style={styles}>
                <p className="Github_title">Repos</p>
                <div className="Github_list">
                    <a href="https://github.com/MarkMcDaniels?tab=repositories"><i className="fa fa-github"></i>My main repository list.</a>
                    <a href="https://github.com/MarkMcDaniels/mm"><i className="fa fa-trademark"></i>This portfolio website. Fully dynamic SPA written with react, and react-router.</a>
                    <a href="https://github.com/MarkMcDaniels/space-stream"><i className="fa fa-space-shuttle"></i>A SPA that uses Spacex's api. Built with react, react-router, and I use axios to query Spacex.</a>
                    <a href="https://github.com/MarkMcDaniels/FCC-Front-end-Libraries-Projects"><i className="fa fa-code"></i>Free Code camps front end certificate final projects. They're all built with react, react-redux, and sass.</a>
                    <a href="https://github.com/MarkMcDaniels/stars"><i className="fa fa-star"></i>This is my paralaxing stars code.</a>
                </div>
            </div>
        );
    }
}

export default Github;