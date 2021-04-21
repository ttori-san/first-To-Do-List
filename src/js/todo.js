'use strict';
//
const addTaskTriger = document.getElementsByClassName('js-addTask__trigger')[0];
const addTaskTarget = document.getElementsByClassName('js-addTask__target')[0];
const addTaskValue = document.getElementsByClassName('js-addTask__value')[0];

const removeTask = removeButton => {
    const targetTask = removeButton.closest('li');
    addTaskTarget.removeChild(targetTask);
};

const addTask = task => {
    const listItem = document.createElement('li');
    const removeButton = document.createElement('button');

    removeButton.innerText = '削除';
    removeButton.addEventListener ('click', () => {
        removeTask(removeButton);//引数にremoveButtonを入れる意味は？？
    });

    listItem.innerText = task;

    listItem.append(removeButton);
    addTaskTarget.appendChild(listItem);//ulの子要素に追加
};

addTaskTriger.addEventListener('click', event => {
    const task = addTaskValue.value;
    addTask(task);
    addTaskValue.value = '';
});