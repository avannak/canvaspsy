var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255, 50, 255, .9)';
// c.fillRect(100, 100, 300, 200);
// c.fillStyle = 'rgba(50, 255, 50, .9)';
// c.fillRect(50, 600, 20, 20);
// c.fillRect(200, 600, 20, 20);
// c.fillStyle = 'rgba(50, 50, 255, .9)';
// c.fillRect(300, 600, 20, 20);
// c.fillRect(400, 600, 20, 20);
// c.fillRect(450, 600, 20, 20);



// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(500, 500);
// c.lineTo(400, 20);
// c.strokeStyle = 'rgba(50, 200, 200, .9)';
// c.stroke();

// c.beginPath();
// c.arc(200, 300, 30, 0, Math.PI * 2, false);
// c.stroke();

// for(var i =0; i<2000; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.strokeStyle='rgba('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+','+Math.random()+')';
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.stroke();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
    
//     c.stroke();
// }
function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.lineWidth
        c.stroke();
        
        c.fill();
    }

    

    this.update = function() {
    
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
            
        }
        if(this.x + this.radius )
        if(this.y + this.radius > innerHeight || this.y - this.radius <0){
            this.dy = -this.dy;
            
        }
        this.x+=this.dx;
        this.y+=this.dy;
        
        this.draw();
    }
}

var circle = new Circle(200, 300, 1, 1, 30);

function changefillColor(){
    c.fillStyle = 'rgba('+Math.random()*255+','+Math.random()*255+',' +Math.random()*255+')';
}
function changeStrokeColor(){
    c.strokeStyle='rgba('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+','+Math.random()+')';
}



var circleArray = [];

for(var i =0; i< 1000;i++){
    
    changefillColor();
    var radius = Math.random() * 30;
    var x = Math.random() * (innerWidth-radius * 2)+radius;
    var dx = (Math.random() - 0.5);
    var y = Math.random() * (innerHeight-radius *2)+radius;
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius));
    
}

function animate(){

    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    circle.update();
    for(var i=0; i < circleArray.length; i++){
        circleArray[i].update();
       
 
    }
    
    
    
}
animate();
setInterval(changefillColor, 300);
setInterval(changeStrokeColor, 300);
 