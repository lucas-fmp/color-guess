const ball1 = document.querySelector('#ball-1');
const ball2 = document.querySelector('#ball-2');
const ball3 = document.querySelector('#ball-3');
const ball4 = document.querySelector('#ball-4');
const ball5 = document.querySelector('#ball-5');
const ball6 = document.querySelector('#ball-6');
const paragraph = document.querySelector('#rgb-color');

function redColor() {
  const red = Math.floor(Math.random() * 255).toString();
  return red;
}

function greenColor() {
  const green = Math.floor(Math.random() * 255).toString();
  return green;
}

function blueColor() {
  const blue = Math.floor(Math.random() * 255).toString();
  return blue;
}

function colorGenerator() {
  const color = `(${redColor()}, ${greenColor()}, ${blueColor()})`;
  return color;
}

const ball1Color = colorGenerator();
const ball2Color = colorGenerator();
const ball3Color = colorGenerator();
const ball4Color = colorGenerator();
const ball5Color = colorGenerator();
const ball6Color = colorGenerator();

function randomBallColor() {
  const arrayBalls = [];
  arrayBalls.push(ball1Color);
  arrayBalls.push(ball2Color);
  arrayBalls.push(ball3Color);
  arrayBalls.push(ball4Color);
  arrayBalls.push(ball5Color);
  arrayBalls.push(ball6Color);
  const indexNumber = Math.floor(Math.random() * 6);
  console.log(indexNumber);
  return arrayBalls[indexNumber];
}

ball1.style.backgroundColor = `rgb${ball1Color}`;
ball2.style.backgroundColor = `rgb${ball2Color}`;
ball3.style.backgroundColor = `rgb${ball3Color}`;
ball4.style.backgroundColor = `rgb${ball4Color}`;
ball5.style.backgroundColor = `rgb${ball5Color}`;
ball6.style.backgroundColor = `rgb${ball6Color}`;

paragraph.innerText = randomBallColor();
