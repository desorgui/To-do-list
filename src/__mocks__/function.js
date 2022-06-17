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
editTask();

const clearCompleted = document.getElementById('clearCompleted');
const clearCompletedTask = (TasksList, tasksContainer) => {
  clearCompleted.addEventListener('click', () => {
    if (tasksContainer) {
      TasksList.clearCompleted();
      tasksContainer = TasksList.getTasks();
      localStorage.setItem('tasks', JSON.stringify(tasksContainer));
      window.location.reload();
    }
  });
};
clearCompletedTask();