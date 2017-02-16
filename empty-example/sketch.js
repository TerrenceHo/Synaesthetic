var img1;
var img2;
var pg;
function setup(){
    createCanvas(720, 400);
    pg = createGraphics(720,400);
    pg.beginShape();
    pg.ellipse(56, 46, 55, 55);
    pg.endShape();
    img1 = loadImage("assets/googleZoom.jpg"); 
    img1.resize(720, 400);
    img1.mask(pg);
}
function draw(){
    image(img1, 0, 0, width, height);
}

// var img1;
// var pg;

// function preload(){
    // img1 = loadImage("assets/googleZoom.jpg"); 
    // img2 = loadImage("assets/googleMapsImage.png");
// }
// function setup(){
//     createCanvas(720, 400);
//     pg = createGraphics(720,400);
//     img1.resize(720, 400);
//     img2.resize(720, 400);
//     // img2.tint(0, 153, 204, 126);
//     img1.mask(img2);
// }

// function draw(){
//     // image(img2, 0, 0, width, height);
//     // image(img1, 0, 0, width, height);
//     image(img1, 0, 0, width, height);
// }


