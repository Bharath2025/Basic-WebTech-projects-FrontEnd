var interval;


var btn = document.getElementById('btn');
var reset = document.getElementById('reset');
var first=document.querySelectorAll('.first');
var second=document.querySelectorAll('.second');


reset.addEventListener('click',function(event){
    event.preventDefault();
    /* 1st Method. */
    /* We can do the reset by simply reloading the page ie location.reload(); */
    // location.reload();

    /* 2nd Method */
    reset_values(first,second,5);
    clearInterval(interval);
    
})


btn.addEventListener('click',function(event){
    event.preventDefault();
    var input= parseInt(document.getElementById('number').value);
    console.log(input);
    if(isNaN(input))
    {
        alert('Enter the Number and the Start the counter');
        return;
    }

    if(input<=0 || input>99999)
    {
        alert('range has been crossed');
        return;
    }
    input.value="";

    var count=0;

    // If the user clicks on startCounter Button again then this will clear and reset all thr values to the zero.
    // And then starts the counter.

    reset_values(first,second,5);

    // Clearing the inteval that was running previously.

    clearInterval(interval);


    interval = setInterval(function(){
        if(count===input){
            clearInterval(interval);
            alert('Counter is Stopped !!!!');
            return;
        }

        startCounter(first,second,4);
        count++;

    },100);
    
})

function reset_values(first,second,end)
{

    //Since this is a 5-digit counter the end value that is passed is 5.
    for(let i=0;i<end;i++)
    {
        first[i].innerText=0;
        second[i].innerText=1;
    }
}



function startCounter(first,second,index){
    let current = first[index];
    let next = second[index];

    if(current.innerText==9)
    {
        startCounter(first,second,index-1);
    }

    next.classList.add('animate');

    setTimeout(function()
    {
        current.innerText=next.innerText;
        next.classList.remove('animate');
        next.innerText=parseInt(current.innerText)+1;
        if(next.innerText>9)
        {
            next.innerText=0;
        }
    },50)
}