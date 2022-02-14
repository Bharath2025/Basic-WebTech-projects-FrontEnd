var obj = document.getElementById('object');

var max_width=( window.innerWidth - 130);
console.log(max_width);
var max_height=( window.innerHeight -130);
console.log(max_height);

obj.addEventListener('mouseover',(e)=>{
    console.log('mouseover');
    obj.style.top = Math.floor(Math.random()*max_height) +"px";
    obj.style.left = Math.floor(Math.random()*max_width) +"px";
})