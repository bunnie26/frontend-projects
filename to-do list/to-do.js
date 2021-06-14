const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');


// event-listener
todobutton.addEventListener('click',addtodo) 
todolist.addEventListener('click',deletecheck)


// functions
function addtodo(event){
    event.preventDefault()
    //todo div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");
    //LI
    const newtodo = document.createElement("li");
    newtodo.innerText = todoinput.value;
    newtodo.classList.add("todo-item");
    tododiv.appendChild(newtodo);

    //complete mark button
    const checkbutton = document.createElement("button");
    checkbutton.innerHTML = '<i class = "fas fa-check"></i>';
    checkbutton.classList.add("check-button");
    tododiv.appendChild(checkbutton);

    //DELETE mark button;
    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = '<i class = "fas fa-trash"></i>';
    deletebutton.classList.add("delete-button");
    tododiv.appendChild(deletebutton);

    //append to list
    todolist.appendChild(tododiv);

    //clear input
    todoinput.value = ""
}

function deletecheck(e){
    const item = e.target
    if(item.classList[0] === "delete-button"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove()
        })


        // console.log(item.parentElement)
    }
    if(item.classList[0] === "check-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}