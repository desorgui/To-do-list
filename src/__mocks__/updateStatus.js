const changeStatus = (TasksList, tasksContainer) => {
    const checkBox = document.querySelectorAll('.form-check-input');
    checkBox.forEach((elem, index) => {
      const status = TasksList.getStatus(index);
      elem.addEventListener('change', () => {
        if (elem.checked && status !== true) {
          document.getElementById(`trash${index}`).style.display = 'block';
          document.getElementById(`option${index}`).style.display = 'none';
          document.getElementById(`input${index}`).style.textDecoration = 'line-through';
          TasksList.updateStatus(index, true);
          tasksContainer = TasksList.getTasks();
          localStorage.setItem('tasks', JSON.stringify(tasksContainer));
        } else {
          document.getElementById(`trash${index}`).style.display = 'none';
          document.getElementById(`option${index}`).style.display = 'block';
          document.getElementById(`input${index}`).style.textDecoration = 'none';
          TasksList.updateStatus(index, false);
          tasksContainer = TasksList.getTasks();
          localStorage.setItem('tasks', JSON.stringify(tasksContainer));
        }
      });
      if (status === true) {
        elem.checked = true;
        document.getElementById(`trash${index}`).style.display = 'block';
        document.getElementById(`option${index}`).style.display = 'none';
        document.getElementById(`input${index}`).style.textDecoration = 'line-through';
      }
    });
  };
  
  export default changeStatus;