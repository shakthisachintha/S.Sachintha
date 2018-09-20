function run() {
    if (pause === 1) {

    } else {

        background(50);
        fill(12);
        rect(-1, -1, 601, 30);

        s.show();
        if (s.eat(food)) {
            getloc();
        }
        s.death();
        s.update();
        fill(255, 0, 0);
        rect(food.x, food.y, multi, multi, 6);

    }
}



function getloc() {
    var cols = floor((600) / multi);
    var rows = floor((600) / multi);
    food = createVector(floor(random(cols)), floor(random(5, rows)));
    food.mult(multi);

}


function keyPressed() {
    if (keyCode === UP_ARROW && gameon === 1) {
        if (s.yspeed == -1 || s.yspeed == 1) {

        } else {
            s.dir(0, -1);
        }


    } else if (keyCode === DOWN_ARROW && gameon === 1) {
        if (s.yspeed == -1 || s.yspeed == 1) {

        } else {
            s.dir(0, 1);
        }


    } else if (keyCode === LEFT_ARROW && gameon === 1) {
        if (s.xspeed == -1 || s.xspeed == 1) {

        } else {
            s.dir(-1, 0);

        }


    } else if (keyCode === RIGHT_ARROW && gameon === 1) {
        if (s.xspeed == -1 || s.xspeed == 1) {

        } else {
            s.dir(1, 0);

        }


    } else if (keyCode === 80) {
        if (pause === 1) {
            pause = 0;
        } else {
            pause = 1;
        }
    } else if (keyCode === 82) {
        window.location.reload(true);
    }
}



function snake() {
    this.x = 300;
    this.y = 300;
    this.xspeed = 1;
    this.yspeed = 0;
    this.tail = [];
    this.total = 0;

    this.death = function() {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {

                this.tail = [];
                gameon = 0;
                console.log("Game Over");
            }
        }
        if (this.x === 0 || this.x === (width - multi) || this.y === 30 || this.y === (height - multi)) {

            this.tail = [];
            gameon = 0;
            console.log("Game Over");
        }
    }


    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 15) {

            this.total++;
            if (this.total > 0 && this.total % 5 === 0) {

                speed = speed + 1
                level = level + 1;
                framerate = framerate + 5;

            }
            return true;

        } else {
            return false;
        }
    }

    this.update = function() {

        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }

        }
        this.tail[this.total - 1] = createVector(this.x, this.y);



        this.x = this.x + this.xspeed * speed;
        this.y = this.y + this.yspeed * speed;
        this.x = constrain(this.x, 0, width - multi);
        this.y = constrain(this.y, 30, height - multi);
    }

    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.show = function() {


        fill(255);
        for (var i = 0; i < this.total; i++) {
            rect(this.tail[i].x, this.tail[i].y, multi, multi, 5);
        }
        rect(this.x, this.y, multi, multi, 5);
    }
}