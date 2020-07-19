const c = document.getElementById("easel");
const ctx = c.getContext("2d");

setInterval(() => {
    ctx.strokeStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const xstart = Math.random() * 800;
    const ystart = Math.random() * 800;
    const xend = Math.random() * 800;
    const yend = Math.random() * 800;
    ctx.lineWidth = Math.sqrt(Math.pow(Math.abs(xstart - xend), 2) + Math.pow(Math.abs(ystart - yend), 2)) / 40;
    
    ctx.beginPath();
    ctx.moveTo(xstart, ystart);
    ctx.lineTo(xend, yend);
    ctx.stroke();
    ctx.endPath();
}, 1000);