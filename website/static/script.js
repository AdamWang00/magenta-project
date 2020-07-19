const c = document.getElementById("easel");
const ctx = c.getContext("2d");
const cW =  c.width
const cH = c.height
const ext = 50

var xstart = Math.random() * (cW + 2 * ext) - ext;
var ystart = Math.random() * (cH + 2 * ext) - ext;

ctx.globalAlpha = 0.08;

setInterval(() => {
    ctx.strokeStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const xend = Math.random() * (cW + 2 * ext) - ext;
    const yend = Math.random() * (cW + 2 * ext) - ext;
    ctx.lineWidth = Math.sqrt(Math.pow(Math.abs(xstart - xend), 2) + Math.pow(Math.abs(ystart - yend), 2)) / 40;
    
    ctx.beginPath();
    ctx.moveTo(xstart, ystart);
    ctx.lineTo(xend, yend);
    ctx.stroke();
    xstart = xend;
    ystart = yend;
}, 10);