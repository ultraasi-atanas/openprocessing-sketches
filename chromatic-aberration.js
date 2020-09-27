/* 
A p5.js sketch created on the www.openprocessing.org platform. 
Link to sketch
https://www.openprocessing.org/sketch/921672
My profile link 
https://www.openprocessing.org/user/223901/#sketches
*/


let img;
// noprotect - disables infinite protection

//FUNCTION 
function preload() {
	img = loadImage('sunsetgreenhills.jpg');
}

//FUNCTION 
function setup() {
	createCanvas(800, 600);
	noStroke();
	background(255);
	//prepare image ready to use with img.get(x, y)
	img.loadPixels();
	noLoop();
	rectMode(RADIUS); //new

}

//FUNCTION 
function draw() {
	
	
	let squareDetailSize = 3;
	let displacement = 3;
	let newAlpha = 60;
	
	//draw 100 circles using colours drawn from the image (not shown)
	for (let i = 0; i < 100000; i++) {

		let x = floor(random(img.width));
		let y = floor(random(img.height));

		// COLOUR GET DETERMINED HERE - result is an array
		let colorAtPixel = img.get(x, y);
		// e.g. values Array [249,249,249,255]
		// e.g. values Array [57,53,41,255]
		// e.g. values Array [64,59,55,255]
		//// troubleshooting  print(colorAtPixel) 
		//// troubleshooting print(colorAtPixel[0]);
		// R, G & B integer values from the Array - dismantling the values Array above
		let r = colorAtPixel[0]; //red(colorAtPixel);
		let g = colorAtPixel[1]; //red(colorAtPixel);
		let b = colorAtPixel[2];
		let alpha = colorAtPixel[3];
		
		//Main point
		fill(r, g, b, alpha); //making sure that it's picture perfect before the change 
		rect(x, y, squareDetailSize); //random(1,10) //used to be circle, now rect
		
		//RED Adjacent points +3
		fill(255,0,0,newAlpha);
		rect(x+displacement, y, squareDetailSize);
		
		//GREEN Adjacent points -3
		fill(0,255,0,newAlpha);
		rect(x-displacement, y, squareDetailSize);
		
		//BLUE Adjacent points -3 - 3
		fill(0,0,255,newAlpha);
		rect(x-displacement, y-displacement, squareDetailSize);
	}
}
