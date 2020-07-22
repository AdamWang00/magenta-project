const c = document.getElementById("canvas-1");
const ctx = c.getContext("2d");

let cW, cH, xStart, xEnd, yStart, yEnd, lmb
const borderWidth = 3;

const thicknessRatio = 0.2;
const thicknessMin = 5;
const thicknessMax = 15;

const resizeCanvases = () => {
  const dim =
    Math.min(
      window.innerHeight,
      document.getElementById("canvases").clientWidth
     ) - 2 * borderWidth;

  if (dim != cW) {
    for (cId of ["canvas-1", "canvas-2"]) {
      document.getElementById(cId).width = dim;
      document.getElementById(cId).height = dim;
    }
    cW = dim;
    cH = dim;
  }
};

resizeCanvases();

const draw = (xS, xE, yS, yE) => {
  ctx.strokeStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  ctx.lineWidth = Math.max(thicknessMin,
    Math.min(thicknessMax, thicknessRatio * Math.sqrt(
      Math.pow(Math.abs(xS - xE), 2) + Math.pow(Math.abs(yS - yE), 2)
    )));
  ctx.globalAlpha = 0.7;

  const lines = [
    [xS, yS, xE, yE],
    [xS, cH-yS, xE, cH-yE],
    [cW-xS, yS, cW-xE, yE],
    [cW-xS, cH-yS, cW-xE, cH-yE],
    [yS, xS, yE, xE],
    [yS, cH-xS, yE, cH-xE],
    [cW-yS, xS, cW-yE, xE],
    [cW-yS, cH-xS, cW-yE, cH-xE],
  ];
  for (line of lines) {
    ctx.beginPath();
    ctx.moveTo(line[0], line[1]);
    ctx.lineTo(line[2], line[3]);
    ctx.stroke();
  }

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

