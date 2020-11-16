//Create variables here
var dog,hDog,dogI,foodS,foodStock;
var database;
var position;
var feed,addFood;
var fedTime,lastFed;
var foodObj;
var milkI;

function preload(){
  //load images here 
  dogI=loadImage("images/dogImg.png")
  hDog=loadImage("images/dogImg1.png")
  milkI=loadImage("images/Milk.png")
}

function setup() {
	createCanvas(1000, 500);
  database=firebase.database()

  dog = createSprite(800,250,10,10);
  dog.shapeColor = "red";
  dog.addImage(dogI)
  dog.scale=0.5

  feed=createButton("FEED THE DOG")
  feed.position(200,120)
  feed.mousePressed(feedDog)

  addFood=createButton("ADD FOOD")
  addFood.position(200,150)
  addFood.mousePressed(addFood)

  foodObj=new Food()
  foodObj.getFoodStock()
}

function draw() {  
  background(46,139,87)

  /*if(keyWentDown(UP_ARROW)){
    foodS=foodS-1;
    writeStock(foodS)
    dog.addImage(hDog) }*/

  foodObj.display()
  drawSprites();

  //fill("black")
  //text("PRESS UP_ARROW KEY TO FEED DRAGO MIKI!!",250,50)
  fill(255,255,254)
  textSize(15)

  if(lastFed>=12){
    text("LAST FED:" +lastFed%12 +"PM",350,40)
  }else if(lastFed==0){
    text("LAST FED :12 AM",350,30 )
  }else{
    text("LAST FED:" +lastFed+"AM",350,30)
  }
 
  fill("black")
  text("FOOD STOCK:"+foodObj.foodStock,50,450)

}

//functions
function addFood(){
  foodS++;
  database.ref('/').update({
    food:foodS})
}

function feedDog(){
  dog.addImage(hDog)
  //function deductFood()

  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    Food:foodObj.updateFoodStock(foodObj.getFoodStock()-1),
    FeedTime:hour()
  })
}





