var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(55,90);
  weight=random(400,1500);

  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

}

function draw() {
  background(255,255,255);  

  bullet.velocityX=speed;
  

  if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
    
    textSize(24);
    fill('black');
    text("Damage:"+damage,100,100);
      if(damage>10){
        wall.shapeColor=color(255,0,0);
      }

      if(damage<10){
        wall.shapeColor=color(0,255,0);
      }
    }


  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  LbulletRightEdge=Lbullet.x+Lbullet.width;
  LwallLeftEdge=Lwall.x;
  if(LbulletRightEdge>=LwallLeftEdge){
    return true
  }
  return false;
}