var t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
}

function draw() {
  background(0);
  var a = map(mouseX, 0, windowWidth, 0, windowWidth, true);
  fill(255);


  for (i = 0; i < 30; i++) {

  	x = 160*sin(3*t+PI/2);
  	y = 160*sin(a*t);

    fill(255);

		ellipse(width/2+x, height/2+y, 5, 5);
  	t+=9;
  }
}
