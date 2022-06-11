import './style.css';
import Tasks from './taskClass';
import {
  createList,
  refresh,
  addABook,
  hitEnter,
  deleteTask,
  editTask,
  clearCompletedTask,
} from './function';
import changeStatus from './updateStatus';

const TasksList = new Tasks();

if (localStorage.getItem('tasks') !== null && localStorage.getItem('tasks') !== undefined) {
  TasksList.setTasks(JSON.parse(localStorage.getItem('tasks')));
}

const tasksContainer = TasksList.getTasks();

createList(tasksContainer);
refresh();
addABook(TasksList, tasksContainer);
hitEnter();
changeStatus(TasksList, tasksContainer);
deleteTask(TasksList, tasksContainer);
editTask(TasksList, tasksContainer);
clearCompletedTask(TasksList, tasksContainer);