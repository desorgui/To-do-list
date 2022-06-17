jest.mock('./taskClass.js');

const Tasks = require('./taskClass');

let tasks;
// test Edit

describe('the edit method', () => {
  beforeEach(() => {
    tasks = new Tasks();
    tasks.addTask(1, 'Description', false);
  });
  it('should be able to update the task description', () => {
    const newvalue = 'New Description';
    const oldValue = tasks.getTasks()[0][1];
    tasks.updateDesc(0, newvalue);
    expect(oldValue).not.toBe(newvalue);
  });
  it('the new value should be equal to the new description', () => {
    const newDescription = 'New Description';
    tasks.updateDesc(0, newDescription);
    const newValue = tasks.getTasks()[0][1];
    expect(newValue).toBe(newDescription);
  });
});

// test Task update function
describe('the updateStatus method', () => {
  beforeEach(() => {
    tasks = new Tasks();
    tasks.addTask(1, 'Description', false);
  });
  it('should be able to change the completed status', () => {
    const isCompleted = tasks.getTasks()[0][2];
    tasks.updateStatus(0, true);
    expect(isCompleted).not.toBe(true);
  });
  it('should be able to see if the completed status is changed to true', () => {
    tasks.updateStatus(0, true);
    const isCompleted = tasks.getTasks()[0][2];
    expect(isCompleted).toBe(true);
  });
});

// test all completed task
describe('the clearCompleted method', () => {
  beforeEach(() => {
    tasks = new Tasks();
    tasks.addTask(1, 'Description 1', false);
    tasks.addTask(2, 'Description 2', true);
    tasks.addTask(3, 'Description 3', false);
    tasks.addTask(4, 'Description 4', true);
    tasks.addTask(5, 'Description 5', true);
  });
  it('all tasks should be five', () => {
    const allTasks = tasks.getTasks().length;
    expect(allTasks).toBe(5);
  });
  it('completed tasks should be three', () => {
  });
  it('all tasks shoud be five', () => {
    const allTasks = tasks.getTasks().length;
    expect(allTasks).toBe(5);
  });
  it('completed tasks shoud be three', () => {
    let completed = 0;
    const allTasks = tasks.getTasks();
    allTasks.forEach((elem) => {
      if (elem[2] === true) {
        completed += 1;
      }
    });
    expect(completed).toBe(3);
  });
  it('should be able to remove all completed task', () => {
    const unComplete = tasks.clearCompleted();
    expect(unComplete.length).toBe(2);
  });
});
