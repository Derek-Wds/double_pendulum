/// <reference path="./p5.global-mode.d.ts" />

// initialize all the parameters
let r1 = 200;
let r2 = 200;
let m1 = 10;
let m2 = 10;
let a1 = 0;
let a2 = 0;
let canvas;
let px2 = -1;
let py2 = -1;
let g = 9.8;     // constant g in physics
let a1_v = 0;    // velocity of angle 1
let a2_v = 0;    // velocity of angle 2
let a1_acc = 0;  // acceleration of angle 1
let a2_acc = 0;  // acceleration of angle 2


function setup() {
  createCanvas(1200, 1200);
  canvas = createGraphics(100, 100);
  canvas.background(255);

}

function draw() {
  // set up
  image(canvas, 0, 0)
  stroke(0);
  strokeWeight(2);
  translate(600, 300);

  // position of the upper point
  let x1 = r1 * sin(a1);
  let y1 = r1 * cos(a1);

  // position of the lower point
  let x2 = x1 + r2 * sin(a2);
  let y2 = y1 + r2 * cos(a2);

  // draw
  line(0, 0, x1, y1);
  fill(0);
  ellipse(x1, y1, m1, m1);

  line(x1, y1, x2, y2);
  fill(0);
  ellipse(x2, y2, m2, m2);

  // update the angle a1 and a2
  a1 += a1_v;
  a2 += a2_v

  


  // draw
  canvas.translate(600, 200);
  canvas.strokeWeight(4);
  canvas.stroke(0);
  if (frameCount > 1) {
    canvas.line(x2, y2, px2, py2);
  }
  
  px2 = x2;
  py2 = y2;
}

