class Block {
    constructor(x, y, width, height) {
        var options = {
             isStatic: false,
             'friction':2
    
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
       }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(1);
        stroke("black");
        fill(103,209,234);
        rect(0, 0, this.width, this.height);
        pop();
      }
}