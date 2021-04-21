const addTaskTarget = document.getElementsByClassName('js-addTask__target')[0];
const addTaskValue = document.getElementsByClassName('js-addTask__value')[0];
const addTaskTrigger = document.getElementsByClassName('js-addTask__trigger')[0];

const removeTask = (removeButton) => {
    const targetTask = removeButton.closest('li');//削除したいToDOのボタンからclosestの'li'
    addTaskTarget.removeChild(targetTask);
}

const addTask = (task) => {
    const listItem = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.innerText = '削除';
    removeButton.addEventListener('click', () => {
        removeTask(removeButton);
    });

    listItem.innerText = task;
    listItem.append(removeButton);
    addTaskTarget.appendChild(listItem);
};

addTaskTrigger.addEventListener('click',triggeredAddTask());
// addTaskTrigger.addEventListener('keypress',triggeredAddTask());

function triggeredAddTask(){
    const task = addTaskValue.value;
    addTask(task);
    addTaskValue.value = '';
}