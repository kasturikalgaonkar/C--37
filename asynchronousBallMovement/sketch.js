var database;
var gameState = 0;
var playerCount = 0;
var allPlayers;

var form, game, player;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(400,400);

    game = new Game();
    game.getstate();
    game.start();
}

function draw(){
    background("white");

    if(playerCount === 4){
      game.update(1);  
    }

    if(gameState === 1){
        clear();
        game.play();
    }
    
    drawSprites();
}



