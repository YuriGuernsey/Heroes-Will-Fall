var ctx = document.getElementById("ctx").getContext("2d");
var player = setInterval(update, 500);
/* Variables */
/* Fonts Variables */
ctx.font = '30px Monospace';
/* Player Variables */
var x = 10;
var y = 10;
var spdX = 15;
var spdY = 15;
/* General Vars */
var height = 500;
var width = 900;

function draw() {
    /* Drawing a rectangle 
    ctx.fillRect(20, 20, 50, 50);
    ctx.stroke();
    */
    /*Drawing the text'*/
    ctx.fillText("Placeholder Text", x, y);
}
/* Updatess */
function update() {
    x += spdX;
    y += spdY;
}
update();
draw();