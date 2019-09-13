import React, { Component } from 'react';
import "./Codepen.css";

class Codepen extends Component {

    state = {
        codepen : {
            height: '600px'
        },
        opacity: '0'
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
        console.log('[newHeight in projects] ' + newHeight);
        
        // Sets new height dynamically --- while switching screens it would throw a reference error so I height now exits for only current path.
        const url = window.location.pathname;
        if(url === '/codepen'){
            const codepen  = document.getElementById('codepen_screen');
            codepen.style.height = String(newHeight) + "px";
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
            'height': this.state.codepen.height,
            'opacity': this.state.opacity
        };

        return (
            <div className="Codepen" id="codepen_screen" style={styles}>
                <p className="Codepen_title">Codepen</p>
                <div className="Codepen_list">
                    <a href='https://codepen.io/MarkMcDaniels'><i className="fa fa-codepen"></i>My Codepen collection. It has the Free Codecamp certificate projects, and assorted practice code.</a>
                    <a href='https://codepen.io/MarkMcDaniels/pen/MZwVyG'><i className="fa fa-hourglass"></i>A pomodoro clock built in react.</a>
                    <a href='https://codepen.io/MarkMcDaniels/pen/aQzORL'><i className="fa fa-calculator"></i>A react javascript clock.</a>
                    <a href='https://codepen.io/MarkMcDaniels/pen/GYaYKg'><i className="fa fa-codepen"></i>A Javascript drumkit.</a>
                </div>
            </div>
        );

    }
}

export default Codepen;