class Particle{

    constructor(x, y){
        var options={
            restitution:0,
            friction:1,
            density:1.2
        }
        this.Body= Bodies.circle(x, y, 10, options);
      //  this.image= loadImage("stone.png");
        this.radius=10;
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.Body);
    }

    display(){
        push();
    
       ellipseMode(RADIUS);
       translate(this.Body.position.x, this.Body.position.y);
       rotate(this.Body.angle);
       fill(this.color)
       ellipse( 0,0 ,this.radius, this.radius);
       pop();
    }
}