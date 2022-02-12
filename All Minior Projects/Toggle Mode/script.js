var toggle_btn=document.getElementById('toggle');
var toggle_circle=document.getElementById('toggle-indicator');
var body=document.getElementsByTagName('*');

toggle_btn.addEventListener('click',function(){

    //Toggle property has to be implemented here.
    body[0].style.backgroundColor="black";
    body[0].style.color="white";
    toggle_circle.style.left="75%";
    toggle_btn.style.border = "2px solid white";
});