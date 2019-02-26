
const rootNode = document.getElementById('root');
let todoItems = [];
let zero = 0;

function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => {
         element[key] = props[key]
         } );

    if (children.length > zero) {
        children.forEach(child => {
            if (typeof child === 'string') {
                child = document.createTextNode(child);
            }
            element.appendChild(child);
        });
    }
    return element;
}


function renderLayout(){
    
    const mainTitle = createElement('h1', {className: 'main-title'}, 'Simple TODO application');
    const addButton = createElement('button', {className: 'add'}, 'Add new task');
    const todoList = createElement('ul', { className: 'todo-list'});
    const emptyList = createElement('h2', {className: 'todo-empty'}, 'TODO is empty');
    const mainPage = createElement('div', { className: 'main-page'},mainTitle, addButton, todoList, emptyList);

        addButton.onclick = () => {
            window.location.hash = '/add_item';
            clear();
            rootNode.appendChild(renderAdd(todoItems));
        }
       /* if (todoItems.length) {
            for (let listItem of todoItems) {
               listItem = createElement('li', {id: listItem.id});
              const checkbox = createElement('button', {className: listItem.isDone ? 'done' : 'undone'
              });

              const todoText = createElement('button', {className: 'todo-text',title: 'Click to edit'}, listItem.description);
              const deleteButton = createElement('button', {className: 'delete'});
      
              checkbox.onclick = () => {
                if (checkbox.className === 'undone') {
                  checkbox.className = 'done';
                  lS.setAsDoneById(item.id);
                  todoList.appendChild(li);
                }
             };
        }
      todoText.onclick = () => {
        window.location.hash = `/modify/${item.id}`;
      };
    
      deleteButton.onclick = () => {
        listItem.delete();
        lS.removeById(listItem.id);
      } 
    }*/
    
    return mainPage;
}

function clear() {
    rootNode.innerHTML = '';
}

function renderAdd() {
    
    const mainTitle = createElement('h1', {className: 'title'}, 'Add task');
    const input = createElement('input', {type: 'text', placeholder: 'Task description'});
    const cancelButton = createElement('button', {className: 'cancel'}, 'Cancel');
    const saveButton = createElement('button', {className: 'save', disabled: 'true'}, 'Save changes');
    const mainPage = createElement('div', { className: 'add-page'}, mainTitle, input, cancelButton, saveButton );
    
    input.onchange = input.onkeyup = () => {
      const description = input.value.trim();
      saveButton.disabled = !description;

      if (event.code === 'Enter' && description) {
        saveButton.click();
      }
    };

    cancelButton.onclick = () => {
      main();
    };

    saveButton.onclick = () => {
      lS(renderAdd(input.value.trim()));
      main();
    };


return mainPage;

}
/*

function renderList() {

}

function renderListItem() {

}
*/
function renderEdit(){
    const mainPage = this.renderAdd();
    
    mainPage.id = 'edit-page';
    mainPage.querySelector('h1').textContent = 'Modify item';
    //mainPage.querySelector('input').value = listItem.description;
    mainPage.querySelector('.save').onclick = () => {
   // lS(changeDescription(listItem.id, mainPage.querySelector('input').value.trim()));
      window.location.hash = '/main';
     
    };

    return mainPage;
}

/*
function addListItem(){

}
*/
function lS(description){
    
    let id = '';
    let listItem = {description, id, isDone: false};
    todoItems.push(listItem);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
    return todoItems;

}

function lSGetAllItems() {
    return JSON.parse(localStorage.getItem(todoItems))
}

function lSGetItem(id) {
    return this.lSGetAllItems().find(item => item.id === id);
}

function lSdoneItem() {
    return this.lSGetAllItems().filter(item => item.isDone === true);
}
/*
function lSUndoneItem(){

}


function destroyListItem(){

}
*/
function main() {
    window.history.pushState('', '/', window.location.pathname);
    window.location.hash = '/main';

    document.title = 'Main page';
    clear();
    rootNode.appendChild(renderLayout(todoItems));
}

main();

