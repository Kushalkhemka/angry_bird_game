class constraint 
{
    constructor(bodyA,pointB)
    {

    var options=
    {
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.08

    }

    

    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    }

    fly()
    {
        this.chain.bodyA=null;
    }

    

    display()
    {
       

        if(this.chain.bodyA)
        {
            strokeWeight(3);
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y);
        }
    }
}
