var xspacing = 25;
var w;
var theta = 0.0;
var amplitude = 75.0;
var period = 500.0;
var dx;
var yvalues;


function setup() {
  createCanvas(windowWidth, windowHeight);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(mouseY/3,55,255);
  calcWave();
  renderWave();
}

function calcWave() {
  theta += 0.02;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
	fill(mouseX/4,mouseX/4,255);

  for (var x = 0; x < yvalues.length; x++) {
    rect(x*xspacing, height/3+yvalues[x], 19, 19);

	}
}
