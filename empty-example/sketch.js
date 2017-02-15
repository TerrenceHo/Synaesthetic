var img;  // Declare variable 'img'.
var pg;
var gif;
function preload(){
    // gif = createImg("assets/binaryText.gif"); 
}
function setup() {
    createCanvas(720, 400);
    img = loadImage("assets/googleZoom.jpg");  // Load the image
    pg = createGraphics(720,400);
    gif = loadImage("assets/binaryText.gif")
}

function draw() {
    // image(gif, 200, 200);
    // pg.noFill();
    pg.ellipse(360, 200, 340, 340);
    // Displays the image at its actual size at point (0,0)
    image(img, 0, 0, width, height);
    image(pg, 0, 0, width, height);
    image(gif, 0, 0);
    // Displays the image at point (0, height/2) at half size
}

// function setup(){
//     createCanvas(720, 400);
//     // img = loadImage("assets/googleZoom.jpg");
//     pg = createGraphics(720, 400);
//     // img.mask(pg);
// }

// function draw(){
//     // background(img);
//     // pg.background(0);
//     // pg.fill(51);
//     // pg.noFill();
//     // pg.ellipse(360, 200, 340, 340);
//     // // img.mask(pg);

//     image(img, 0, 0, width, height);
//     // image(pg, 0, 0,width,height);
// }
