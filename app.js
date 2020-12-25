var nav=document.getElementById('nav');
var bars=document.querySelector('.fa-bars');
var times=document.querySelector('.fa-times');
var header=document.getElementById('header');

function responsive(){
    times.style.visibility="hidden";
    bars.style.visibility="visible";
    nav.style.left="-100%";
    times.style.opacity="0";
    bars.style.opacity="1";
}
function responsive1(){
    times.style.visibility="visible";
    bars.style.visibility="hidden";
    nav.style.left="0%";
    times.style.opacity="1";
    bars.style.opacity="0";
}
