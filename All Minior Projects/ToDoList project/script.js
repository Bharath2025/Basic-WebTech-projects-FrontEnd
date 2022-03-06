
let tasks=[]
const taskList = document.getElementById('list');
const taskInput = document.getElementById('task-input');
const taskCounter = document.getElementById('counter');
const RemainingTask = document.getElementById('remaining_task_counter');


// All the logical function are here

// fetchTodo function to work with API's

async function fetchTodo(){
    // using fetch api to access all the fake todo's.This is a function which accepts the URL.
    // In order to understand this refer to concept of promises because the fetch function returns the promise
    // and the then() calls when the promise is fullfilled.
    // catch() is called when the promise is rejectd.
    // fetch('https://jsonplaceholder.typicode.com/todos') 
    //     .then(function(response){
    //         return response.json()         // .json will gives us another promise and the data from the API.
    //             .then(function(data){
    //                 //console.log(data);
    //                 tasks = data.slice(0,10);
    //                 renderTodo();
    //             })
    //             .catch(function(err){
    //                 console.log('error ',err);
    //             })
    //     })

    // converting above promises concept into Asyn await syntax/format for easy implementaion.
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks = data.slice(0,10);
        renderTodo();
    }
    catch(err){
        console.log(err);
    }
    
}

function calc(){
    //This function is for the calculation of no of tasks that yet to be completed.
    let remaining_task=0;
    tasks.forEach(task=>{
        if(task.completed === false){
            remaining_task++;
        }
    })
    RemainingTask.textContent = remaining_task;
}

function addTask(task){
    if(task){
        tasks.push(task);
        renderTodo();
        calc();
        showNotification('task is added successfully');
        return;
    }
    showNotification('Task cannot be added');

}

function deleteTask(taskId){

    const updatedTasksArr = tasks.filter(task =>{                // filter function is used to update/delte an array. This filter function is filtering all the tasks which are not having taskId equal to current deleting task.
        return task.id !== Number(taskId);
    })
    tasks = updatedTasksArr;
    renderTodo();
    calc();
    showNotification('Task deleted successfully');
}

function checkTaskAsComplted(taskId){
    const completedTask = tasks.filter(task=>{
       return task.id === Number(taskId);
    })
    if(completedTask.length > 0){
        const currentTask = completedTask[0];

        currentTask.completed = !currentTask.completed;
        renderTodo();
        calc();
        showNotification('Toggled the task successfully');
        return;
    }
    showNotification("Could'nt toggle the task");
}

function showNotification(msg){
    window.alert(msg);
}

// addTaskToDome will create an li tag and append it to the tasks-section in html.
function addTaskToDome(task){
    const li = document.createElement('li');
    li.innerHTML =`
            <input type="checkbox" id="${task.id}" class="task-checkbox" ${task.completed ?'checked':''}>
            <label>${task.title}</label>
            <img src="bin.jpg" class="delete" data-id=${task.id} />
    `;
    taskList.append(li);
}

function renderTodo(){
    // Adding the list items to the tasks-section in html
    //Removing the alredy existing tasks
    taskList.innerHTML = '';
    tasks.forEach(task => {
         addTaskToDome(task);
    });

    //calculation for total no of tasks.
    taskCounter.textContent = tasks.length;

}

// Initializing the app

function initializeApp(){
    
taskInput.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter')
    {
       const msg = e.target.value;
       if(!msg){
           showNotification('Text cant be Empty');
           return;
       }
       
       const task ={
           title : msg,
           id : Date.now(),
           completed : false
       }

       e.target.value ='';
       addTask(task);
    }
})

document.addEventListener('click',(e)=>{
    const target = e.target;
    if(target.className === 'delete'){
        const taskId = target.dataset.id;    // All the data Attribute/members of the target element will be stored in dataset, so we have to use target.dataset.id instead of target.id
        deleteTask(taskId);
        return;
    }
    else if(target.className === 'task-checkbox'){
        const taskId = target.id;    // All the properties of the target element will be stored in dataset.
        console.log(taskId);
        checkTaskAsComplted(taskId);
        return;
    }
})
fetchTodo();

}

initializeApp();



