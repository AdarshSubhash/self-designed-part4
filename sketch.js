var Car;
var ground, invisibleGround, groundImage;
var Cari;
var Cari2;
var m1;
var m2;
var ful;
var MK;
var distance;
var dist;
var dist1;
var dist2;
var dist11;
var dist22;
var dist33;
var ts;
var cd;
var hf;
var tot;
var groundi;
var demon;
var demond;
var fuel;
var health;
var lizard;
var Money;
var moneyi;
var bg;
//var Dragon;
//Dragoni;
var Medusa;
var monstersGroup;
var PLAY=1;
var END=0;
var gameState=PLAY;
var button;
var restart;



function preload(){
 // Cari=loadImage("Images/Car.png");
bg=loadImage("Images/BG2.jpg");

groundi=loadImage("Images/final.png");

demon=loadAnimation("Images/DWalk6.png","Images/DWalk5.png","Images/DWalk4.png","Images/DWalk3.png",
"Images/DWalk2.png","Images/DWalk1.png","Images/DIdle3.png","Images/DIdle2.png","Images/DIdle1.png",
"Images/DAttack4.png");


demond=loadAnimation("Images/Death6.png");

//Dragoni=loadAnimation("Images/DrAttack1.png","Images/DrAttack2.png","Images/DrAttack3.png","Images/DrAttack4.png")

Lizard=loadAnimation("Images/LWalk6.png","Images/LWalk5.png","Images/LWalk4.png","Images/LWalk3.png",
"Images/LWalk2.png","Images/LWalk1.png","Images/LIdle3.png","Images/LIdle2.png","Images/LIdle1.png",
"Images/LAttack1.png","Images/LAttack2.png","Images/LAttack3.png","Images/LAttack4.png","Images/LAttack5.png");

Medusa=loadAnimation("Images/MWalk1.png","Images/MWalk2.png","Images/MWalk3.png",
"Images/MWalk4.png","Images/MAttack1.png","Images/MAttack2.png","Images/MAttack3.png","Images/MAttack4.png",
"Images/MAttack5.png","Images/MAttack6.png");

moneyi=loadImage("Images/Money.png");

Cari=loadImage("Images/car1.png");
Cari2=loadAnimation("Images/car1.png","Images/car2.png");

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  button=new Button;

  Car=createSprite(displayWidth/7.7,displayHeight/1.49,30,20);
  ground=createSprite(displayWidth/2,displayHeight-150,displayWidth,10);
  dist1=createSprite(displayWidth/2,displayHeight/12,displayWidth/4,displayHeight/30);
  dist=createSprite(displayWidth/2.655,displayHeight/12,displayWidth/300,displayHeight/22);
 
  dist2=createSprite(displayWidth/2.655,displayHeight/16,displayWidth/150,displayHeight/60);
 // Dragon=createSprite(displayWidth/1,displayHeight/5,20,10);
  //Dragon.addAnimation("d",Dragoni);
 

 fuel=25;
 ts=0;
 MK=0;
 cd=0;
 hf=0;
 health=5;
 distance=0;
 tot=0;
 
 
  Car.addAnimation("c",Cari);
  Car.addAnimation("t",Cari2);
  ground.addImage(groundi);
 // bg1.addImage(bg);
  
  Car.scale=0.5;
  //Dragon.velocityX=-8;
  monstersGroup=new Group();
}

function draw() {
  background(bg);
  drawSprites();
  button.display();
  fill("green");
textSize(30);
  text("Fuel: "+ fuel, displayWidth/12, displayHeight/10);
  fill("red");
  text("Health: "+ health, displayWidth/5, displayHeight/10);
  fill("blue");
  text("Distance", displayWidth/2.2, displayHeight/17);
  fill("green");
  text("Money: "+ tot, displayWidth/22, displayHeight/20);
 dist1.shapeColor="black";
 dist.shapeColor="white";
 dist2.shapeColor="red";

  
  if(gameState === PLAY){
   
    if(keyDown(RIGHT_ARROW)){
      ground.velocityX=-15;
      fuel = fuel -  Math.round(getFrameRate()/60);
      ts=ts + Math.round(World.frameCount/170);
      Car.changeAnimation("t",Cari2);
      dist2.velocityX=0.009999;
      dist.velocityX=0.009999;
      distance=distance + Math.round(World.frameCount/180);
    if(monstersGroup.isTouching(Car)){
     health=health-1;
    monstersGroup.setVelocityXEach(50);
     monstersGroup.setVelocityYEach(-23);
 MK=MK+1;
 cd=cd+1;
 hf=hf+5;
        }
        tot=ful+MK+ts+distance-cd-hf;     
    }
    if(keyWentUp(RIGHT_ARROW)){
      ground.velocityX=0;
      Car.changeAnimation("c",Cari);
     fuel = fuel  //  Math.round(getFrameRate()/10000);
     dist2.velocityX=0;
     dist.velocityX=0;
    }
    
     if(ground.x<0){
       ground.x=ground.width/2;
       
     }

    spawnMonsters();


     

    Car.setCollider("circle",0,0,40);
    ful=fuel;
    if (fuel===0){
      gameState = END;
    }
    if (health===0){
      gameState = END;
    }
    }
    
    else if(gameState === END) {
    Money=createSprite(displayWidth/2,displayHeight/2.4,displayWidth/2.5,displayHeight/2);
Money.addImage(moneyi);
Money.scale=0.9;

dist2.velocityX=0;
dist.velocityX=0;

m1=createSprite(displayWidth/1.656,displayHeight/2.49,displayWidth/8.3,displayHeight/3.5);
m1.shapeColor = "#0ED145";

m2=createSprite(displayWidth/1.643,displayHeight/1.52,displayWidth/9,displayHeight/4.5);
 m2.shapeColor="#0ED145";

 dist22=createSprite(displayWidth/2,displayHeight/4.5,displayWidth/4,displayHeight/30);
 dist11=createSprite(displayWidth/2.655,displayHeight/4.5,displayWidth/300,displayHeight/22);
 dist33=createSprite(displayWidth/2.655,displayHeight/5,displayWidth/150,displayHeight/60);
 restart=createSprite(displayWidth/2,displayHeight/5.6,displayWidth/10,displayHeight/20);
 dist22.shapeColor="black";
 dist11.shapeColor="white";
 dist33.shapeColor="red";
 restart.shapeColor="red";
 dist11.x=dist2.x;
 dist33.x=dist.x;
 
 fill("white");
 text(""+MK, displayWidth/1.84 ,displayHeight/2.68 );
  text(""+cd, displayWidth/1.8, displayHeight/1.73);
  text(""+ful, displayWidth/1.84, displayHeight/3.28);
  text(""+ts, displayWidth/1.84, displayHeight/1.97);
  text(""+hf, displayWidth/1.8, displayHeight/1.53);
  text(""+distance, displayWidth/1.84, displayHeight/2.26);
  text(""+tot, displayWidth/1.8, displayHeight/1.37);
  fill("black");
  text("Restart", displayWidth/2.15, displayHeight/5.3);
  //text("", displayWidth/1.84, displayHeight/1.97);
      if(keyDown(RIGHT_ARROW)){
      ground.velocityX=0;
         
    }
    if(keyWentUp(RIGHT_ARROW)){
      ground.velocityX=0;
    
    }
   // monstersGroup.setVelocityXEach(0);
    Car.changeAnimation("c",Cari);
   
       }    
       if(mousePressedOver(restart)) {
        reset();
      }
    

 
    }
    function reset(){
      gameState = PLAY;
      Money.visible=false;
      m1.visible=false;
      m2.visible=false;
      monstersGroup.destroyEach();
      
      health=5;
      fuel=25;
 }

    function spawnMonsters() {
      if(frameCount % 120 === 0) {
        var monsters= createSprite(displayWidth/1,displayHeight/1.46,10,40);
        monsters.velocityX = -12;
        
       
        var rand = Math.round(random(1,3));
       switch(rand){
         case 1:monsters.addAnimation("dm",demon);
         break;
         case 2:monsters.addAnimation("me",Medusa);
         break;
         case 3:monsters.addAnimation("li",Lizard);
         break;
        // case 4:obstacle.addImage(ob4);
       //  break;
       //  case 5:obstacle.addImage(ob5);
       //  break;
       //  case 6:obstacle.addImage(ob6);
        // break;
         default:break;
       }
        
                 
        //monsters.scale = 0.5;
      //  monsters.lifetime = 100;
        monstersGroup.add(monsters);
      }
    
    }