class Umbrella {

    constructor(x,y){
        var options = {
            isStatic: true,
    
        }


        this.body= Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
    
        this.image = loadImage("proc41images(1)/Walking Frame/walking_1.png");
    }
    
    
    display(){
    
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y,300,300);
    }
    
    
    
    
    
    
    
    
    
    
    }