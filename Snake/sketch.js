 var multi = 15;
 var speed = 1;
 var food;
 var pause = 0;
 var framerate = 10;
 var cnv;
 var s;
 var gameon = 1;

 function setup() {


     cnv = createCanvas(600, 610);
     noStroke();
     cnv.parent('cnv-container');
     s = new snake();
     frameRate(100);

     getloc();

 }

 function draw() {
     run();

     if (gameon === 0) {
         background(22);

         noLoop();
         fill(100, 0, 0);
         textAlign(CENTER, CENTER);
         textFont("Comic Sans MS");
         textSize(50);
         text("Game Over \nYour Total :  " + s.total, 300, 300);
     }



     fill(10, 200, 120);
     textAlign(CENTER);
     textFont("Comic Sans MS");
     textSize(20);
     text("Score :  " + s.total, 290, 19);

 }