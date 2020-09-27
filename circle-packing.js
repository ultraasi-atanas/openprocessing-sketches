/* 
A p5.js sketch created on the www.openprocessing.org platform. 
Link to sketch
https://www.openprocessing.org/sketch/935878
My profile link 
https://www.openprocessing.org/user/223901/#sketches
*/


let circlesArray = [];
let invalidCirclesArray = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	packCircles(); //create our circles that don't touch
	noLoop();
}

// WELCOME :: Documentation
// We start with calling packCircles in the setup()
// Then we have:
// function isCircleCandidateLegal(oneCircle)
// function doCirclesOverlap(circleA, circleB)
// function packCircles()

function isCircleCandidateLegal(oneCircle) { //circle is legal if for every existing circle our candidate circle doesn’t overlap
	return circlesArray.every(c => !doCirclesOverlap(c, oneCircle))
	// 	for (let c of circlesArray) { //maybe use a while loop - while !overlapDetected then continue)
	// 		if (doCirclesOverlap(c, oneCircle)) { //only set to true if you found detection
	// 			return true;
	// 		}
	// 	
	// return false;

	//old version
	// 	if (overlapDetected === false) {
	// 	return true; //if it doesn't overlap any circles its legal
	// } 
	// else {
	// 	return false;
	// }
}
/*
overlapDetected = true;
*/

function doCirclesOverlap(circleA, circleB) {

	let sumOfRadiuses = circleA.radius + circleB.radius;
	let distanceBetweenCentres = dist(circleA.xpos, circleA.ypos, circleB.xpos, circleB.ypos);
	//check distance between the dots and compare that to the radiuses added up
	// let result = sumOfRadiuses < distanceBetweenCentres;
	// return !result //see explanation below distanceBetweenCentres < sumOfRadiuses
	return distanceBetweenCentres < sumOfRadiuses

	// (sumOfRadiuses < distanceBetweenCentres) is false - return true
	// (sumOfRadiuses < distanceBetweenCentres) is true - return false
}

function packCircles() {
	// stores into an array of circles - a global variable
	// prepares the list of objects that meet the requirement
	// Move your mouse inside the canvas to see the
	// change in distance between two points!
	let candidateCircle;
	// let failedAttempts = 0; // no need for this, we might need it eventually

	for (let i = 0; i < 100000; i += 1) {
		candidateCircle = { // our circles have x, ypos, radius
			xpos: random(0, width),
			ypos: random(0, height),
			radius: random([10, 20, 20, 20, 100]) //picks one or the other! fancy
		}
		// we have to now check if the new-born circle is close to *any* of the previous circle(s)
		// we do that with a loop, with a max of i iterations

		if (isCircleCandidateLegal(candidateCircle)) { //circle Candidate
			circlesArray.push(candidateCircle);
		} else {
			invalidCirclesArray.push(candidateCircle);
		}
	}
}

function draw() {
	background(200);

	// draw shadows of the invalid circles
	stroke(140, 100); //gray-ish with alpha
	fill(200, 0, 30, 100); //red-ish with alpha
	for (let c of invalidCirclesArray) {
		circle(c.xpos, c.ypos, c.radius * 2) //circle() takes a diameter so radius*2 = diameter
	}

	//draw my perfect circles
	stroke(1); //gray-ish with no alpha
	fill('white'); //white with no alpha
	for (let c of circlesArray) {
		circle(c.xpos, c.ypos, c.radius * 2) //circle() takes a diameter so radius*2 = diameter
	}
//TO DO think about colouring it differently
	// TO DO gintaras can draw Eyes

}
