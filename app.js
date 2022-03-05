//add a new todo-list item

const addTodo = document.querySelector('.add');

const list = document.querySelector('.todos');

const search = document.querySelector('.search input');

todoTemplate = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    `
    list.innerHTML += html;

};

addTodo.addEventListener('submit', e => {
    e.preventDefault(); // prevents from refreshing of the page
    const todo = addTodo.add.value.trim(); // trim used to cut whitespaces or blankspaces 

    if(todo.length){ // if there is no letters in addTodo it wont add
        todoTemplate(todo);
        addTodo.reset();
    }

});


// delete todos

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


// search todos using keyup event and some array methods

const filterTodo = (sTerm) =>{
    Array.from(list.children)
     .filter((todo)=>!todo.textContent.toLowerCase().includes(sTerm))
     .forEach((todo)=>todo.classList.add('filtered'));

    Array.from(list.children)
     .filter((todo)=>todo.textContent.toLowerCase().includes(sTerm))
     .forEach((todo)=>todo.classList.remove('filtered'));

};

search.addEventListener('keyup', () => {
    const sTerm = search.value.trim().toLowerCase();
    filterTodo(sTerm);

});

