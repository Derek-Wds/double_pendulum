/// <reference path="./p5.global-mode.d.ts" />

// initialize all the parameters
let r1 = 200;
let r2 = 200;
let m1 = 10;
let m2 = 10;
let a1 = Math.PI/3;
let a2 = Math.PI/4;
let g = 9.8;     // constant g in physics
let a1_v = 0;    // velocity of angle 1
let a2_v = 0;    // velocity of angle 2
let a1_acc = 0;  // acceleration of angle 1
let a2_acc = 0;  // acceleration of angle 2
let canvas;
let px2 = -1;
let py2 = -1;
let points = [];

function setup() {
  createCanvas(1200, 1200);
  canvas = createGraphics(100, 100);
  canvas.background(255);
}

function draw() {
  // set up
  background(255);
  image(canvas, 0, 0);
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
  a1 += 0.1;
  a2 -= 0.2;
  // a1 += a1_v;
  // a2 += a2_v
  // update_a1();
  // update_a2();
  // a1_v += a1_acc;
  // a2_v += a2_acc;
  points.push([x2, y2]);

  // draw
  canvas.translate(600, 200);
  canvas.strokeWeight(4);
  canvas.stroke(0);
  for (i = 1; i < points.length; i++){
    canvas.line(points[i][0], points[i][1], points[i-1][0], points[i-1][1]);
  }
  
  px2 = x2;
  py2 = y2;
}

// function to update angle a1
function update_a1() {
  let term1 = -g * (2 * m1 + m2) * sin(a1);
  let term2 = -m2 * g * sin(a1 - 2 * a2);
  let term3 = Math.pow(a2_v, 2) * r2 + Math.pow(a1_v, 2) * r1 * cos(a1-a2);
  let term4 = -2 * sin(a1 - a2) * m2 * (term3);
  let term5 = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a1));
  a1_acc = (term1 + term2 + term4) / term5;
}

// function to update angle a2
function update_a2() {
  let term1 = 2 * sin(a1 - a2);
  let term2 = (Math.pow(a1_v, 2) * r1 * (m1 + m2));
  let term3 = g * (m1 + m2) * cos(a1);
  let term4 = Math.pow(a2_v, 2) * r2 * m2 * cos(a1 - a2);
  let term5 = r2 * (2*m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  a2_acc = (term1 * (term2 + term3 + term4)) / term5;
}