class BinImg{  
    constructor(x,y,w,h,i){
        var options={
            isStatic: i
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.body);
        this.image=loadImage("dustbingreen.png")
    
    }
    display(){
        rectMode(CENTER);
        var pos=this.body.position;
        fill("red");
        //rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER)
        image(this.image,pos.x-100,pos.y,this.width,this.height)
    }
        
    
    }