import React from 'react';
import { Link } from 'react-router-dom';
import "./Button.css";

const button = (props) => {
    

    let styles = {};
    let classes = null;
    let title = null;
    

    const theKeys = Object.keys(props.styles);
    let path = null;
    let gridArea = null;
    let img = null;
    let url = null;
    
    theKeys.forEach((key, index) => {
        if(key !== "type" || key !== 'newMargin'){

            
                styles[key] = props.styles[key];
            
        }
    });

    switch (props.styles.type) {
        case 'project':
            title = 'Projects';
            path = '/projects';
            gridArea = 'pro';
            break;

        case 'projectMobile':
            title = "Projects";
            path = '/projects';
            break;

        case 'linkedin':
            title = "Linkedin";
            gridArea = 'lin';
            path = "https://www.linkedin.com/in/mark-mcdaniels-68b39789";
            break;

        case 'home':
            title= 'Home';
            path = '/';
            gridArea = 'hom';
            break;

        case 'homeMobile':
            title = 'Home';
            path = '/';
            break;

        case 'codepen':
            title = "Codepen";
            path = "/codepen";
            gridArea = 'cod';
            break;
        
        case 'codepenMobile':
            title = "Codepen";
            path = "/m-codepen"
            break;

        case 'git':
            title = "Github";
            path = "/github";
            gridArea = 'git';

            break;

        case 'gitMobile':
            title = 'Github';
            path = '/m-githhub';
            break;
            
        case 'contact':
            title = 'Contact';
            path = '/contact';
            gridArea = 'cont';
            break;

        case 'contactMobile':
            title = 'Contact';
            path = '/m-contact';
            break;

        case 'cv':
            title = 'Resume';
            path = '/resume';
            gridArea = 'res';
            break;

        case 'cvMobile':
            title = 'Resume';
            path = '/m-resume';
            break;  

       

        default:
            break;
    }

    if(props.mobile){
        classes = gridArea + " Mobile";
        img = styles['backgroundImage'];

        
        
    }

    let button = (
        <Link to={path}>
            <div id={props.styles.type} className={classes} style={styles} onMouseOver={props.hover} onMouseOut={props.hover} title={title} onClick={props.clicked} onMouseLeave={props.reset} ></div>
        </Link>

        
    );
    
    
    // if(title === 'Linkedin'){
    //     console.log('[title] ' + title);
    //     let button =  (
    //         <a href="https://www.linkedin.com/in/mark-mcdaniels-68b39789">
    //             <div id={props.styles.type} className={classes} style={styles} onMouseOver={props.hover} onMouseOut={props.hover} title={title} onMouseLeave={props.reset} ></div>
    //         </a>
    //     );
    // }
    
    return (
        <div style={{'gridArea': gridArea}}>
            
            {button}
        </div>
    );
}

export default button;