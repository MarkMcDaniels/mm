import React, { Component } from 'react';

class Screen extends Component {

    
    render(){

        let screen = <div id="screen" style={this.props.styles}></div>;
        if(this.props.mobile){
            screen = null;
        }

        return(
            <React.Fragment>
                {screen}
            </React.Fragment>
        );
    }
}

export default Screen;