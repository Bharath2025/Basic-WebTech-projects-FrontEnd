var toggle_btn=document.getElementById('toggle');
var toggle_circle=document.getElementById('toggle-indicator');
var body=document.getElementsByTagName('*');

var count=0;

toggle_btn.addEventListener('click',function(){

    //Toggle property has to be implemented here.
    count++;
    if(count%2 == 0){
        body[0].style.backgroundColor="white";
        body[0].style.color="black";
        toggle_circle.style.left="-5%";
        toggle_btn.style.border = "2px solid black";
    }
    else{
        body[0].style.backgroundColor="black";
        body[0].style.color="white";
        toggle_circle.style.left="75%";
        toggle_btn.style.border = "2px solid white";
    }
});