//elements
const inputTodoDOM = document.getElementById("todoInput");
const addBtnDOM = document.getElementById('todoAddBtn');
const todosDOM = document.getElementById('todos');
const removeAllBtnDOM = document.getElementById('removeAllBtn');

//event listeners
inputTodoDOM.addEventListener('change',getInputValue);
addBtnDOM.addEventListener('click',addInputValue);
removeAllBtnDOM.addEventListener('click',removeAllTodoList);

//variables
let inputValue = '';
let todoList = [];
let lastId = 0;

//functions
function getInputValue(e) {
    inputValue = e.target.value;
}

function addInputValue(e) {
e.preventDefault();
    if(inputTodoDOM.value !== ''){
        lastId++;
        todoList.unshift({id:lastId,value:inputTodoDOM.value})
    }

    inputTodoDOM.value = '';
    checkTodoList();
}

function checkTodoList(){
    if(todoList.length<=0){
        todosDOM.innerHTML= `<li class=" border border-2 p-1 m-2 list-group-item" id='-1'><span>Empty List</span></li>`;
    }else{
        showList();
    }
}

function removeAllTodoList(e){
    e.preventDefault();
    todoList.length = 0;
    todosDOM.innerHTML='';
    checkTodoList();
}
function removeTodo(id){
    const todo = document.getElementById(id);
    todo.remove;
    todoList.forEach((todo)=>{
        if(todo.id === id){
            const index = todoList.indexOf(todo);
            todoList.splice(index,1);
        }
    })
    checkTodoList();
}

function showList(){
    todosDOM.innerHTML='';
    for(let item of todoList){
        todosDOM.innerHTML += `<li class="position-relative border border-2 p-1 m-2 list-group-item" id='${item.id}'><span>${item.value}</span><div class="position-absolute top-50 end-0 translate-middle" type=button onclick='removeTodo(${item.id})'><i class="bi bi-x text-danger"></i></div></li>`;
    }
}

checkTodoList();