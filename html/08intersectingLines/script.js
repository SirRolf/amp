const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(200,200,20,"white");
let B = new Point(600,300,20,"white");
let C = new Point(200,500,20,"white");
let D = new Point(600,100,20,"white");

let S = new Point(0,0,10,"white");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

A.drag(); B.drag();C.drag();D.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  l.defineLineWithTwoPoints(A,B);
  l.draw(context);

  m.defineLineWithTwoPoints(C,D);
  m.draw(context);

  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);

  S.draw(context);

  A.printText("A");
  B.printText("B");
  C.printText("C");
  D.printText("D");
}

animate();
