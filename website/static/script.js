const c = document.getElementById("easel");
const ctx = c.getContext("2d");

var xstart = Math.random() * 800;
var ystart = Math.random() * 800;

setInterval(() => {
    ctx.strokeStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const xend = Math.random() * 800;
    const yend = Math.random() * 800;
    ctx.lineWidth = Math.sqrt(Math.pow(Math.abs(xstart - xend), 2) + Math.pow(Math.abs(ystart - yend), 2)) / 40;
    
    ctx.beginPath();
    ctx.moveTo(xstart, ystart);
    ctx.lineTo(xend, yend);
    ctx.stroke();
    xstart = xend;
    ystart = yend;
}, 10);

