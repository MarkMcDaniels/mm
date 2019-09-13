import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
    }

    state = {
        width: window.innerWidth,
        height: this.props.spaceHeight,
        prevWidth: window.innerWidth
    };

    
    componentDidMount() {

        console.log('[width === prevWidth state start] ' + this.state.width + " ---------- " + this.state.prevWidth);
        // height management
        
        window.addEventListener('resize', this.getHeight.bind(this));
    
        // Drawing stars
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        let count = 0;

        

        // Stars to be created.
        let makeSmallStars = 150;
        let makeMedStars = 80;
        let makeLargeStars = 30;

        // Made star objects.
        let smallStars, medStars, largeStars = [];

        let starSets = [];
        
        // Creates star objects.
        const starNursery = (makeSmallStars, makeMedStars, makeLargeStars) => {
            console.log('[nursery]');
            let smallStars, medStars, largeStars = [];
            
            smallStars = getStars(makeSmallStars, 'small');

            medStars = getStars(makeMedStars, 'med');

            largeStars = getStars(makeLargeStars, 'large');

            
            return [smallStars, medStars, largeStars];
            
        }

        const getStars = (numOfStars, type) => {
            let starSet = [];
            let star = {};

            let x, y, w, h;
            console.log('[getStars]');
            
            switch (type) {
                case 'small':
                    w = 1;
                    h = 1;
                    break;
                
                case 'med':
                    w = 2;
                    h = 2;
                    break;
                
                case 'large':
                    w = 2.7;
                    h = 2.7;
                    break;
                
                default:
                    w = 2;
                    h = 2;
                    break;
            }

            
            
            for(let i = 0; i < numOfStars; i++){
                x = Math.floor(Math.random() * this.state.width + 1);
                y = Math.floor(Math.random() * canvas.height + 1);
                

                star = {'x': x, 'y': y, 'w': w, 'h': h};
                starSet.push(star);
            }

            
            return starSet;        

        }

        starSets = starNursery(makeSmallStars, makeMedStars, makeLargeStars);

        smallStars = starSets[0];
        medStars = starSets[1];
        largeStars = starSets[2];


        const resetWidth = () => {
            this.setState({
                height: this.state.height,
                width: window.innerWidth,
                prevWidth: window.innerWidth
            });
            return window.innerWidth;
        };
        // Responsive width for the canvas.
        
        let height = canvas.height;
        //canvas.width = this.state.width;
        let prevWidth = this.state.prevWidth;
        
        function draw(props){
            let x, y, w, h;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if(canvas.width !== prevWidth){
                //console.log('[width ---- prevWidth ====> draw] ' + canvas.width + " ------- " + prevWidth);
                
                let newWidth = resetWidth();
                canvas.width = newWidth;
                prevWidth = newWidth;

                smallStars = [];
                medStars = [];
                largeStars = [];


                starSets = starNursery(makeSmallStars, makeMedStars, makeLargeStars);

                smallStars = starSets[0];
                medStars = starSets[1];
                largeStars = starSets[2];
                
                //console.log('[AFTER RESET] ' + canvas.width + " : " + prevWidth);
                
            }
            
            for ( let star of smallStars){

                x = star['x'];
                y = star['y'];
                w = star['w'];
                h = star['h'];

                if(y > -10){
                    // Erases and removes the star. Advances it for next cycle.
                    ctx.clearRect(x, y, w, h);
                    star['y'] -= 0.8;
                    y = star['y'];
                    
                } else {
                    // Loops star to the bottom.
                    star['y'] = canvas.height;
                    y = canvas.height;

                }

                // Draws the star.
                ctx.fillStyle = 'white';
                ctx.fillRect(x, y, w, h);

            }

            for ( let star of medStars){

                x = star['x'];
                y = star['y'];
                w = star['w'];
                h = star['h'];


                if(y > -10){
                    // Erases and removes the star. Advances it for next cycle.
                    ctx.clearRect(x, y, w, h);
                    star['y'] -= 1.0;
                    y = star['y'];
                    
                } else {

                    // Loops star to the bottom.
                    star['y'] = canvas.height;
                    y = canvas.height;
                    
                }

                // Draws the star.
                ctx.fillStyle = 'white';
                ctx.fillRect(x, y, w, h);

            }

            for ( let star of largeStars){

                x = star['x'];
                y = star['y'];
                w = star['w'];
                h = star['h'];


                if(y > -10){
                    // Erases and removes the star. Advances it for next cycle.
                    ctx.clearRect(x, y, w, h);
                    star['y'] -= 1.2;
                    y = star['y'];
                    
                } else {
                    // Loops star to the bottom.
                    star['y'] = canvas.height;
                    y = canvas.height;

                }

                // Draws the star.
                ctx.fillStyle = 'white';
                ctx.fillRect(x, y, w, h);

            }


            //console.log('[canvas.height --- canvas] ' + canvas.height);
            window.requestAnimationFrame(draw);
            
        }
        
        window.requestAnimationFrame(draw);
        
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.getHeight.bind(this));
    }

    getHeight = () => {
        const curWidth = window.innerWidth;
        const height = curWidth / this.props.ratio;
       
        

        let prevWidth = this.state.width;
        // let spaceWidth = document.getElementById('space').style.width;
        // console.log('[spaceWidth + curWidth in getHeight] ' + spaceWidth + " : " + curWidth);
        

        this.setState({
            width: curWidth,
            height: height,
            prevWidth
        });
        
        
    };

    runStars = () => {
        
    };

    componentDidUpdate(prevProps){
        //this.runStars();
    }
    

// runStars = (props) => {
// /*
//   *
//   *  ================================ Star creation and animation ===============================
//   * 
//   */
  
//   console.log('[props width] ' + props.spaceWidth);
//   // let width = document.getElementById('stars').clientWidth;
//   // let height = document.getElementById('stars').clientHeight;
  
//   const canvas = document.getElementById('stars');
//   const ctx = canvas.getContext("2d");

//   // Stars to be created.
//   let makeSmallStars = 200;
//   let makeMedStars = 100;
//   let makeLargeStars = 50;

//   // Made star objects.
//   let smallStars, medStars, largeStars = [];

//   let starSets = [];
  
//   // Creates star objects.
//   const starNursery = (makeSmallStars, makeMedStars, makeLargeStars) => {
      
//       let smallStars, medStars, largeStars = [];
      
//       smallStars = getStars(makeSmallStars, 'small');

//       medStars = getStars(makeMedStars, 'med');

//       largeStars = getStars(makeLargeStars, 'large');

      
//       return [smallStars, medStars, largeStars];
      
//   }

//   const getStars = (numOfStars, type) => {
//       let starSet = [];
//       let star = {};

//       let x, y, w, h;
      
      
//       switch (type) {
//           case 'small':
//               w = 1;
//               h = 1;
//               break;
          
//           case 'med':
//               w = 2;
//               h = 2;
//               break;
          
//           case 'large':
//               w = 2.7;
//               h = 2.7;
//               break;
          
//           default:
//               w = 2;
//               h = 2;
//               break;
//       }

//       for(let i = 0; i < numOfStars; i++){
//           x = Math.floor(Math.random() * props.spaceWidth + 1);
//           y = Math.floor(Math.random() * props.spaceHeight + 1);
          

//           star = {'x': x, 'y': y, 'w': w, 'h': h};
//           starSet.push(star);
//       }

      
//       return starSet;        

//   }

//   starSets = starNursery(makeSmallStars, makeMedStars, makeLargeStars);

//   smallStars = starSets[0];
//   medStars = starSets[1];
//   largeStars = starSets[2];

//   // Responsive width for the canvas.
//   canvas.width = this.props.spaceWidth;

//   function draw(){
//       
//     //   let x, y, w, h;
//     //   ctx.clearRect(0, 0, canvas.width, canvas.height);

//     //   for ( let star of smallStars){

//     //       x = star['x'];
//     //       y = star['y'];
//     //       w = star['w'];
//     //       h = star['h'];
          

//     //       if(y > -10){
//     //           // Erases and removes the star. Advances it for next cycle.
//     //           ctx.clearRect(x, y, w, h);
//     //           star['y'] -= 0.5;
//     //           y = star['y'];
              
//     //       } else {
//     //           // Loops star to the bottom.
//     //           star['y'] = props.spaceHeight;
//     //           y = props.spaceHeight;

//     //       }

//     //       // Draws the star.
//     //       ctx.fillStyle = 'white';
//     //       ctx.fillRect(x, y, w, h);

//     //   }

//     //   for ( let star of medStars){

//     //       x = star['x'];
//     //       y = star['y'];
//     //       w = star['w'];
//     //       h = star['h'];


//     //       if(y > -10){
//     //           // Erases and removes the star. Advances it for next cycle.
//     //           ctx.clearRect(x, y, w, h);
//     //           star['y'] -= 0.8;
//     //           y = star['y'];
              
//     //       } else {

//     //           // Loops star to the bottom.
//     //           star['y'] = props.spaceHeight;
//     //           y = props.spaceHeight;
             
//     //       }

//     //       // Draws the star.
//     //       ctx.fillStyle = 'white';
//     //       ctx.fillRect(x, y, w, h);

//     //   }

//     //   for ( let star of largeStars){

//     //       x = star['x'];
//     //       y = star['y'];
//     //       w = star['w'];
//     //       h = star['h'];


//     //       if(y > -10){
//     //           // Erases and removes the star. Advances it for next cycle.
//     //           ctx.clearRect(x, y, w, h);
//     //           star['y'] -= 1;
//     //           y = star['y'];
              
//     //       } else {
//     //           // Loops star to the bottom.
//     //           star['y'] = props.spaceHeight;
//     //           y = props.spaceHeight;

//     //       }

//     //       // Draws the star.
//     //       ctx.fillStyle = 'white';
//     //       ctx.fillRect(x, y, w, h);

//       }

//       window.requestAnimationFrame(draw);
//   }
  
//   window.requestAnimationFrame(draw);
// };

    render(){
        return (
            <canvas id="stars" ref={this.canvasRef} style={{'zIndex': '100', 'width': '100%'}} height={this.state.height} width={this.state.width} />
            
        );
    }
}

export default Canvas;