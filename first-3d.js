/* 
A p5.js sketch created on the www.openprocessing.org platform. 
Link to sketch
https://www.openprocessing.org/sketch/932132
My profile link 
https://www.openprocessing.org/user/223901/#sketches
*/


let colours = ["#FF4E50", "#FC913A", "#F9D423", "#EDE574", "#E1F5C4", "#FF4E50", "#FC913A", "#F9D423"]

function setup() {
	// createCanvas(windowWidth, windowHeight);
	createCanvas(1000, 1000, WEBGL);
	noLoop();
}

//createABox
function createARandomBox() {
	push();
	ambientMaterial(random(colours));
	translate(random(-300, 300), random(-200, 200), random(-400, -100));
	// rotate(radians(random(360)));
	box(random(250), random(250), random(250));
	pop();
};

function draw() {
	ambientLight(100, 100, 100);
	let dirX = (mouseX / width - 0.5) * 2; //light
	let dirY = (mouseY / height - 0.5) * 2; //light
	directionalLight(230, 230, 230, -dirX, -dirY, -1); //light
	noStroke();
	rotateY(radians(45));
	for (let i = 0; i < 100; i = i + 1) {
		createARandomBox(); //make a box
	}

}
