// https://youtu.be/j-m0ClESrXw - > vedic vedio


let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

let drawCircle = (centreX, centreY, radius, startingAngle, endingAngle, color) => {
	ctx.beginPath();
	ctx.arc(centreX, centreY, radius, startingAngle, endingAngle);
	ctx.fillStyle = color
	ctx.fill();
	ctx.stroke();
}
//Head
drawCircle(250,250,150,0,2*Math.PI,"transparent");

function drawLine(startX,startY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    };



//Eyes
let drawEyes = (radius, color) => {
    
    //Left eye
	drawCircle(300, 200, radius, 0, 2 * Math.PI, color);

	//Right eye
	drawCircle(200, 200, radius, 0, 2 * Math.PI, color);

}

//Nose
let drawNose = (type) => {
	if (type === "crooked") {    //  /_   =>  crooked
		drawLine(250, 225, 200, 275);
		drawLine(200, 275, 250, 275);
	}
	else{
		drawCircle(250, 250, 20, 0, Math.PI, "transparent");   // two lines, with semi circle
		drawLine(230, 250, 250, 225);
		drawLine(270, 250, 250, 225);
	}
}


let drawMouth = (expression) => {
	if (expression === "surprise")
		drawCircle(250, 325, 40, 0, 2 * Math.PI, "transparent");   //Draw a circle
	else if(expression ==="happy")
		drawCircle(250, 300, 40, 0, Math.PI, "transparent");   //Draw a semi circle
	else
		drawLine(200, 325, 300, 325);
}

let getRndInteger = (min, max) => {    //The random() function returns a value between 0 (inclusive) and 1 (exclusive), so value >= 0 and value < 1.
	// Returns a random integer from 0 to 9:
    // Math.floor(Math.random() * 10);

	// Returns a random integer from 1 to 10:
	// Math.floor(Math.random() * 10) + 1;
	return Math.floor(Math.random() * (max - min + 1)) + min; 

	// Math.random()*(b-a)+a;
	// Where a is the smallest number and b is the largest number that you want to generate a random number for.

	// console.log(Math.random()*(25-10)+10);
	// The formula above would generate a random decimal number >= 10 and < 25. 
	// (Note: this formula will never return a value of 25 because the random function will never return 1.)

	// More about Mth.random function
	// https://www.w3schools.com/JS/js_random.asp
	// https://www.techonthenet.com/js/math_random.php#:~:text=JavaScript%3A%20Math%20random%20%28%29%20function%201%20Description.%20In,%3C%201.%204%20Note.%20...%205%20Example.%20

 
};

let drawRandomFace = () => {
	let eyeRadius = getRndInteger(1, 20);
	let eyeColor = ["brown", "blue", "green"][getRndInteger(0,2)];  
	//Genteres a random integer in the range of (0, 2) and gets the element in the list at that position.
	let noseType = ["crooked", "button"][getRndInteger(0,1)];
	let expression = ["surprise", "happy", "flat"][getRndInteger(0,2)];   
   

    drawMouth(expression);
    drawEyes(eyeRadius, eyeColor);
    drawNose(noseType);
}

drawRandomFace();