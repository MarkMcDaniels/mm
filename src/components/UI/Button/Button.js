import React from 'react';

const button = (props) => {
    

    let styles = {};
    let title = null;
    

    const theKeys = Object.keys(props.styles);
    
    

    theKeys.forEach((key, index) => {
        if(key !== "type"){
            styles[key] = props.styles[key];
        }
    });

    // console.log(props.styles.type);
    // console.log(styles);
    switch (props.styles.type) {
        case 'project':
            title = 'Projects';
            break;

        case 'linkedin':
            title = "Linkedin";
            break;
            
        default:
            break;
    }

    return (
        <React.Fragment>
            <div id={props.styles.type} style={styles} onMouseOver={props.hover} onMouseOut={props.hover} title={title}></div>
        </React.Fragment>
    );
}

export default button;