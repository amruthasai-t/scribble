//Declaring the variables
let drawing=false;
let context;
window.onload=function(){
const canvas=document.getElementById('canvas');
const color=document.getElementById('colorchose');
const linewi=document.getElementById('linewidth');
const clear=document.getElementById('clear');
let context=canvas.getContext('2d');
context.canvas.width=window.innerWidth;
context.canvas.height=window.innerWidth-900;

//Clearing the canvas
clear.addEventListener('click',function(){
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
});

//Color change
color.addEventListener('change',function(){
    context.strokeStyle=color.value;
});

//Width of the brush
linewi.addEventListener('change',function(){
    context.lineWidth=linewi.value;
});
//Line style
context.strokeStyle="#000";
context.lineJoin="round";
context.lineWidth=5;


document.onmousemove=handleMouseMove;
document.onmousedown=handleDown;
document.onmouseup=handleUp;

function handleMouseMove(e){
    console.log(e.clientX);
    console.log(e.clientY);
    if(drawing){
        context.lineTo(e.clientX,e.clientY);
        context.closePath();
        context.stroke();
        context.moveTo(e.clientX,e.clientY);
    }
    else{
        context.moveTo(e.clientX,e.clientY);
    }
}
function handleDown(e){
    drawing=!drawing;
    console.log(drawing);
    context.moveTo(e.clientX,e.clientY);
    context.beginPath();

}
function handleUp(){
    drawing=!drawing;
}

}










