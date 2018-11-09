const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dragPoint = new Point(200,200,20,"white");
dragPoint.draw(context);
dragPoint.drag();

let otherDragPoint = new Point(300,100,20,"white");
otherDragPoint.drag();

let anOtherOtherPoint = new Point(800,400,20,"white");
anOtherOtherPoint.drag();


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  context.beginPath();
  context.fillStyle = "rgba(255,0,0,0.2)";
  context.moveTo(dragPoint.x,dragPoint.y);
  context.lineTo(otherDragPoint.x,otherDragPoint.y);
  context.lineTo(anOtherOtherPoint.x,anOtherOtherPoint.y);
  context.fill();
  context.closePath();
  context.stroke();

  dragPoint.draw(context);
  otherDragPoint.draw(context);
  anOtherOtherPoint.draw(context);
}

animate();
