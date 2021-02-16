class Drop{

constructor(x,y){
    var options = {
        isStatic: false,
        friction:0.1,
    }


    this.body=Bodies.circle(x,y,this.radius,options);
    World.add(world,this.body);

}

update(){
    database.ref('Drops').set({
      name:this.name,
      distance:this.distance
    });
  }

display(){

    translate(this.body.position.x,this.body.position.y)
    ellipse(0,0,this.radius,this.radius);
    
   



}










}