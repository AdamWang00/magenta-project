const c = document.getElementById("easel");
const ctx = c.getContext("2d");
const cW = c.width;
const cH = c.height;
const ext = 50;

let xStart, xEnd, yStart, yEnd, lmb

const thicknessRatio = 1.2;
const thicknessMin = 5;
const thicknessMax = 20;
ctx.globalAlpha = 0.4;

const draw = (xS, xE, yS, yE) => {
  ctx.strokeStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  ctx.lineWidth = Math.max(thicknessMin,
    Math.min(thicknessMax, thicknessRatio * Math.sqrt(
      Math.pow(Math.abs(xS - xE), 2) + Math.pow(Math.abs(yS - yE), 2)
    )));

  ctx.beginPath();
  ctx.moveTo(xS, yS);
  ctx.lineTo(xE, yE);
  ctx.stroke();
  xStart = xE;
  yStart = yE;
};

const initStart = event => {
  xStart = event.offsetX;
  yStart = event.offsetY;
};

const getCursorPosition = event => {
  xEnd = event.offsetX;
  yEnd = event.offsetY;
  if (lmb && (xStart != xEnd || yStart != yEnd)) {
    draw(xStart, xEnd, yStart, yEnd);
  } else {
    xStart = xEnd;
    yStart = yEnd;
  }
};

const mouseDown = () => lmb = true;

const mouseUp = () => lmb = false;