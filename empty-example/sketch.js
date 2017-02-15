function setup() {
    // Preps
    devicePixelScaling(false);
    createCanvas(300,100);
    background('cyan');
 
    // The shape
    var disc = createGraphics(100,100);
    disc.noStroke();
    disc.fill('#F00');
    disc.ellipse(50,50,100,100);
 
    // The image of the shape, ready for punching
    var img = disc.get();
 
    // The punch
    var punch = createGraphics(100,100);
    punch.noStroke();
    punch.fill(255);
    punch.rect(25,25,50,50);
 
    // Punch it!
    img.punchOut(punch);
 
    // Tada!
    image(disc,0,0);
    image(punch,100,0);
    image(img, 200, 0);
}




// Extend p5.Image, adding the converse of "mask", naming it "punchOut":
p5.Image.prototype.punchOut = function(p5Image) {
 
    if(p5Image === undefined){
        p5Image = this;
    }
    var currBlend = this.drawingContext.globalCompositeOperation;
 
    var scaleFactor = 1;
    if (p5Image instanceof p5.Graphics) {
        scaleFactor = p5Image._pInst._pixelDensity;
    }
 
    var copyArgs = [
        p5Image,
        0,
        0,
        scaleFactor*p5Image.width,
        scaleFactor*p5Image.height,
        0,
        0,
        this.width,
        this.height
    ];
 
    this.drawingContext.globalCompositeOperation = "destination-out";
    this.copy.apply(this, copyArgs);
    this.drawingContext.globalCompositeOperation = currBlend;
};

// var pg;
// var img;
// function preload(){
//     // img = createImg("assets/binaryText.gif");
// }

// function setup(){
//     createCanvas(720, 400);
//     img = loadImage("assets/googleZoom.jpg");
//     pg = createGraphics(720, 400);
//     // img.mask(pg);
// }

// function draw(){
//     background(img);
//     pg.background(0);
//     // pg.fill(51);
//     pg.noFill();
//     pg.ellipse(360, 200, 340, 340);
//     // img.mask(pg);

//     // image(img, 0, 0, width, height);
//     image(pg, 0, 0,width,height);
// }