/* 
A p5.js sketch created on the www.openprocessing.org platform. 
Link to sketch
https://www.openprocessing.org/sketch/939206
My profile link 
https://www.openprocessing.org/user/223901/#sketches
*/



class Segment { // Capital letter

	constructor (x, y, len_, angle_) { //initial X,Y, angle and length //constructor
		this.a = createVector(x,y); // was a = new PVector(x,y);
		this.angle = angle_;
		this.len = len_;
		this.b = this.calculateB(); // b gets calculated - see function calculateB()
	}
	
	calculateB() {
		let dx = this.len * cos(this.angle);
		let dy = this.len * sin(this.angle);
		return createVector(this.a.x + dx, this.a.y + dy);  // a bit more memory efficient than 
	}

	initialise() {
		this.calculateB();
	}
	
	show()  {
		stroke(255);
		strokeWeight(4);
		line(this.a.x, this.a.y, this.b.x, this.b.y);
	}
	
	follow (targetX, targetY) {
		let target = createVector(targetX,targetY); //a vector which points at the target
		let direction = p5.Vector.sub(target,this.a); // tell if i was to subtract them/ or create a new vector by representing the substration of the two. Don't change. 
// let direction = target.sub(this.a);  is wrong because it modifies target
		// alternative which works 		let direction = target.copy().sub(this.a); 
		// he says - the target minus a (which is also a vector)
		// we are changing our angle based on the angle calculation of heading()
		this.angle = direction.heading(); 
		
		direction.setMag(this.len); //just as on video
		direction.mult(-1);  // just as on video
		
		this.a = p5.Vector.add(target,direction);
	}
}

let seg; // Declare object

// Coding Challenge #64.2: Inverse Kinematics
/// video https://www.youtube.com/watch?time_continue=413&v=hbgDqyy8bIw&feature=emb_logo


function setup() {
	background(51);
	createCanvas(600,400);
	seg = new Segment(300,200,100,0); // Create object
}

function draw() {
	background(100); //gray 
	seg.follow(mouseX, mouseY); // added later - must be before initialise!!! 
	seg.initialise();  // it initialises B
	seg.show();
}
