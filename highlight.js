
let canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'absolute';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '2147483647';
canvas.style.pointerEvents = 'none';

const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 0;
ctx.globalCompositeOperation = 'destination-atop';

let isDrawing = false; 
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

document.getElementsByTagName('body')[0].appendChild(canvas);

document.onmousemove = (event) => {
    newX = event.pageX;
    newY = event.pageY;
    if (!isDrawing) return;
    
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(newX, newY);
    ctx.stroke();
    [lastX, lastY] = [newX, newY];
    hue += 1;
    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
    if (direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
};

document.onmouseenter = (event) => {
    isDrawing = true;
};
document.onmouseout = (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

document.onscroll = (event) => {
    // Need to Dynamically Height on Scroll
}
