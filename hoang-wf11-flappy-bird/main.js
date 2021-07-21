const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// Background:
const backgroundImg = new Image();
backgroundImg.src = "./image/background.png";

const groundImg = new Image();
groundImg.src = "./image/ground.png";

const pipe_bottom = new Image();
pipe_bottom.src = "./image/pipe-bottom.png";

const pipe_top = new Image();
pipe_top.src = "./image/pipe-top.png";

const game_ready = new Image();
game_ready.src = "./image/ready.png";

const medal_1 = new Image();
medal_1.src = "./image/medal-1.png";

const medal_2 = new Image();
medal_2.src = "./image/medal-2.png";

const medal_3 = new Image();
medal_3.src = "./image/medal-3.png";

const medal_4 = new Image();
medal_4.src = "./image/medal-4.png";

// Image Bird: 
const birdImg = new Image();
birdImg.src = "./image/bird.png";

const birdImg_up = new Image();
birdImg_up.src = "./image/bird-up.png";

const birdImg_down = new Image();
birdImg_down.src = "./image/bird-down.png";

//Sound:
const FLAP = new Audio();
FLAP.src = "./audio/sfx_flap.wav";

const DIE = new Audio();
DIE.src = "./audio/sfx_die.wav";

const POINT = new Audio();
POINT.src = "./audio/sfx_point.wav";

const HIT = new Audio();
HIT.src = "./audio/sfx_hit.wav";

const START = new Audio();
START.src = "./audio/sfx_swooshing.wav";

let start_game = document.getElementById("start-game");
let play_game = document.getElementById("play-game");
let end_game = document.getElementById("end-game");

let btn_start_game = document.getElementById("btn_start-game");
let btn_play_again = document.getElementById("btn_play-again");
let btn_exit = document.getElementById("btn_exit");

btn_start_game.addEventListener("click", function () {
    start_game.style.display = "none";
    play_game.style.display = "block";
    animate();
})

// Nút chơi lại game:
btn_play_again.addEventListener("click", function () {
    end_game.style.display = "none";
    start_game.style.display = "none";
    play_game.style.display = "block";
    bird.rotation = 0;
    background.arr = [];
    background.score = 0;
    bird.speed = 0;
    background.current = background.ready;
})

btn_exit.addEventListener("click", function () {
    window.location.reload();
})

class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 34;
        this.height = 25;
        this.radius = 12;

        this.gravity = 0.25; // Trọng lực
        this.jump = 4.6;
        this.speed = 0;

        this.frame = 0; // Frame theo chuyển động con chim
        this.frames = 0; // Frames theo số khung hình
        this.period = 10;
        this.animation = [birdImg_up, birdImg, birdImg_down, birdImg];

        this.degree = Math.PI / 180;
        this.rotation = 0;
    }
    draw() {
        let bird_animation = this.animation[this.frame];
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.rotation);
        c.drawImage(bird_animation, -this.width / 2, -this.height / 2, this.width, this.height);
        c.restore();
    }
    flap() {
        this.speed = -this.jump;
    }
    update() {
        if (background.current == background.game) {
            this.period = 5;
        }
        // Tăng frame lên 1 theo mỗi giai đoạn
        this.frame += this.frames % this.period == 0 ? 1 : 0;
        // Tăng từ 0 lên 4, sau đó trả về 0
        this.frame = this.frame % this.animation.length;

        if (background.current == background.ready) {
            this.y = canvas.height / 4;
        } else {
            this.speed += this.gravity;
            this.y += this.speed;

            if (this.y + this.height / 2 >= canvas.height - background.heightGround) {
                this.y = canvas.height - background.heightGround - this.height / 2;
                if (background.current == background.game) {
                    background.current = background.over;
                    DIE.play();
                }
            }

            // Góc xoay của con chim
            if (this.speed > this.jump) {
                this.rotation = 90 * this.degree;
                this.frame = 1;
            } else {
                this.rotation = -25 * this.degree;
            }
        }
    }
}

class Background {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.score = 0;

        this.xGround = 0;
        this.widthGround = 1800;
        this.heightGround = 111;
        this.dx = 2;

        this.arr = [];
        this.widthPipe = 52;
        this.heightPipe = 400;
        this.gap = 105; // Khoảng cách 2 ống
        this.maxYPipe = -160;
        this.dxPipe = 2;

        // Trạng thái game
        this.current = 0; // Trạng thái hiện tại
        this.ready = 0;  // Chuẩn bị
        this.game = 1;   // Chơi game
        this.over = 2;   // Kết thúc game
    }
    draw() {
        c.drawImage(backgroundImg, this.x, this.y, this.width, this.height);
    }
    drawGround() {
        c.drawImage(groundImg, this.xGround, canvas.height - this.heightGround, this.widthGround, this.heightGround);
    }
    update() {
        if (this.current == this.game) {
            this.xGround = (this.xGround - this.dx) % (this.widthGround / 2);
        }

        if (this.current != this.game) {
            return;
        }

        // Tạo toạ độ cho ống
        if (bird.frames % 100 == 0) {
            this.arr.push({
                x: canvas.width,
                y: this.maxYPipe * (Math.random() + 1) // Toạ độ Y nằm trong khoảng xấp xỉ -160 đến -320
            });
        }
        for (let i = 0; i < this.arr.length; i++) {
            let p = this.arr[i];

            let bottomPipeY = p.y + this.heightPipe + this.gap;

            if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.widthPipe
                && bird.y + bird.radius > p.y && bird.y - bird.radius < p.y + this.heightPipe) {
                this.current = this.over;
                HIT.play();
            }

            if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.widthPipe
                && bird.y + bird.radius > bottomPipeY && bird.y - bird.radius < bottomPipeY + this.heightPipe) {
                this.current = this.over;
                HIT.play();
            }

            p.x -= this.dxPipe; // Di chuyển ống

            // Xoá ống trong mảng khi di chuyển ra khỏi màn hình
            if (p.x + this.widthPipe <= 0) {
                this.arr.shift();
                this.score++;
                POINT.play();
            }
        }
    }
    drawPipe() {
        for (let i = 0; i < this.arr.length; i++) {
            let p = this.arr[i];

            let botYPipe = p.y + this.heightPipe + this.gap;

            // Top Pipe:
            c.drawImage(pipe_top, p.x, p.y, this.widthPipe, this.heightPipe);

            // Bottom Pipe:
            c.drawImage(pipe_bottom, p.x, botYPipe, this.widthPipe, this.heightPipe);
        }
    }
    drawScore() {
        c.beginPath();
        c.fillStyle = "white";
        c.font = "30px sans-serif";
        c.fillText(this.score, canvas.width / 2, 40);
    }
    drawReady() { // Chuẩn bị vào game
        if (this.current == this.ready) {
            c.drawImage(game_ready, canvas.width / 2 - 58, canvas.height / 2 - 100);
        }
    }
    transcript() { // Kết thúc game
        if (this.current == this.over) {
            c.beginPath();
            c.fillStyle = "#2B190E";
            c.fillRect(canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 150);

            c.beginPath();
            c.fillStyle = "#FCEF87";
            c.fillRect(canvas.width / 2 - 145, canvas.height / 2 - 145, 290, 135);

            c.beginPath();
            c.fillStyle = "#E37332";
            c.font = "normal normal 600 25px sans-serif ";
            c.fillText("SCORE", canvas.width / 2 - 110, 155);

            c.beginPath();
            c.fillStyle = "#260101";
            c.font = "normal normal 700 40px sans-serif";
            c.fillText(this.score, canvas.width / 2 - 80, 210);

            c.beginPath();
            c.fillStyle = "#E37332";
            c.font = "normal normal 600 25px sans-serif ";
            c.fillText("MEDAL", canvas.width / 2 + 20, 155);

            if (this.score >= 20) {
                c.drawImage(medal_4, canvas.width / 2 + 40, 170);
            } else if (this.score >= 10) {
                c.drawImage(medal_3, canvas.width / 2 + 40, 170);
            } else if (this.score >= 5) {
                c.drawImage(medal_2, canvas.width / 2 + 40, 170);
            } else {
                c.drawImage(medal_1, canvas.width / 2 + 40, 170);
            }
        }
    }
}

let bird = new Bird(50, canvas.height / 4);
let background = new Background(0, 0, 900, 500);

canvas.addEventListener("click", function () {
    switch (background.current) {
        case background.ready:
            background.current = background.game;
            START.play();
            break;
        case background.game:
            bird.flap();
            FLAP.play();
            break;
    }
})

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    background.update();
    background.drawPipe();
    background.drawGround();
    background.drawScore();
    background.drawReady();

    bird.update();
    bird.draw();

    bird.frames++;

    if (background.current == background.over) {
        end_game.style.display = "block";
        background.transcript();
    }
    requestAnimationFrame(animate);
}




