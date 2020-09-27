/* 
A p5.js sketch created on the www.openprocessing.org platform. 
Link to sketch
https://www.openprocessing.org/sketch/918523
My profile link 
https://www.openprocessing.org/user/223901/#sketches
*/

let img;
let coloursArray =[];
let boxes =[];

function preload() {
	img = loadImage('star.png');
}

function setup() {
	createCanvas(800, 600);
	noStroke();
	background(255);
	img.loadPixels(); 
	//prepare image ready to use with img.get(x, y)
	// frameRate(10);
	noLoop();
}


//1) get 10000 points - x,y from the original image
//2) get the colours (RGB) at each of those points - the 10000 array
//3) 

function draw() {
	//draw 100 circles using colours drawn from the image (not shown)
	for (let i = 0; i < 10000; i++) {
		
		let x = floor(random(img.width));
		let y = floor(random(img.height));
		let colorAtPixel = img.get(x, y);
		coloursArray.push(colorAtPixel);
		
		fill(colorAtPixel);
		circle(x, y, 10);
	}

	for (let count = 30; count < 3000; count = count + 30) {
		rectMode(RADIUS);
		fill(coloursArray[count]);
		rect(width-30, 30, 30, 30);
	}
}
