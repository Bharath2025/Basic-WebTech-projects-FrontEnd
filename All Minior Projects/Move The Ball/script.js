var ball=document.getElementById('ball');
console.log(ball);

var moveBy=5; // Variable to move the ball by 5px from the current position.

window.addEventListener('load',function()
{

    //To Load the ball at different locations on window.
    //So we are making us of (math.random()*10) will give a number from 1 to 9.
    ball.style.position="absolute";
    ball.style.top=Math.floor(Math.random()*1000).toString()+"px";
    ball.style.left=Math.floor(Math.random()*1000).toString()+"px"; 
})


window.addEventListener('keydown',function(event)
{
    var code=event.key;
    switch(code)
    {
        case 'w':
            //console.log(typeof(ball.style.top));  ------------> This will return a string.
           ball.style.top=parseInt(ball.style.top) - moveBy +'px';  // So we are converting that to a int using parseInt and adding to moveBy to get a string again and concatinating with "px";
           break;
        case 'a':
            ball.style.left=parseInt(ball.style.left)- moveBy +"px";
            break;
        case 'd':
            ball.style.left=parseInt(ball.style.left)+ moveBy +"px";
            break;
        case 's':
            ball.style.top=parseInt(ball.style.top) + moveBy +"px";
            break;

    }
});