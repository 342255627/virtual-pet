//Create variables here
var database, foodS, foodStockdog,dogImg, happyDogImg;

function preload()
{
  //load images here
  happyDogImg = loadImage("images/dogImg.png");
  dogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  var dog = createSprite();
  dog.addImage(dogImg);
  var happyDog = createSprite();

  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {  
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    happyDog.addImage(happyDogImg);
  }
  drawSprites();
  //add styles here
fill();
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
  }else{
  x=x-1;
  }
database.ref('/').update((
  Food:x))
}
