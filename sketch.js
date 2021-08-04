var garden,rabbit;
var gardenImg,rabbitImg;

var apple,appleImg

var leaf, leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg =  loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);

  edges= createEdgeSprites();
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(180);
  
  rabbit.collide(edges[0]);
  rabbit.collide(edges[1]);
  rabbit.x = mouseX

  
 


  drawSprites();


  var select_sprites = Math.round(random(1,2))

  if(frameCount % 80==0) {
    if(select_sprites==1) {
      createApples();
    }
    else {
      createLeaves();
    }

  }
    
  
}

function createApples() {
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale = 0.08
  apple.velocityY = 2
  apple.lifetime = 150
}

function createLeaves() {
  leaf = createSprite(random(30,380),50,20,20)
  leaf.addImage(leafImg)
  leaf.scale = 0.1
  leaf.velocityY = 3
  leaf.lifetime = 160

}