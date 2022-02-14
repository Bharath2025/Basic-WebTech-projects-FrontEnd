var first=document.getElementsByClassName('first');
var second=document.getElementsByClassName('second');

var button=document.getElementById('btn');

var count;

button.addEventListener('click',function(event)
{
    event.preventDefault();
    var input=document.getElementsByTagName('input')[0];
    count=input.value;
    console.log(count);
    if(count<=0 || count>9)
    {
        input.value="";
        window.alert('Enter correct Number!!');
        return;
    }
    input.value="";
    startCounter();
})

function startCounter(){
    console.log('called Successfully.')
    var interval=setInterval(function animate()
    {
        console.log(count);
        if(count<0)
        {
            window.alert('Counter Stopped :)');
            clearInterval(interval);
            return;
        }
        second[0].innerHTML=count--;
        second[0].classList.add('animate');
        setTimeout(function()
        {
            second[0].classList.remove('animate');
        },800);
    },1000);
}

