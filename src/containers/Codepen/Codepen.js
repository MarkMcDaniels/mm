import React, { Component } from 'react';
import "./Codepen.css";

class Codepen extends Component {

    state = {
        codepen : {
            height: '100%'
        },
        opacity: '0'
    }

    componentDidMount(){
        console.log('[opacity before] ' + this.state.opacity);
        this.setState({
            opacity: '1'
        });
        console.log('[opacity after] ' + this.state.opacity);

        this.getComponentHeight();
        window.addEventListener('resize', this.getComponentHeight.bind(this));
    
    }

    getComponentHeight = () => {
        const curWidth = document.getElementById('mm_main').clientWidth;


        // Looks strange, but I'm finding width by ratio for the screen with total width, and then getting the height by ratio to the screen width.
        let newHeight = (curWidth / 1.85) / 1.91;
        
        // Sets new height dynamically --- while switching screens it would throw a reference error so I height now exits for only current path.
        const url = window.location.pathname;
        if(url === '/codepen' && window.innerWidth > 649){
            const codepen  = document.getElementById('codepen_screen');
            codepen.style.height = String(newHeight) + "px";
        } else {
            newHeight = '100%';
        }
        // Project image dimensions
        let imgWidth = curWidth/ 10.03;
        let imgHeight = imgWidth /0.84;



        this.setState({
            codepen: {
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
            'height': this.state.codepen.height,
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
        console.log('[opacity before return] ' + this.state.opacity);

        return (
            <div className="Codepen" id="codepen_screen" style={styles}>
                <p style={pStyle} className="Codepen_title">Codepen</p>
                <div className="Codepen_list">
                    <a style={mList} href='https://codepen.io/MarkMcDaniels'><i  style={mIcon} className="fa fa-codepen"></i>My Codepen collection. It has the Free Codecamp certificate projects, and assorted practice code.</a>
                    <a style={mList} href='https://codepen.io/MarkMcDaniels/pen/MZwVyG'><i style={mIcon}  className="fa fa-hourglass"></i>A pomodoro clock built in react.</a>
                    <a style={mList} href='https://codepen.io/MarkMcDaniels/pen/aQzORL'><i style={mIcon}  className="fa fa-calculator"></i>A react javascript clock.</a>
                    <a style={mList} href='https://codepen.io/MarkMcDaniels/pen/GYaYKg'><i style={mIcon}  className="fa fa-codepen"></i>A Javascript drumkit.</a>
                </div>
            </div>
        );

    }
}

export default Codepen;