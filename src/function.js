const taskList = document.getElementById('taskList');
const displayOneBook = (array, index) => {
  const taskContainer = document.createElement('div');
  taskContainer.className = 'task d-flex';
  taskList.appendChild(taskContainer);

  const checkBoxContainer = document.createElement('div');
  checkBoxContainer.className = 'checkbox-container';
  taskContainer.appendChild(checkBoxContainer);

  const checkBox = document.createElement('input');
  checkBox.className = 'form-check-input';
  checkBox.setAttribute('type', 'checkbox');
  checkBox.id = index;
  checkBoxContainer.appendChild(checkBox);

  const taskInput = document.createElement('input');
  taskInput.className = 'taskInput';
  taskInput.id = `input${index}`;
  taskInput.setAttribute('type', 'text');
  taskInput.setAttribute('value', `${array[1]}`);
  taskContainer.appendChild(taskInput);

  const optionAndTrash = document.createElement('div');
  optionAndTrash.className = 'optionAndTrash';
  optionAndTrash.innerHTML = `
      <i class="fa-solid fa-ellipsis-vertical" id="option${index}"></i>
      <i class="fa-solid fa-trash-can" id="trash${index}"></i>
  `;
  taskContainer.appendChild(optionAndTrash);
};

const createList = (tasksContainer) => {
  if (tasksContainer) {
    tasksContainer.forEach((element, index) => {
      displayOneBook(element, index);
    });
  }
};

const refresh = () => {
  const refreshButton = document.getElementById('refresh');
  refreshButton.addEventListener('click', () => {
    window.location.reload();
  });
};

const addOneTask = document.getElementById('addTask');
const description = document.getElementById('description');
const addABook = (TasksList, tasksContainer) => {
  addOneTask.addEventListener('click', () => {
    if (description.value) {
      tasksContainer = TasksList.getTasks();
      TasksList.addTask(tasksContainer.length + 1, description.value, false);
      localStorage.setItem('tasks', JSON.stringify(tasksContainer));
      window.location.reload();
    }
  });
};

const hitEnter = () => {
  description.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addOneTask.click();
    }
  });
};

const resetIndex = (TasksList, tasksContainer) => {
  let counter = 1;
  tasksContainer.forEach((item, index) => {
    item[0] = counter;
    TasksList.updateIndex(index, item[0]);
    tasksContainer = TasksList.getTasks();
    localStorage.setItem('tasks', JSON.stringify(tasksContainer));
    counter += 1;
  });
};

const deleteTask = (TasksList, tasksContainer) => {
  const btnDelete = document.querySelectorAll('.fa-trash-can');
  btnDelete.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      TasksList.removeTask(index);
      tasksContainer = TasksList.getTasks();
      localStorage.setItem('tasks', JSON.stringify(tasksContainer));
      resetIndex(TasksList, tasksContainer);
      window.location.reload();
    });
  });
};

const editTask = (TasksList, tasksContainer) => {
  const inputToEdit = document.querySelectorAll('.taskInput');
  inputToEdit.forEach((elem, index) => {
    elem.addEventListener('change', () => {
      if (elem.value) {
        TasksList.updateDesc(index, elem.value);
        tasksContainer = TasksList.getTasks();
        localStorage.setItem('tasks', JSON.stringify(tasksContainer));
        window.location.reload();
      }
    });
  });
};

const clearCompleted = document.getElementById('clearCompleted');
const clearCompletedTask = (TasksList, tasksContainer) => {
  clearCompleted.addEventListener('click', () => {
    if (tasksContainer) {
      TasksList.clearCompleted();
      tasksContainer = TasksList.getTasks();
      localStorage.setItem('tasks', JSON.stringify(tasksContainer));
      resetIndex(TasksList, tasksContainer);
      window.location.reload();
    }
  });
};

export {
  createList,
  refresh,
  addABook,
  hitEnter,
  deleteTask,
  editTask,
  clearCompletedTask,
};