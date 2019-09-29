import React, { Component } from 'react';
import "./CV.css";

class CV extends Component {

    state = {
        cv : {
            height: '100%'
        },
        opacity: '0'
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
        
        // Sets new height dynamically --- while switching screens it would throw a reference error so I height now exits for only current path.
        const url = window.location.pathname;
        if(url === '/resume' && window.innerWidth > 649){
            const cv  = document.getElementById('cv_screen');
            cv.style.height = String(newHeight) + "px";
        } else {
            newHeight = '100%';
        }
        // Project image dimensions
        let imgWidth = curWidth/ 10.03;
        let imgHeight = imgWidth /0.84;



        this.setState({
            cv: {
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
        let pTitles = null;
        let cvList = null;

        pStyle = {
            'fontSize': '3.0vw',
            'justifyContent': 'center',
            'textAlign': 'center'
        };

        pTitles = {
            'fontSize': '1.5vw',
            'fontWeight': 'bold'
        }

        let styles = {
            'height': this.state.cv.height,
            'opacity': this.state.opacity
        };

        mIcon = {
            'fontSize': '3.5vw',
            'display': 'flex',
            'justifyContent': 'space-between',
            //'marginLeft': '10%',
            'marginTop': '3%',
            'width': '50%',
            'color': 'slategray'
        };

        if(window.innerWidth < 649){
            styles = {
                'backgroundColor': 'white',
                'width': '100%',
                'height': '100%',
                'overflow': 'auto',
                'padding': '40px',
                'marginTop': '7%'
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
                'minHeight': '150px',
                'display': 'flex',
                'justifyContent': 'space-between',
                'width': '50%'
                
            };

            pTitles = {
                'text-align': 'left'
            }

            cvList = {
                'flexDirection': 'column',
                'justifyContent': 'center',
                'fontSize': '0.8rem',
                'overflow': 'auto'
            }
        }

        return (
            <div className="CV" id="cv_screen" style={styles}>
                <p style={pStyle} className="CV_title">Mark McDaniels</p>
                <p style={pTitles}>SUMMARY:</p>
                <p className="CV_p" style={cvList}>Deadicated to creating quality code, on time, and at a reasonble price. A pragmatic approach to projects, and tasks that allows for finished products that are ready to ship.</p>
                <p className="CV_title" style={pTitles}>SKILLS:</p>
                <div className="CV_list" style={cvList}>
                    <ul style={cvList}>
                        <li>Javascript</li>
                        <li>HTML/CSS</li>
                        <li>SASS</li>
                        <li>REACT</li>
                        <li>PHP</li>
                        
                    </ul>
                    <ul style={cvList}>
                        <li>Python</li>
                        <li>UI design elements</li>
                        <li>Jquery</li>
                        <li>WordPress Theme creation</li>
                        <li>HTML Email</li>
                    </ul>
                </div>
            <p className="CV_title" style={pTitles}>EXPERIENCE:</p>
            <div>
                <div style={{'display': 'flex', 'flexDirection': 'column', 'marginBottom': '70px'}}>
                    <p style={{'marginBottom': '5px'}}><strong>06/2019 to Current</strong></p>
                    <div className="CV_position" style={{'display': 'flex', 'flexDirection': 'row'}}>
                        <p className="CV_position" style={mList} ><strong>Freelance Web Developer</strong></p>
                        <p className="CV_position" style={mList}><strong>Self-Employed</strong> - Greenville, SC</p>
                    </div>
                    
                    <ul style={mList}>
                        <li>Participate in pre-project analysis and technical assessments to develop user-friendly interfaces.</li>
                        <li>Designs for commercial websites.</li>
                        <li>Review project specifications and devise solutions for business needs.</li>
                        <li>Determine technical needs and coordinate requirements.</li>
                        <li>Design logos and icons based on overall design.</li>
                    </ul>
                </div>
                <div style={{'marginBottom': '70px'}} >
                    <p style={{'marginBottom': '5px'}}><strong>03/19 to Current</strong></p>
                    <div className="CV_position" style={{'display': 'flex', 'flexDirection': 'row'}}>
                        <p className="CV_position" style={cvList} ><strong>Volunteer Web Developer</strong></p>
                        <p className="CV_position" style={cvList}><strong>Code for Greenville</strong> - Greenville, SC</p>
                    </div>

                    <ul style={mList}>
                        <li>Designed and implemented UI modal for http://trackthetrolley.com</li>
                        <li>Created custom pagination for track the trolley's schedule modal.</li>
                        <li>Built geojson validation for OpenData's map layers with php. Used Geocodio.io's api for appropriate coordinates.</li>
                        <li>Participating in the design, road-mapping, and implementation of a court bot for the city of Greenville.</li>
                        <li>Part of the team redesigning, and rebuilding https://hackgreenville.com</li>
                    </ul>
                </div>
            </div>
            <p className="CV_title" style={pTitles}><strong>EDUCATION:</strong></p>
            <div style={{'marginBottom': '50px'}}>
                <p style={{'marginBottom': '5px'}}><strong>University of Wisconsin - Milwaukee</strong> - Milwaukee, WI</p>
                <p className="CV_position" style={mList}>Some Colleget(No degree)</p>
            </div>
            <p className="CV_title" style={pTitles}>WEBSITES, PORTFOLIOS, PROFILES:</p>
            <div style={mIcon}>
                <a href="https://mark-mcdaniels.com"><i className="fa fa-link"></i></a>
                <a href="https://github.com/MarkMcDaniels"><i className="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/mark-mcdaniels-68b39789"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>

        );

    }
}

export default CV;