let img, binary, pgMask;
 
function preload() {
    // binary = loadString('')
}
 
function setup() {
    createCanvas(720, 400);
    imageMode(CENTER);  
    pgMask = createGraphics(width, height);
    pgMask.fill(255, 0300);
    pgMask.ellipse(width>>1, height>>1, width>>1, height>>1);   
    //img.mask(pgMask); // fails b/c mask() can't deal w/ p5.Graphics
    // img.mask(pgMask._renderer); // works b/c _renderer property is a p5.Renderer

}
 
function draw() {
    background(0, 0, 0);
    image(pgMask, width>>1, height>>1);
    noStroke();
    fill(0);
    text("0101010101001000101010001001010", 360, 200);
}
//Fill canvas with array of text randomly assorted 0 and 1s.
//Mask it with a ellipse graphics.
//By transversing an array, manupulate the numbers so that they appear flickering.


// var img, x,y,a,b,pg;

// function preload() {
//     img = loadImage("assets/test_low.jpg", function(img){
//         img.resize(780, 440);
//     });
// }

// function setup() {
//     createCanvas(780, 440);
//     noStroke();

//     x = random(width/2);
//     y = random(height/2);
//     a = random(width/2);
//     b = random(height/2);

//     pg = createGraphics(width,height);
// }

// function draw() {

//     pg.rect(x,y,a,b);
//     img.mask(pg)
//     image(img,0,0);

//     x = random(width/2);
//     y = random(height/2);
//     a = random(width/2);
//     b = random(height/2);


// }




// var img, img2, x,y,a,b,pg;
 
// function preload() {
//     img = loadImage("assets/googleZoom.jpg", function(img){
//         img.resize(780, 440);
//     });
//     img2 = loadImage("assets/alphaImage.png", function(img){
//         img2.resize(780, 440);
//     });
// }
 
// function setup() {
//     createCanvas(780, 440);
//     noStroke();

//     x = random(width/2);
//     y = random(height/2);
//     a = random(width/2);
//     b = random(height/2);

//     pg = createGraphics(width,height);
// }
 
// function draw() {
//     // image(img, 0, 0);
//     pg.rect(x,y,a,b);
//     img.mask(img2);
//     image(img,0,0);

//     x = random(width/2);
//     y = random(height/2);
//     a = random(width/2);
//     b = random(height/2);

//     fill(255,255,255,55); 
//     rect(0,0,width,height);
// }



// var img;
// var img1;
// var img2;
// var pg;

// function setup(){
//     createCanvas(720,400);
//     img1 = createImage(720, 400);
//     img1.loadPixels();
//     for(var x = 0; x < img1.width; x++) {
//         for(var y = 0; y < img1.height; y++) {
//             var a = map(y, 0, img1.height, 255, 0);
//             img1.set(x, y, [0, 153, 204, a]); 
//         }
//     }
//     img1.updatePixels();
//     img2 = loadImage("assets/googleZoom.jpg", function(c){
//         img2.resize(720,400);
//     });
//     img2.mask(img1);
// }

// function draw(){
//     background(0);
//     image(img1, 0, 0);
//     image(img2, 0, 0);
// }


// function setup(){
//     createCanvas(720, 400);
//     pg = createGraphics(720,400);
//     pg.beginShape();
//     pg.ellipse(56, 46, 55, 55);
//     pg.endShape();
//     img1 = loadImage("assets/googleZoom.jpg"); 
//     img1.resize(720, 400);
//     img1.mask(pg);
// }
// function draw(){
//     image(img1, 0, 0, width, height);
// }


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


