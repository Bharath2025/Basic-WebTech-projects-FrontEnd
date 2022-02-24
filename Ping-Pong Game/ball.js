/*
const initial_velocity = 0.05;
const increase_velocity = 0.0001;

export default class Ball{
    constructor(ballElem)
    {
        this.ballElem=ballElem;
        this.helper();
    }

    // get and set are the object Accessors in javscript like getter and setter functions 
    get x(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--x'));
    }

    set x(value){
        this.ballElem.style.setProperty('--x',value);
    }
    get y(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--y'));
    }

    set y(value){
        this.ballElem.style.setProperty('--y',value);
    }

    rect(){
        return this.ballElem.getBoundingClientRect();
    }

    // Iam creating a helper function which initializes the direction and the velocity of the ball at the starting of the program.
    // So i have to call this at the time of constructor is called.//

    helper(){
        this.x=50;
        this.y=50;
        // Now we have to set the direction of the ball.
        // The direction of the ball will be random ie it can move randomly in 360 deg.
        this.direction ={x:0,y:.5}

        while( Math.abs(this.direction.x)<=0.2 || Math.abs(this.direction.x)>=0.9 )  {
            const progress = randomNumberBetween(2*Math.PI);
            this.direction = { x:Math.cos(progress) , y:Math.sin(progress)}
        }

        this.velocity=initial_velocity;

    }


    update(delta)
    {
        this.x += this.direction.x * this.velocity *delta;
        this.y += this.direction.y * this.velocity *delta;

        this.velocity += increase_velocity;
        const rect=this.rect();
        if(rect.bottom >= window.innerHeight || rect.top <= 0 ){
            this.direction.y *=-1;
        }
        
        
    }
}

// randomNumberBetween Function implementation

function randomNumberBetween(max)
{
    return Math.random() *max;
}

*/

var initial_velocity = 0.05;
const increase_velocity = 0.0001;
const BallHit = new Audio('ballCollision.wav');

export default class Ball{
    constructor(ballElem){
        this.ballElem=ballElem;
        this.helper();
    }

    get x()
    {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
    }

    set x(value){
        this.ballElem.style.setProperty("--x",value);
    }

    get y()
    {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
    }

    set y(value){
        this.ballElem.style.setProperty("--y",value);
    }

    rect(){
        return this.ballElem.getBoundingClientRect();
    }

    reset(){
        this.x=50;
        this.y=50;
    }

    helper()
    {
        this.reset();
        this.direction ={ x:0,y:0}
        while( Math.abs(this.direction.x)<=0.2 || Math.abs(this.direction.x)>=0.9 )  {
            const progress = randomNumberBetween(2*Math.PI);
            this.direction = { x:Math.cos(progress) , y:Math.sin(progress)}
        }
        this.velocity = initial_velocity;
    }

    update(delta,paddleRects)
    {
        this.x += this.velocity * this.direction.x *delta;
        this.y += this.velocity * this.direction.y *delta;

        this.velocity += increase_velocity;
        const rect = this.rect();
        if(rect.top<=0 || rect.top>=innerHeight){
            this.direction.y *=-1;
        }

        if(paddleRects.some(r => isCollision(r,rect))){
            this.direction.x *=-1;
            BallHit.play();
        }
    
    }
}

// randomNumberBetween Function implementation

function randomNumberBetween(max)
{
    return Math.random() *max;
}

// checking for the collision case

function isCollision(rect1,rect2){
    
    if(rect1.right >= rect2.left && rect1.left <= rect2.right &&
        rect1.top <= rect2.bottom && rect1.bottom >= rect2.top)
        {
            return true;
        }
    else { 
        return false;
    }
}
