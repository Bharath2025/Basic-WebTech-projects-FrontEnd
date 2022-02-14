var ball=document.getElementById('ball');
console.log(ball);

var moveBy=5; // Variable to move the ball by 5px from the current position.

window.addEventListener('load',function()
{

    //To Load the ball at different locations on window.
    //So we are making us of (math.random()*10) will give a number from 1 to 9.
    ball.style.position="absolute";
    ball.style.top=Math.floor(Math.random()*500).toString()+"px";
    ball.style.left=Math.floor(Math.random()*500).toString()+"px"; 
})

/* InnerHeight And InnerWidth property is used to know the height and width of the Window.
console.log((window.innerHeight));
console.log(window.innerWidth);*/


window.addEventListener('keydown',function(event)
{
    var code=event.key;
    switch(code)
    {
        case 'w':
            if(parseInt(ball.style.top) <= 0)                     // Adding the Bounding condition for the top of the screen.
            {
                console.log(parseInt(ball.style.top));
                return;
            }
            //console.log(typeof(ball.style.top));  ------------> This will return a string.
            ball.style.top=parseInt(ball.style.top) - moveBy +'px';  // So we are converting that to a int using parseInt and adding to moveBy to get a string again and concatinating with "px";
            break;
        case 'a':
            if(parseInt(ball.style.left) <= 0)                     // Adding the Bounding condition for the left side of screen.
            {
                console.log(parseInt(ball.style.left));
                return;
            }
            ball.style.left=parseInt(ball.style.left)- moveBy +"px";
            break;
        case 'd':
            if(parseInt(ball.style.left) >= (window.innerWidth-110) )  // Adding the Bounding condition for the right of the screen using window.innerWidth property .
            {
                console.log(parseInt(ball.style.left));
                return;
            }
            ball.style.left=parseInt(ball.style.left)+ moveBy +"px";
            break;
        case 's':
            if(parseInt(ball.style.top) >= (window.innerHeight-110) )
            {
                console.log(parseInt(ball.style.top));
                return;
            }
            ball.style.top=parseInt(ball.style.top) + moveBy +"px";
            break;

    }
});