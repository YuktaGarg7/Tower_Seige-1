class Chain{
    constructor(bodyA,pointB){
var options ={
    bodyA : bodyA,
    pointB : pointB,
    stiffness : 0.2,
    length : 10
}
this.pointB = pointB
this.sling = Constraint.create(options);
World.add(world,this.sling);
    }
    fly(){
   this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke(48,22,8);
        strokeWeight(10);
        line(pointA,pointA.y,pointb.x,pointB.y);
    }
}
attach(body){
this.sling.bodyA=body;
}
}