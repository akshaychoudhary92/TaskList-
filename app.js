// Define Ui Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listners
loadEventListners();

// load all event listners
function loadEventListners() {
    // Add task Event
    form.addEventListener('submit', addTask);

}

//add task

function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a Task!');
    }

    // create li element
    const li = document.createElement('li');

    //add class
    li.classname = 'collection-item';

    // create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');

    // add class to link
    link.className = 'delete-item secondary-content';

    // add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    //append the link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    // clear input
    taskInput.value = '';



    e.preventDefault();
}
