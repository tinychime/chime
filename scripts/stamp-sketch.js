function setup() {
  createCanvas(windowWidth, windowHeight - 3);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 3);
}


function draw() {
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(0);
  }
  ellipse(mouseX, mouseY, 350, 350);
}
