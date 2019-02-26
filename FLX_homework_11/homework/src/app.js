let count_item = 0 ;
let max_items = 9;
let one = 1;
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

function createTodoItem(title) {
    const checkbox = createElement('i', { className: 'material-icons checkbox' },'check_box_outline_blank');
    const label = createElement('label', { className: 'title' }, title);
    const deleteButton = createElement('i', { className: 'material-icons delete' }, 'delete');
    const listItem = createElement('li', { className: 'todo-item', draggable: 'true' }, checkbox, label, deleteButton);

    bindEvents(listItem);

    return listItem;
}

function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.checkbox');
    const deleteButton = todoItem.querySelector('.delete');

    checkbox.addEventListener('click', toggleTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
    addDnDHandlers(checkbox.parentElement);
}

function addTodoItem(event) {
    event.preventDefault();

   
     
    
    
    
    
  
    if (count_item > max_items){   
     let notification = app.insertBefore(document.createElement('p'), todoForm);
      notification.textContent = 'Maximum item per list are created';
      notification.style.color = 'red';
      notification.style.textAlign = 'center';
      addButton.disabled = true;
    }
    const todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    count_item += one;
    addInput.value = '';
}

function toggleTodoItem() {
    const listItem = this.firstChild;
    listItem.textContent = 'done';  
}

function deleteTodoItem() {
    const listItem = this.parentNode;
    todoList.removeChild(listItem);
    count_item -= one; 
}

const app = document.getElementById('app');
const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');
const addButton = document.getElementById('add-button')

function main() {

    todoForm.addEventListener('submit', addTodoItem);
    todoItems.forEach(item => bindEvents(item));
    
}

let dragEl = null;

function handleDragStart(e) {
  dragEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);

}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  this.classList.add('over');
  e.dataTransfer.dropEffect = 'move'; 

  return false;
}

function handleDragEnter(e) {
  e.preventDefault();
}

function handleDragLeave(e) {
  this.classList.remove('over'); 
}

function handleDrop(e) {

  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragEl !== this) {
    this.parentNode.removeChild(dragEl);
    let dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin', dropHTML);
    let dropElem = this.previousSibling;
    addDnDHandlers(dropElem);
  }
  this.classList.remove('over');
  return false;
}

function handleDragEnd(e) {
  this.classList.remove('over');
}

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragenter', handleDragEnter, false);
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);
}

[].forEach.call(todoItems, addDnDHandlers);

main();
