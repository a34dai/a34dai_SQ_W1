
function preload() {
  jengaImg = loadImage("assets/images/jenga.png");
}

function setup() {
 
  createCanvas(800, 450);

  background("lightblue");
  drawCloud(100, 100, 1.2);
  drawCloud(300, 350, 0.8);
  drawCloud(500, 120, 1);

  fill(0, 0, 0); // black

  textAlign(CENTER);

  textSize(34);
  text("Don't fall!!!", 200, 150);
  

  image(jengaImg, 300, 30, 600, 600);
}

function mousePressed() {
  // Draw a random-coloured circle wherever the user clicks
  fill(random(255), random(255), random(255));
  noStroke();
  circle(mouseX, mouseY, 40);
}

function keyPressed() {
  if (key === "k") {
    console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);
  }
}

function drawCloud(x, y,) {
  fill(255);
  NoStroke();
  ellipse(x, y, 120, 80);
  ellipse(x - 50, y + 10, 80, 60);
  ellipse(x + 50, y + 10, 80, 60);
  ellipse(x, y + 25, 140, 70);
}
