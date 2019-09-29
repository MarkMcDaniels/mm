import React, { Component } from 'react';
import './Space.css';

import Canvas from '../Canvas/Canvas';

class Space extends Component {

    state = {
        height: this.props.styles.height,
        width: this.props.styles.width
    }

    componentDidMount(){
        window.addEventListener('resize', this.getHeight.bind(this));
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.getHeight.bind(this));
    }

    getHeight = () => {
        const curWidth = window.innerWidth;
        const height = curWidth / this.props.ratio;
        this.setState({
            width: curWidth + 'px',
            height: height + 'px'
        });
    };

    render(){

        let space = <div id="space" style={this.props.styles}>
            <Canvas spaceWidth={this.state.width} spaceHeight={this.state.height} ratio={this.props.ratio} />
        </div>;
        if(this.props.mobile){
            space = null; 
        }
        
        return(
            <React.Fragment>
                {space}
            </React.Fragment>
        );
    }
}

export default Space;