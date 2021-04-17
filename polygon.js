class Bird extends BaseClass {
    constructor(x,y){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':10.0,
        
    }
      
      super(x,y,50,50,options);
      this.image = loadImage("polygon.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }