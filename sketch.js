// ============================================================
// Week 1 Example 1: Images and Shapes
// ============================================================

// Variables declared outside of setup() and draw() are
// accessible everywhere in the sketch (global scope).
let controllerImg;

// ------------------------------------------------------------
// preload()
// Runs once before setup(). Always load images and sounds here
// so they are ready before the sketch tries to use them.
// If you load images inside setup() they may not appear.
// ------------------------------------------------------------
function preload() {
  // loadImage() takes a file path relative to index.html
  // The image is stored in the variable so we can use it later
  jengaImg = loadImage("assets/images/jenga.png");
}

// ------------------------------------------------------------
// setup()
// Runs once at the very start of the sketch.
// Use it to set up your canvas and draw things that
// only need to appear once (not animated).
// ------------------------------------------------------------
function setup() {
  // createCanvas(width, height) sets the size of your canvas in pixels
  createCanvas(800, 450);

  // background() fills the canvas with a colour
  // A single number = greyscale (0 is black, 255 is white)
  background("lightblue");
  drawCloud(100, 100, 1.2);
  drawCloud(300, 350, 0.8);
  drawCloud(500, 120, 1);

  // ----------------------------------------------------------
  // SECTION 1: TEXT
  // ----------------------------------------------------------

  // fill() sets the colour used for shapes AND text
  // Three numbers = red, green, blue (each 0–255)
  fill(0, 0, 0); // black

  // textAlign() controls how text is anchored to its x position
  // CENTER means the x coordinate is the middle of the text
  textAlign(CENTER);

  // textSize can be changed at any point — it applies to text drawn after it
  textSize(34);
  text("Don't fall!!!", 200, 150);
  // ----------------------------------------------------------
  // SECTION 2: DISPLAYING AN IMAGE
  // ----------------------------------------------------------

  // image(img, x, y, width, height) draws a loaded image
  // x and y are the TOP-LEFT corner of the image
  // The last two arguments resize the image to fit that space
  image(jengaImg, 300, 30, 600, 600);

  // ----------------------------------------------------------
  // SECTION 3: DRAWING SHAPES (a controller made of shapes!)
  // ----------------------------------------------------------
  // All shapes are drawn relative to an origin point (originX, originY)
  // so the whole drawing can be moved by changing those two values.

  // originX and originY act as the anchor point for the whole drawing.
  // Changing these two values moves the entire controller at once —
  // a useful habit for keeping drawings easy to reposition.
  let originX = 450; // left edge of the shape controller
  let originY = 85; // top edge of the shape controller
}

// ------------------------------------------------------------
// mousePressed()
// A built-in p5.js event function.
// Automatically called once every time the mouse is clicked.
// mouseX and mouseY hold the current mouse position.
// ------------------------------------------------------------
function mousePressed() {
  // Draw a random-coloured circle wherever the user clicks
  fill(random(255), random(255), random(255));
  noStroke();
  circle(mouseX, mouseY, 40);
}

// ------------------------------------------------------------
// keyPressed()
// A built-in p5.js event function.
// Automatically called once every time a key is pressed.
// The key variable holds the character that was pressed.
// ------------------------------------------------------------
function keyPressed() {
  // Press "k" to log the current mouse position to the Chrome console.
  // This is a handy debug tool — use it to find coordinates when
  // placing shapes or images on the canvas.
  if (key === "k") {
    console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);
  }
}

function drawCloud(x, y, scale = 1) {
  noStroke();
  fill(255);

  // Main puffs
  ellipse(x, y, 120 * scale, 80 * scale);
  ellipse(x - 50 * scale, y + 10 * scale, 80 * scale, 60 * scale);
  ellipse(x + 50 * scale, y + 10 * scale, 80 * scale, 60 * scale);
  ellipse(x, y + 25 * scale, 140 * scale, 70 * scale);
}
