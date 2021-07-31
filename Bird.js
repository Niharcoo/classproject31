class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.mam=[];
  }

  display() {

if(this.body.position.x>220 && this.body.velocity.x>2){
   var pos= [this.body.position.x,this.body.position.y];
   this.mam.push(pos);
}

  for(var i=0;i<this.mam.length;i=i+1){
  image(this.smoke,this.mam[i][0],this.mam[i][1]);
} 


    super.display();
  }
}
