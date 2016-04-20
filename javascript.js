// assigning canvas variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var dx = 2; // add small value after every frame 
var dy = -2;


// Constantly updating the canvas drawing on each frame 
// define the drawing function over and over again
//Different set of variables each time to change sprite posisitions etc.
// you can run a function over and over again using a javascript timing function such 
// setInterval() or requestAnimationFrame()

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
setInterval(draw, 10);

//Infinite nature of setInterval the draw() function will be called every 10 milliseconds forever, or until we stop it. draw the ball 

//You won't notice the ball being repainted constantly at the moment as its not moving
//lets change that first intstead of hardcoded position at (50,50) we will define a starting poit at the bottom center part of hte canvas in variables called x and y, then use those to define the position the circle is drawn at

// update x and y with our dx and dy variable on every frame, so the ball will be painted in the new position on everyupdate.
//
//ball is leaving a trail because we're painting a new circle on every frame without removing the previous one. Method clear Canvas content clearRect(). -> four parameters 
//the x and y cooridninates of the top left corner of a rectangle and the x and y coordinates of the bottom right corner of a rectangle. -> area covered is area cleared
//
