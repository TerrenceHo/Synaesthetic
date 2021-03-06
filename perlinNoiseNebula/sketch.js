var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 200; i++) {
    particles[i] = new Particle();
  }
  // background(255);
  // background(51);
  background(0);
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(.5);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      strokeWeight(1);
      line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(floor(frameRate()));
}


// var inc = 0.01;
// var scl = 20;
// var cols, rows;


// function setup() {
//   createCanvas(400, 400);
//   cols = floor(width/scl);
//   rows = floor(height/scl);
//   pixelDensity(1); 
// }

// function draw() {
//   var yoff = 0;
//   loadPixels();
//   for (var y = 0; y < height; y++) {
//     var xoff = 0;
//     for (var x = 0; x < width; x++) {
//       var index = (x + y * width) * 4;
//       var r = noise(xoff, yoff) * 255;
//       pixels[index + 0] = r;
//       pixels[index + 1] = r;
//       pixels[index + 2] = r;
//       pixels[index + 3] = 255;
//       xoff += inc;
//     }
//     yoff += inc;
//   }
//   updatePixels();
// }