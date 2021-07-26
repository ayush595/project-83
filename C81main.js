var mouseevent= "empty";
var lastpositionx ;
var lastpositiony ;
canvas= document.getElementById("cannu");
ctx= canvas.getContext("2d");
var width_of_screen= screen.width;
var canvaswidth= width_of_screen - 70;
var canvasheight= screen.height - 300;
color= "brown";
//  to add a event
if (width_of_screen < 992) {
document.getElementById("cannu").width= canvaswidth;
document.getElementById("cannu").height= canvasheight;
}
canvas.addEventListener("touchstart",hhj);
function hhj(e) {
    color= document.getElementById("textcolor").value;
    lastpositionx= e.touches[0].clientX - canvas.offsetLeft;
    lastpositiony= e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",wu);
function wu(e) {
    currentpositionx= e.touches[0].clientX-canvas.offsetLeft;
    currentpositiony= e.touches[0].clientY-canvas.offsetTop;
    console.log("x="+currentpositionx+"y="+currentpositiony);
    
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= 4;
        ctx.moveTo(lastpositionx,lastpositiony);
        ctx.lineTo(currentpositionx,currentpositiony)
        ctx.stroke();    
    
    lastpositionx= currentpositionx;
    lastpositiony= currentpositiony;
     
}
canvas.addEventListener("mouseup",s);
function s(e) {
    mouseevent= "mouseup";
    
}
canvas.addEventListener("mouseleave",f)
function f(e) {
    mouseevent= "mouseleave";
    
}
function cleararea() {
ctx.clearRect(0,0,canvas.width,canvas.height)    
}