const c = document.getElementById("easel");
const ctx = c.getContext("2d");
const cW = c.width;
const cH = c.height;
const ext = 50;

let xStart, xEnd, yStart, yEnd

ctx.globalAlpha = 0.5;

const draw = () => {
  ctx.strokeStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  ctx.lineWidth =
    Math.sqrt(
      Math.pow(Math.abs(xStart - xEnd), 2) +
        Math.pow(Math.abs(yStart - yEnd), 2)
    ) / 20;

  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();
  xStart = xEnd;
  yStart = yEnd;
};

const mouseoverInit = event => {
  xStart = event.offsetX;
  yStart = event.offsetY;
  console.log("A")
};

const getCursorPosition = event => {
  xEnd = event.offsetX;
  yEnd = event.offsetY;
  if (xStart != xEnd || yStart != yEnd) draw();
  console.log("B")
};