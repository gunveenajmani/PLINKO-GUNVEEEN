class Plinko{

    constructor(x, y){
        var options={
            isStatic: true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.Body= Bodies.circle(x, y, 10, options);
      //  this.image= loadImage("stone.png");
        this.radius=10;
        World.add(world, this.Body);
    }

    display(){
        push();
    
       ellipseMode(RADIUS);
       translate(this.Body.position.x, this.Body.position.y);
       rotate(this.Body.angle);
       ellipse( 0,0 ,this.radius, this.radius);
       pop();
    }
}