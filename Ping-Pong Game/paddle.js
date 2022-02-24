/*const max_speed =0.02;

export default class Paddle{
    constructor(paddleElem)
    {
        this.paddleElem=paddleElem;
        this.reset();
    }

    // get and set are the object Accessors in javscript like getter and setter functions 
    get position(){
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue('--position'));
    }
    set position(value){
        this.paddleElem.style.setProperty('--position',value)
    }


    reset()
    {
        this.position=50;
    }
    update(delta,ballHeight){
        this.position += max_speed * delta *(ballHeight-this.position);
    }
}

*/

const max_paddle_speed = 0.014;

export default class Paddle{
    constructor(paddleElem)
    {
        this.paddleElem=paddleElem;
        this.reset();
    }

    get position(){
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"));
    }
    set position(value){
        this.paddleElem.style.setProperty('--position',value)
    }

    rect()
    {
        return this.paddleElem.getBoundingClientRect();
    }

    reset()
    {
        this.position=50;
    }
    update(delta,ballHeight){
        this.position += max_paddle_speed * delta * (ballHeight-this.position);
    }
}