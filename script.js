function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;

    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div class="task-actions">
            <button class="complete btn1" onclick="completeTask(this)"><ion-icon name="checkmark-outline"></ion-icon></button>
            <button class="edit btn1" onclick="toggleEditTask(this)"><ion-icon name="create-outline"></ion-icon></button>
            <button class="delete btn1" onclick="deleteTask(this)"><ion-icon name="trash-outline"></ion-icon></button>
        </div>
        <div class="edit-task">
            <input type="text" value="${taskText}">
            <button onclick="saveTask(this)">Salvar</button>
            <button onclick="cancelEditTask(this)">Cancelar</button>
        </div>
    `;

    taskList.appendChild(taskItem);

    taskInput.value = '';
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
    
    // Remover todos os botões
    const actionButtons = button.parentElement.querySelectorAll('.btn1');
    actionButtons.forEach(btn => {
        btn.style.display = 'none';
    });
}

function toggleEditTask(button) {
    const taskItem = button.parentElement.parentElement;
    const editTaskDiv = taskItem.querySelector('.edit-task');
    editTaskDiv.style.display = editTaskDiv.style.display === 'none' || editTaskDiv.style.display === '' ? 'flex' : 'none';
}

function saveTask(button) {
    const editTaskDiv = button.parentElement;
    const newTaskText = editTaskDiv.querySelector('input').value;
    const taskItem = editTaskDiv.parentElement;

    if (newTaskText !== '') {
        taskItem.querySelector('span').innerText = newTaskText;
    }

    editTaskDiv.style.display = 'none';
}

function cancelEditTask(button) {
    const editTaskDiv = button.parentElement;
    editTaskDiv.style.display = 'none';
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
