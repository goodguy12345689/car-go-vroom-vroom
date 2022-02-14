  
var towerImg, tower;
var doorImg, door, doorsGroup;

var ghost, ghostImg;

var gameState = "play"


function preload(){
  towerImg = loadImage("800px_COLOURBOX7745320 (1).jpg");
  doorImg = loadImage("rn2bnp (1).jpg");
  
  ghostImg = loadImage("download (2).jpg");
  spookySound = loadSound("mixkit-urban-city-sounds-and-light-car-traffic-369.wav");
}

function setup() {
  createCanvas(600,600);
 // spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
 
  
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
  
}


function draw() {
  background(255);
 if(tower.y > 200) {
      tower.y = 0
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left")){
        ghost.x = ghost.x - 3;

      // write a code to move left when left arrow is pressed
    }
    if(keyDown("right")){
  
          ghost.x = ghost.x + 3;

      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("up")){
  
         ghost.velocityY = -5;

      // write a code to move up when space arrow is pressed
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
    
      spawnDoors();

  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
    
    
    if(doorsGroup.isTouching(ghost) || ghost.y > 600){
      ghost.destroy();
      gameState = "end";
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    
    
    var ran = Math.round(random(100,500));
    door.x=ran;
    
    
    door.addImage(doorImg);
    door.scale= 0.5
    
    
    door.velocityY = 1;
    
    

    //change the depth of the ghost and door
    
     
door.depth = ghost.depth;
    ghost.depth =ghost.depth+1;
    
    //assign lifetime for the  door, climber and invisible block

 door.lifetime = 800;
  
 
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    
     doorsGroup.add(door);
  
 
  }
}

