// Define Ui Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listners
loadEventListeners();

// load all event listners
function loadEventListeners() {
    // Add task Event
    form.addEventListener('submit', addTask);
    //remove task Event
    taskList.addEventListener('click', removeTask);
    //clear Task Events
    clearBtn.addEventListener('click', clearTasks );

    // filter tasks
    filter.addEventListener('keyup', filterTasks);

}

//add task

function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a Task!');
    }

    // create li element
    const li = document.createElement('li');

    //add class
    li.className = 'collection-item';

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

 //remove Task
 function removeTask(e) {
     if(e.target.parentElement.classList.contains('delete-item')){
         if(confirm('Are You Sure?')){
    e.target.parentElement.parentElement.remove();}
     }
}

function clearTasks(e) {
    // taskList.innerHTML = '';

    //faster
    if(confirm('Are You Sure')){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }}

    //https://jsperf.com/innerHTML-vs-removechild
}


function filterTasks(e){
    const text = e.target.value.toLowerCase();
        document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent;

            if(item.toLowerCase().indexOf(text) != -1 ){
                task.style.display = 'block';             }
                else{
                    task.style.display = 'none';
                }
        });
}
