class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution : 0.3,
            friciton:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        ellipseMode(RADIUS);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        ellipse(pos.x, pos.y , this.radius ,this.radius);
        pop();
    }
    }