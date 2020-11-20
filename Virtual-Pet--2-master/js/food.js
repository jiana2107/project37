class Food{
    constructor(){
        this.foodStock=null;
       // this.button;
    }

    display(){
      var x=80,y=100;

      imageMode(CENTER)
      

      if(this.foodStock!=0){
          for(var i=0;i<this.foodStock;i++){
              if(i%10==0){
                  x=80;
                  y=y+50;
              }
            image(milkI,x,y,50,50)
            x=x+20;
          }
      }
    }

     getFoodStock(){
      database.ref('food').on("value",(data)=>{
        this.foodStock=data.val()
      })
      }
    
  updateFoodStock(x){  
      if(x<=0){
        x=0
      }
      database.ref('/').update({
        food:x})
    }
    
   deductFood(x){
    if(x>=0){
      x=10
    }
    database.ref('/').update({
      food:x})
  }

  getState(){
    readState=database.ref('gameState');
    readState.on("value",function(data){
      gameState=data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }


  }
  
