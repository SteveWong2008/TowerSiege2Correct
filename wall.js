class wall extends BaseClass{
  constructor(x, y, width, height) {
      
      super(x,y,width,height);
      this.image = loadImage("Soldier.PNG")
      this.Visiblility = 255
      
      
    }
    display(){
        


        if(this.body.speed < 3){
          super.display();
        }
        else{
          World.remove(world,this.body);
          push();
          this.Visibility = this.Visibility - 10
          tint(255,this.Visibility);
          image(this.image,this.body.position.x,this.body.position.y,30,40)
          pop();
          
        }

      

    }
}
