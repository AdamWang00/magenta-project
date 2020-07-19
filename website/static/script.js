setInterval(() => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    ctx.moveTo(Math.random()*800, Math.random()*800);
    ctx.lineTo(Math.random()*800, Math.random()*800);
    ctx.stroke();
}, 1000);