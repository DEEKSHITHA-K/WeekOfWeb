// https://www.w3schools.com/html/html5_canvas.asp -> more details in the tutorial

let c = document.getElementById("myCanvas");     //We have created a 'canvas tag' in our HTML file and trying to change it with javascript.
let ctx = c.getContext("2d");   //creating a 2d context. All successive commands are written using this context element.

let drawLine = (startX,startY, endX, endY) => {
    ctx.beginPath();   //Begin a path
    ctx.moveTo(startX, startY); //Move to startX, startY
    ctx.lineTo(endX, endY);  //Move the cursor to endX, endY 
    ctx.stroke();  // then the path that is created
    };

//Head
ctx.beginPath();
ctx.arc(250,100,50,0,2*Math.PI);    //ctx.arc(x_OfCenter, y_OfCenter, radius, statringingAngle, endingAngle) -> draws an arc with given paarmeters
ctx.stroke();

// For body -> vertically staright line
// ctx.beginPath();
// ctx.moveTo(250, 150);
// ctx.lineTo(150, 350);
// ctx.stroke()
//We should make this for right left arms and legs. So instead we are writing a function which accepts startX, startY, endX, endY and draws a line


drawLine(250, 150, 250, 350);   //body   -> vertically st. line => x coordinate contant
drawLine(250, 200, 150, 150);   //Right arm
drawLine(250, 200, 350, 150);   //Left arm
drawLine(250, 350, 225, 450);   //Right leg
drawLine(250, 350, 275, 450);   //left leg



