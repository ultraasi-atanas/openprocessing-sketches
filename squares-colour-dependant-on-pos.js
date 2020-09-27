/* 
A p5.js sketch created on the www.openprocessing.org platform. 
Link to sketch
https://www.openprocessing.org/sketch/940347
My profile link 
https://www.openprocessing.org/user/223901/#sketches
*/

let canvasHeight = 600;
let canvasWidth = 600;

function setup() {
	createCanvas(canvasHeight, canvasWidth);
	background(100);
}

function draw() {

	let variableX = random(0, 600); //random location
	let variableY = random(0, 600); //random location

	let squareColourTopHalfCanvas = "orange";
	let squareColourBottomHalfCanvas = "skyblue";

	if (variableY > (canvasHeight/2)) {
		
		fill(squareColourBottomHalfCanvas); // we are below canvasHeight divided by 2
	}
	else {
		fill(squareColourTopHalfCanvas);  // we are over canvasHeight divided by 2
	}

		//(1)
		// draw one square random position / per frame
		rect(variableX, variableY, 20, 20);
	}
