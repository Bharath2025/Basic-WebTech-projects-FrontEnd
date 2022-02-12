var outer=document.getElementById('outer');
var inner=document.getElementById('inner');
var btn=document.getElementsByClassName('btns');

btn[0].addEventListener('click',function(){
    //This Event is for the Color Change.
    outer.style.backgroundColor="green";
});


btn[1].addEventListener('click',function(){
    //This Event is for the Color Shape.
    inner.style.borderBottom="100px solid red";
    inner.style.borderRight="100px solid transparent";
	inner.style.backgroundColor="transparent";
    inner.style.width="0px";
    inner.style.height="0px";
});

