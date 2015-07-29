
var canvas = document.getElementById("canvas");
var ctx= canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;
backgroundChangeNumber = 0;
textbackgroundColor = "rgb(0,0,0)";
textbackgroundColorStart = "rgb(0,0,0)";
colortype = "rgb(0,0,0)";
run = 10;
score = 0;

//JSON array of sprite objects

sprites =  [
{"x": 100,
y: 100,
width: 50,
height: 50,
color: 'rgb(0,0,0)',
colorBrickNumber: 0,
collided: false,
changed: false,
},
{
x: 200,
y: 100,
width: 50,
height: 50,
color:'rgb(0,0,0)',
colorBrickNumber: 0,
collided: false,
changed:false
},
{
    x:300,
    y:100,
    width:50,
    height:50,
    color:'rgb(0,0,0)',
    colorBrickNumber: 0,
    collided: false,
    changed: false
},

{
    x:400,
    y:100,
    width:50,
    height:50,
    color:'rgb(0,0,0)',
    colorBrickNumber: 0,
    collided: false,
    changed: false
},
{
    x:500,
    y:100,
    width:50,
    height:50,
    color:'rgb(0,0,0)',
    colorBrickNumber: 0,
    collided: false,
    changed: false
},

{
    x:600,
    y:100,
    width:50,
    height:50,
    color:'rgb(0,0,0)',
    colorBrickNumber: 0,
    collided: false,
    changed: false

},
{
    x:700,
    y:100,
    width:50,
    height:50,
    color:'rgb(0,0,0)',
    colorBrickNumber: 0,
    collided: false,
    changed: false
},
{
    x:800,
    y:100,
    width: 50,
    height: 50,
    color: 'rgb(0,0,0)',
    colorBrickNumber: 0,
    collided: false,
    changed: false
}

]




ballSprite = {
    x:500,
    y:500,
    radius:10,
    other:0
}









start = function(){


backgroundChange();
backgroundColor(color);
assignBrick();


ctx.fillStyle = textbackgroundColor;
ctx.fillRect(0,0,1000,600);


ctx.fillStyle = "rgb(100,100,100)"
ctx.fillRect(450,550,100,25);

ctx.clearRect(0,0,150,30);
ctx.font="20px Verdana";
ctx.fillText(score,0,20);



for (x in sprites){
    
        ctx.fillStyle = sprites[x].color;
        ctx.fillRect(sprites[x].x, sprites[x].y, sprites[x].width, sprites[x].height);
        ctx.fillStyle = "rgb(100,100,100)";
        ctx.fillRect(sprites[x].x, 80, sprites[x].width, 20 );
    
}

ctx.beginPath();
ctx.fillStyle = "rgb(100,100,100)"
ctx.arc(ballSprite.x,ballSprite.y,10,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();

//alert("Click once to move the launchpad.  Double click to shoot the ball! Try to change the shade of the background as much as possible!")

}



 
    document.body.addEventListener('touchstart', function(e){
        //alert(e.changedTouches[0].pageX) // alert pageX coordinate of touch point
        console.log(e.changedTouches[0].pageX);
        console.log(e.changedTouches[0].pageY);
 //   }, false)
 
}, false)


//document.onmousemove = handleMouseMove;


/*
function handleMouseMove(event){

var mousex = event.pageX;
var mousey = event.pageY;


document.onmousedown = function(){
*/
ctx.clearRect(0,0,canvas.width, canvas.height);

ctx.fillStyle = textbackgroundColor;
ctx.rect(0,0,canvas.width, canvas.height);
ctx.fill();


ctx.fillStyle = "rgb(100,100,100)";
ctx.fillRect(mousex-50,550,100,25);


ctx.beginPath();
ctx.fillStyle = "rgb(100,100,100)"
ctx.arc(mousex, ballSprite.y,10,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();

ctx.clearRect(0,0,150,30);
ctx.font="20px Verdana";
ctx.fillText(score,0,20);


    for (x in sprites){
    if (sprites[x].collided === false){
        ctx.fillStyle = sprites[x].color;
        ctx.fillRect(sprites[x].x, sprites[x].y, sprites[x].width, sprites[x].height);
        ctx.fillStyle = "rgb(100,100,100)";
        ctx.fillRect(sprites[x].x, 80, sprites[x].width, 20 );
 } }  


 

 

document.ondblclick = function(){



for (i = 500; i > 0; i--){

        ctx.arc(mousex,i,10,0,Math.PI*2,true);
        ctx.fill();
        ctx.stroke();


for(a in sprites){


    if (mousex >= sprites[a].x && mousex <= sprites[a].x + 50 ){//&& i >= sprites[a].y && i<= sprites[a].y +50){
 
        sprites[a].collided = true;
    
 }

 //}
 




ctx.clearRect(0,0,canvas.width, canvas.height);




for(a in sprites){

    if (sprites[a].collided === true && sprites[a].changed === false){
        clickBackground();
        sprites[a].changed = true;
  
    }

 }

        ctx = canvas.getContext("2d");
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = textbackgroundColor;
        ctx.rect(0,0,canvas.width, canvas.height);
        ctx.fill();


 for (a in sprites) {
    if(sprites[a].collided === false){
 
        ctx.fillStyle = sprites[a].color;
        ctx.fillRect(sprites[a].x, sprites[a].y, sprites[a].width, sprites[a].height);
        ctx.fillStyle = "rgb(100,100,100)";
        ctx.fillRect(sprites[a].x, 80, sprites[a].width, 20 );

    }
}


        ctx.fillStyle = "rgb(100,100,100)";
        ctx.fillRect(mousex-50,550,100,25);

        ctx.beginPath();
        ctx.fillStyle = "rgb(100,100,100)"
        ctx.arc(mousex,i,10,0,Math.PI*2,true);
        ctx.fill();
        ctx.stroke();


ctx.clearRect(0,0,150,30);
ctx.font="20px Verdana";
ctx.fillText(score,0,20);
 

        
}



if (mySprite.collided === true && mySprite2.collided === true && mySprite3.collided === true 
        && mySprite4.collided === true && mySprite5.collided === true && mySprite6.collided === true
        && mySprite7.collided === true && mySprite8.collided === true && run > 0){

run = run -1

score = score + Math.abs(backgroundChangeNumber - b)*100;





backgroundChange();
backgroundColor(color);
assignBrick();

ctx.clearRect(0,0,1000,600);

ctx.fillStyle = textbackgroundColor;
ctx.fillRect(0,0,1000,600);


ctx.fillStyle = "rgb(100,100,100)";
ctx.fillRect(450,550,100,25);

ctx.clearRect(0,0,150,30);
ctx.font="20px Verdana";
ctx.fillText(score,0,20);

for (x in sprites){
    
        ctx.fillStyle = sprites[x].color;
        ctx.fillRect(sprites[x].x, sprites[x].y, sprites[x].width, sprites[x].height);
        ctx.fillStyle = "rgb(100,100,100)";
        ctx.fillRect(sprites[x].x, 80, sprites[x].width, 20 );
    
}

ctx.beginPath();
ctx.fillStyle = "rgb(100,100,100)"
ctx.arc(ballSprite.x,ballSprite.y,10,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();

for (a in sprites){
    sprites[a].collided = false;
    sprites[a].changed = false;
}



}



 if (run === 0){
    ctx.clearRect(0,0,1000,600);
    ctx.font="40px Verdana";
    ctx.fillText(score, 300,300);
}


    }


}// closing bracket for handleMouseMove

//calls start function
document.addEventListener('DOMContentLoaded',start);

//for (i = 1; i>10; i++){
    
//

//Randomly chooses a background color
var backgroundChange = function(){
    
x=Math.random();
    
if(x>=0 && x<=0.33){
    colorType = 'red'
    b = Math.floor(Math.random()*255);
    backgroundChangeNumber = b;
    color = 'rgb('+b+',0,0)';
    document.getElementById("canvas").style.background = color;
}
    
else if(x> 0.33 && x<=0.66){
    colorType = 'green'
    b = Math.floor(Math.random()*255);
    backgroundChangeNumber = b;
    color = 'rgb(0,'+b+',0)';
    document.getElementById("canvas").style.background = color;
}
    
else {
    colorType = 'blue'
    b = Math.floor(Math.random()*255);
    backgroundChangeNumber = b;
    color = 'rgb(0,0,'+ b +')';
    document.getElementById("canvas").style.background = color;
}



return color,colorType

};

//Turns variable, textbackgroundColor, into a string.

function backgroundColor(color){

 textbackgroundColor = ""+ color +"";
 textbackgroundColorStart = "" + color + "";
  return textbackgroundColor, textbackgroundColorStart
}

function brickColor(colorType){
if (colorType === 'red'){
    a = Math.floor(Math.random()*255);
    colorBrickNumber = a;
   colorBrick = 'rgb('+a+',0,0)';
   
}
else if (colorType === 'green') {
     a = Math.floor(Math.random()*255);
     colorBrickNumber = a;
    colorBrick = 'rgb(0,'+a+',0)';
    
}
else  {
    a = Math.floor(Math.random()*255);
    colorBrickNumber = a;
    colorBrick = 'rgb(0,0,'+ a +')';
    
    }

return colorBrick        
};


//assigns each brick a random color according to background color

function assignBrick(){

var bricks = [mySprite, mySprite2, mySprite3, mySprite4, mySprite5, mySprite6, mySprite7, mySprite8]


for (x in bricks){
brickColor(colorType);
bricks[x].colorBrickNumber = a;
bricks[x].color = colorBrick;
}
}



function clickBackground(){




        if (colorType === 'red'){
         
            if (sprites[a].colorBrickNumber >= backgroundChangeNumber){
                backgroundChangeNumber = backgroundChangeNumber + 30

                console.log(backgroundChangeNumber);
                if (backgroundChangeNumber>=255){
                    textbackgroundColor = "rgb(255,255,255)";
}
                else if (backgroundChangeNumber<= 0){
                    textbackgroundColor = "rgb(0,0,0)";

            }
                else{
                    textbackgroundColor = "rgb("+ backgroundChangeNumber + ",0,0)";

                    }
                }
            
            else {
                backgroundChangeNumber = backgroundChangeNumber - 30
                            for(a in sprites){
                    if (sprites[a].collided === true){
                        sprites[a].changed === true
                    }
                }

            textbackgroundColor = "rgb("+ backgroundChangeNumber + ",0,0)";
           
                if (backgroundChangeNumber>=255){
                    textbackgroundColor = "rgb(255,255,255)";

            }
                else if (backgroundChangeNumber<= 0){
                    textbackgroundColor = "rgb(0,0,0)";

            }
                else{
                textbackgroundColor = "rgb("+ backgroundChangeNumber + ",0,0)";

                    }
                }
            }

        else if (colorType === 'green'){

              
                        if (sprites[a].colorBrickNumber >= backgroundChangeNumber){
                backgroundChangeNumber = backgroundChangeNumber + 30
                              
 

                if (backgroundChangeNumber>=255){
                    textbackgroundColor = "rgb(255,255,255)";

            }
                else if (backgroundChangeNumber<= 0){
                    textbackgroundColor = "rgb(0,0,0)";

            }
                else{
                    textbackgroundColor = "rgb(0,"+ backgroundChangeNumber + ",0)";
  
                    }
                }
            

            else {
                backgroundChangeNumber = backgroundChangeNumber - 30


            textbackgroundColor = "rgb("+ backgroundChangeNumber + ",0,0)";
           
                if (backgroundChangeNumber>=255){
                    textbackgroundColor = "rgb(255,255,255)";

            }
                else if (backgroundChangeNumber<= 0){
                    textbackgroundColor = "rgb(0,0,0)";

            }
                else{
                textbackgroundColor = "rgb(0,"+ backgroundChangeNumber + ",0)";

                    }
                }
            }


        else if (colorType === 'blue'){

                        if (sprites[a].colorBrickNumber >= backgroundChangeNumber){
                backgroundChangeNumber = backgroundChangeNumber + 30
                                for(a in sprites){
                    if (sprites[a].collided === true){
                        sprites[a].changed === true
                    }
                }

                if (backgroundChangeNumber>=255){
                    textbackgroundColor = "rgb(255,255,255)";

            }
                else if (backgroundChangeNumber<= 0){
                    textbackgroundColor = "rgb(0,0,0)";

            }
                else{
                    textbackgroundColor = "rgb(0,0,"+ backgroundChangeNumber + ")";

                    }
                }
            

            else {
                backgroundChangeNumber = backgroundChangeNumber - 30


            textbackgroundColor = "rgb(0,0,"+ backgroundChangeNumber + ")";
           
                if (backgroundChangeNumber>=255){
                    textbackgroundColor = "rgb(255,255,255)";

            }
                else if (backgroundChangeNumber<= 0){
                    textbackgroundColor = "rgb(0,0,0)";

            }
                else{
                textbackgroundColor = "rgb(0,0,"+ backgroundChangeNumber +")";

                    }
                }
            }

}

//}


