var database;
var canvas,backgroundImg,gameState=0,playerCount,form,player,game;
var allPlayers,distance=0;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if (playerCount===4){
        //when there are 4 players it will show the gamestate as 1 in database
        game.update(1);

    }

    if(gameState === 1){
        clear();
        game.play();
    }
}