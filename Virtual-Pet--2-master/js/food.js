class Food{
    constructor(){
        //var foodStock,lastFed,milkI;
    }

    preload(){
       milkI=loadImage("Milk.png")
    }

    display(){
        push()
        imageMode(CENTER);
        image(milkI,0,0,70,70);
        pop();
    }

   getFoodStock(){}
   updateFoodStock(){}
   deductFood(){}
}