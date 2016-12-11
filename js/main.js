var bubbles = []

function setup() {
	createCanvas(1000, 1000)
}
//when mouse is clicked, creates bubble
function mouseDragged() {
	bubbles.push(new Bubble(mouseX, mouseY));
}
//pressing keys delete bubbles
function keyPressed() {
	bubbles.splice(0, 1);
}

//creates the bubbles
function draw() {
	background(0)
	for ( var i = 0; i < bubbles.length; i++) {
		bubbles[i].move()
		bubbles[i].display()
	}
//alternative where bubbles get deleted automatically when more then 50
if (bubbles.length > 1000) {
	bubbles.splice(0, 1);
	}
}

//make new bubbles
function Bubble(x, y) {
	//sets location of the bubbles
	this.x = x
	this.y = y
	//bubble properties
	this.display = function() {
		stroke(255)
		fill(255,0,150,50)
		ellipse(this.x, this.y, 24, 24)
	}
//determines the movement of the bubbles
	this.move = function() {
		this.x = this.x + random(-1, 1)
		this.y = this.y + random(-1, 1)
	}
}


