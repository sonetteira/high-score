//drawing board
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//buttons
const leftButton = document.getElementById("ctrleft");
const rightButton = document.getElementById("ctrright");
const upButton = document.getElementById("ctrup");
const downButton = document.getElementById("ctrdown");
//slow down animation for blinky look
var fpsInterval = 70;
var start, now;
//snake details
var snakeGrowth = 4;
var boxWidth = 20;
var snakeSegments = [{x: random("x"), y: random("y")},];
var dx = 0, dy = 0;
var snakeVel = boxWidth;

//apple details
var appleX = random("x");
var appleY = random("y");

function random(coord) {
    //get a random number that fits inside the canvas
    //use the boxwidth variable to enforce a grid
    let upperLimit = 0;
    if(coord == "x") {
        upperLimit = canvas.width/boxWidth;
    } else {
        upperLimit = canvas.height/boxWidth;
    }
    return Math.floor(Math.random() * upperLimit)*boxWidth;
}

//event handlers
document.addEventListener("keydown", keyDownHandler, false);
leftButton.addEventListener("click", setDirectionLeft);
rightButton.addEventListener("click", setDirectionRight);
upButton.addEventListener("click", setDirectionUp);
downButton.addEventListener("click", setDirectionDown);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.key.toLowerCase() == "d") {
        setDirectionRight();
    }
    else if (e.key == "Left" || e.key == "ArrowLeft" || e.key.toLowerCase() == "a") {
        setDirectionLeft();
    }
    if (e.key == "Up" || e.key == "ArrowUp" || e.key.toLowerCase() == "w") {
        setDirectionUp();
    }
    else if (e.key == "Down" || e.key == "ArrowDown" || e.key.toLowerCase() == "s") {
        setDirectionDown();
    }
}

function setDirectionRight() {
    console.log("right")
    //change the snake's direction to moving right
    if(dx == 0) {
        //snake can't turn around completely
        dx = snakeVel;
        dy = 0;
    }
}

function setDirectionLeft() {
    //change the snake's direction to moving left
    if(dx == 0) {
        //snake can't turn around completely
        dx = -snakeVel;
        dy = 0;
    }
}

function setDirectionUp() {
    //change the snake's direction to moving up
    if(dy == 0) {
        //snake can't turn around completely
        dx = 0;
        dy = -snakeVel;
    }
}

function setDirectionDown() {
    //change the snake's direction to moving down
    if(dy == 0) {
        //snake can't turn around completely
        dy = snakeVel;
        dx = 0;
    }
}

function collide() {
    //Game should end if the snake hits a wall
    if(snakeSegments[0].x >= canvas.width || snakeSegments[0].x < 0 ||
        snakeSegments[0].y >= canvas.height || snakeSegments[0].y < 0) {
            //uh oh
            gameOverMessage();
        }
}

function eatYourTail() {
    //Game ends if the snake collides with itself
    for(let i=snakeSegments.length-1; i>0; i--) {
        if(snakeSegments[i].x == snakeSegments[0].x && 
            snakeSegments[i].y == snakeSegments[0].y) {
                //uh oh
                gameOverMessage()
            }
    }
}

function gameOverMessage() {
    let winner = prompt(`GAME OVER\nLength: ${snakeSegments.length}\n\nEnter your name to submit your score!`);
    if(winner === null) {
        //play again
        snakeSegments = [{x: random("x"), y: random("y")},];
        document.location.reload();
        return;
    }
    else if(winner.length > 0){ //submit scores
        $.ajax({
            type : "POST",  //type of method
            url  : "enterScore.php",  //your page
            data : { name : winner, score : snakeSegments.length, comments : "" },// passing the values
            success: function(res){  
                window.location.replace("scores.php");
                console.log("success")
            }
        });
    } else {
        snakeSegments = [{x: random("x"), y: random("y")},];
        document.location.reload();
    }
}

function capture() {
    //if the snake collides with the apple, make a new apple and grow the snake
    if(snakeSegments[0].x == appleX && snakeSegments[0].y == appleY) {
        appleX = random("x");
        appleY = random("y");
        growSnake();
    }
}

function drawSnake() {
    //draw all the snake segments
    for(let i = 0; i < snakeSegments.length; i++) {
        ctx.beginPath();
        ctx.rect(snakeSegments[i].x, snakeSegments[i].y, boxWidth, boxWidth);
        ctx.fillStyle = "#ea6a6a";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
    }
}

function moveSnake() {
    /*work backwards and give each snake segment the coordinates
    of the segment ahead of it*/
    for(let i = snakeSegments.length - 1; i > 0; i--) {
        snakeSegments[i].x = snakeSegments[i-1].x;
        snakeSegments[i].y = snakeSegments[i-1].y;
    }
    //change the coordinates of the head segment according to current velicities
    snakeSegments[0].x += dx;
    snakeSegments[0].y += dy;
}

function growSnake() {
    //add new segments to the snake
    //these segments will show up as the snake moves
    for(let i=0; i<snakeGrowth; i++) {
        snakeSegments.push(
            {x: Math.abs(snakeSegments[snakeSegments.length-1].x),
            y: Math.abs(snakeSegments[snakeSegments.length-1].y)}
        );
    }
}

function drawApple() {
    //draw an apple
    ctx.beginPath();
    ctx.rect(appleX, appleY, boxWidth, boxWidth);
    ctx.fillStyle = "#97e397";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    //redraw the board
    requestAnimationFrame(draw);
    now = Date.now();
    //if statement makes the game play blink (defeats smooth animation)
    if (now - start > fpsInterval) {
        start = Date.now();
        //draw the game board
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSnake();
        drawApple();
        collide();
        eatYourTail();
        capture();

        //always move the snake
        moveSnake();
    }
}

//commence play
start = Date.now();
draw();