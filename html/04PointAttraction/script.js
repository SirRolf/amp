const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let amountObject = 100;
let Objects = [];

for(let i = 0; i < amountObject; i++){
  let kineticObject = {};
  kineticObject.point = new Point(200,300,Math.floor(Math.random() * 25) + 5,"white");
  kineticObject.pos = new Vector2d(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight));
  kineticObject.vel = new Vector2d(Math.random() * 2 -1,Math.random() * 0.15);
  kineticObject.acc = new Vector2d(0,0.05);

  Objects.push(kineticObject);
}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
  for(let i = 0; i < Objects.length; i++){
    Objects[i].vel.add(Objects[i].acc);
    Objects[i].pos.add(Objects[i].vel);
    Objects[i].point.position(Objects[i].pos);
    Objects[i].point.draw(context);
    if(Objects[i].pos.dx > canvas.width){
      Objects[i].vel.dx = - Objects[i].vel.dx;
      Objects[i].pos.dx = canvas.width;
    }
    if(Objects[i].pos.dx < 0){
      Objects[i].vel.dx = - Objects[i].vel.dx;
      Objects[i].pos.dx = 0;
    }
    if(Objects[i].pos.dy > canvas.height){
      Objects[i].vel.dy = - Objects[i].vel.dy;
      Objects[i].pos.dy = canvas.height;
    }
    if (Objects[i].pos.dy <0) {
      Objects[i].vel.dy = - Objects[i].vel.dy;
      Objects[i].pos.dy = 0;
    }
  }

}

animate();
