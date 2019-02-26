
const rootNode = document.getElementById('root');
let zero = 0;
let k = 1;

// main layout
function renderMainLayout() {
  clear() // clear document

  const mainTitle = createElement('h1', {className: 'main-title'}, 'Simple TODO application');
  const todoList = createElement('ul', { className: 'todo-list'});
  const emptyList = createElement('h2', {className: 'todo-empty'}, 'TODO is empty');
  const mainPage = createElement('div', { className: 'main-page'}, mainTitle, todoList, emptyList);
  render(mainPage);
  renderAddButton();
  renderList();
}

function renderAddButton() {
  const addButton = createElement('button', {className: 'add'}, 'Add new task');

  addButton.onclick = () => { 
    navigateToCreatePage() 
  };

  render(addButton);
}

function renderList() {
  let items = getItems();

  items.forEach((item, id) => {
    render(prepareListItem(item, id));
  });
}

function renderCreatePage() {
  clear();
  const mainTitle = createElement('h1', {className: 'title'}, 'Add task');
  const input = createElement('input', {type: 'text', placeholder: 'Task description'});
  const cancelButton = createElement('button', {className: 'cancel'}, 'Cancel');
  const saveButton = createElement('button', {className: 'save', disabled: 'true'}, 'Save changes');
  const mainPage = createElement('div', { className: 'add-page'}, mainTitle, input, cancelButton, saveButton );
  
  input.onchange = input.onkeyup = () => { // TODO move in separate handler
    const description = input.value.trim();

    saveButton.disabled = !description;

    if (event.code === 'Enter' && description) {
      saveButton.click();
    }
  };

  cancelButton.onclick = () => { // TODO move in separate handler
    renderMainLayout();
  };

  saveButton.onclick = () => { // TODO move in separate handler
    addItem(input.value.trim());
    renderMainLayout();
  };

  render(mainPage);
}

function renderUpdatePage(id) {
  clear();
  let item = getItem(id);

  const mainTitle = createElement('h1', {className: 'title'}, 'Edit task');
  const input = createElement('input', {type: 'text', value: item.description});
  const cancelButton = createElement('button', {className: 'cancel'}, 'Cancel');
  const saveButton = createElement('button', {className: 'save', disabled: 'true'}, 'Save changes');
  const mainPage = createElement('div', { className: 'add-page'}, mainTitle, input, cancelButton, saveButton );

  input.onchange = input.onkeyup = () => { // TODO move in separate handler
    const description = input.value.trim();

    saveButton.disabled = !description;

    if (event.code === 'Enter' && description) {
      saveButton.click();
    }
  };

  cancelButton.onclick = () => { // TODO move in separate handler
    renderMainLayout();
  };

  saveButton.onclick = () => { // TODO move in separate handler
    updateItem(id, input.value.trim());
    renderMainLayout();
  };

  render(mainPage);
}
// handlers
function navigateToCreatePage() {
  window.location.hash = '/add_item';
  renderCreatePage();
}

function navigateToUpdatePage(id) {
  window.location.hash = `/items/${id}`;
  renderUpdatePage(id);
}

function addItem(description) {
 let items = getItems();
  items.push({
    description: description,
    done: false
  });

  writeItems(items)
}

function updateItem(id, description) {
  let items = getItems();
  items[id].description = description;

  writeItems(items)
}

function toggleItem(id) {
  let items = getItems();
  let item = items.splice(id, 1)[zero];
  item.done = !item.done;
  items.push(item);
  writeItems(items);
  renderMainLayout();
}

function destroyItem(id) {
  let items = getItems();
  items.splice(id, 1);
  writeItems(items);
  renderMainLayout();
}

// helpers
function clear() {
  rootNode.innerHTML = '';
}

function getItems() {
  return JSON.parse(localStorage.getItem('items')) || [];
}

function getItem(id) {
  return getItems()[id]
}

function writeItems(items) {
  localStorage.setItem('items', JSON.stringify(items));
}

function render(element) {
  rootNode.appendChild(element);
}

function prepareListItem(item, id) {
  const checkbox = createElement('button', {className: item.done ? 'done' : 'undone'});
  const label = createElement('label', {className: 'todo-text'}, item.description);
  const deleteButton = createElement('button', {className: 'delete'});

  checkbox.onclick = () => { 
    toggleItem(id) 
  };
  label.onclick = () => { 
    navigateToUpdatePage(id) 
  };
  deleteButton.onclick = () => {
    destroyItem(id)
  };

  return createElement('li',{}, checkbox, label, deleteButton);
}

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
// entry point
function main() {
  window.history.pushState('', '/', window.location.pathname);
  window.location.hash = '/main';

  document.title = 'Main page';
  renderMainLayout();
}

main(); 

