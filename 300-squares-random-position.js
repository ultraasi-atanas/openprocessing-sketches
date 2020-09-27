/* 
A p5.js sketch created on the www.openprocessing.org platform. 
Link to sketch
https://www.openprocessing.org/sketch/940341
My profile link 
https://www.openprocessing.org/user/223901/#sketches
*/

function setup() {
	let canvasHeight = 600;
	let canvasWidth = 600;
	createCanvas(canvasHeight, canvasWidth);
	background(100); //sets the background colour
}



function draw() {

	let variableX = random(0, 600); //random location
	let variableY = random(0, 600); //random location

	
	// we can stop the animation after maxFramesCount (one square per Frame)
	let maxFramesCount = 300;
	
	//here we get the current number of frames back, each time the animation runs
	let currentFrameCount = frameCount; 

	if (currentFrameCount === maxFramesCount) {

		noLoop(); //stop the animation
	}
	
	//adds some nice colours
	// -- START UNCOMMENT 
	//some nice colours from https://www.colourlovers.com/palette/92095/Giant_Goldfish
// 	let myColourNames = ["#69D2E7","#A7DBD8","#E0E4CC","#F38630","#FA6900","#69D2E7","#A7DBD8","#E0E4CC"];
	
// 	blendMode(SOFT_LIGHT); //change the way colour is blended by the program.
// 	//(1)(2) Random position / random colours
// 	// don't want any stroke
// 	noStroke();
// 	// choose a random colour each time
// 	fill(random(myColourNames));
// 	// draw one square random position with random colours / per frame
		// -- END UNCOMMENT 

	//(1)
	// draw one square random position / per frame
	rect(variableX, variableY, 20, 20);
}
