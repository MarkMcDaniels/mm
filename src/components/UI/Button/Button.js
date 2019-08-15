import React from 'react';

const button = (props) => {
    

    let styles = {};
    let position = {};
    let title = null;
    

    const theKeys = Object.keys(props.styles);
    
    

    theKeys.forEach((key, index) => {
        if(key !== "type" || key !== 'newMargin'){

            
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

        case 'home':
            title= 'Home';
            break;

        case 'codepen':
            title = "Codepen";
            break;

        case 'git':
            title = "Github";
            break;
            
        case 'contact':
            title = 'Contact';
            break;

        case 'cv':
            title = 'Resume';

            break;
        default:
            break;
    }

    return (
        <React.Fragment>
            <div id={props.styles.type} style={styles} onMouseOver={props.hover} onMouseOut={props.hover} title={title} onClick={props.clicked}></div>
        </React.Fragment>
    );
}

export default button;