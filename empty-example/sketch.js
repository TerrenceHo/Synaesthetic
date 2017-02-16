var img1;
var pg;

function preload(){
    img1 = loadImage("assets/googleZoom.jpg"); 
    img2 = loadImage("assets/googleMapsImage.png");
}
function setup(){
    createCanvas(720, 400);
    pg = createGraphics(720,400);
    img1.resize(720, 400);
    img2.resize(720, 400);
    img2.filter(GRAY);
    img1.mask(img2);
}

function draw(){
    image(img1, 0, 0, width, height);
}


