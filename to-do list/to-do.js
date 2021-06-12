const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');


// event-listener
todobutton.addEventListener('click',addtodo) 



// functions
function addtodo(event){
    event.preventDefault()
    //todo div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");
    //LI
    const newtodo = document.createElement("li");
    newtodo.innerText = "hey Bumnie";
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
}