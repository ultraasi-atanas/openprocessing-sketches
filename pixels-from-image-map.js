/* 
A p5.js sketches created on the www.openprocessing.org platform. 
Link to sketch
https://www.openprocessing.org/sketch/929627
My profile link 
https://www.openprocessing.org/user/223901/#sketches
*/


let img;

function preload() {
	img = loadImage('test.png');
}

function setup() {
	createCanvas(800, 600);
	noStroke();
	background(255);

	//prepare image ready to use with img.get(x, y)
	img.loadPixels();
}

function draw() {
	//draw 100 circles using colours drawn from the image (not shown)
	for (let i = 0; i < 100; i++) {
		
		let imgSourceX = floor(random(img.width));
		let imgSourceY = floor(random(img.height));
		
		let colorAtPixel = img.get(imgSourceX, imgSourceY);
		fill(colorAtPixel);
		
		//Mapping the image width & height to the size of the canvas
		let canvasDestinationX = map(imgSourceX, 0, img.width, 0, width);
		let canvasDestinationY = map(imgSourceY, 0, img.height, 0, height);
		
		// DRAW THE BIGGER IMAGE
		circle(canvasDestinationX, canvasDestinationY, random(1, 10));

		// DRAW THE ORIGINAL IMAGE
		circle(imgSourceX, imgSourceY, random(1, 10));

	}
}
