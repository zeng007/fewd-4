function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {

		var noiseScale=0.02;
		colorMode(RGB);
		stroke(255);
		background(255);
		var from = color(255, 5, 168);
		var to = color(13, 75, 255);
		colorMode(RGB); // Try changing to HSB.
		var interA = lerpColor(from, to, 0.22);
		var interB = lerpColor(from, to, 0.33);
	  var interC = lerpColor(from, to, 0.44);
	  var interD = lerpColor(from, to, 0.55);
	  var interE = lerpColor(from, to, 0.66);

	for (var x=0; x < width; x++) {
    var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(interA);
    line(x, mouseY+noiseVal*100, x, height);
		stroke(interB);
    line(x, mouseY+noiseVal*200, x, height);
		stroke(interC);
    line(x, mouseY+noiseVal*250, x, height);
		stroke(interD);
    line(x, mouseY+noiseVal*300, x, height);
		stroke(interE);
    line(x, mouseY+noiseVal*350, x, height);

  }

}
