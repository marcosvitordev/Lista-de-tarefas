document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addTask(taskInput.value);
      taskInput.value = '';
    });
  
    taskList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-task')) {
        e.target.parentElement.remove();
      } else if (e.target.classList.contains('complete-task')) {
        e.target.parentElement.classList.toggle('completed');
      }
    });
  
    function addTask(task) {
      if (task.trim() === '') return;
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
        ${task}
        <div>
          <button class="btn btn-success btn-sm complete-task">✔</button>
          <button class="btn btn-danger btn-sm delete-task">✖</button>
        </div>
      `;
      taskList.appendChild(li);
    }
  });
  