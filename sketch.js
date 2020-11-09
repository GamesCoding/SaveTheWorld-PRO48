var canvas, backgroundImage;

var gameState = 0;
var playerCount, virCount;

var cases;

var stock;
var database;

var lab1, lab2, lab3, dish1, vi1, bact1, bact2, bact3, bact4, finished, lost;

var dish, dish1;

var viGroup, otherMicrobesGroup;

var continue1;

var score = 0;

var theVi, unwantedMicrobes;

var form, player, game, vi;

function preload(){
  
}

function setup(){
  canvas = createCanvas(1075,505);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  dish = new Player();

  dish = createSprite(537.5,400,50,50);
  dish.visible = false;

  viGroup = new Group();
  otherMicrobesGroup = new Group();

  /*continue1 = createButton('Continue');
  continue1.position(735,600);
  continue1.mousePressed(score = score + 1);
  continue1.hide();  
  */
}


function draw(){
    background(rgb(46, 139, 87));

    //form.display();

    //console.log(cases);
    game.getState();

  if(playerCount === 1 && vi.name === null){
    game.update(1);
  }
  
  if(gameState === 1){
    game.start();
  }
  
  if(gameState === 2){
    game.play1();

    if(frameCount%100 === 0 && score !== 30){

      vi.cases = vi.cases+100000;

      vi.update();

      touchMoved();
    }

  }

  if(gameState === 3){
    game.roundEnded1();

    //continue1.show();
  }

  if(vi.cases%100 !== 0){
    game.update(4);
  }

  if(gameState === 4){
    game.playLast();

    if(frameCount%100 === 0 && vi.cases !== 0 && vi.cases < 2000000){

      vi.cases = vi.cases+100000;

      vi.update();
    }
  }

  if(vi.cases >= 2000000){
    game.lose();
  }
}

function touchMoved(){
  return dish.x;
}