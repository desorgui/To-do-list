import Tasks from "./taskClass";
// Test add
let tasks;
describe('the add method', () => {
  beforeEach(() => {
    tasks = new Tasks();
  });
  it('should be able to createa new task', () => {
    tasks.addTask(1,'description of task to add', false);
    let tasklngth = tasks.getTasks().length;
    expect(tasklngth).toBe(1);
  });
});

//test Edit

describe('the edit method', () => {
  beforeEach(() => {
    tasks = new Tasks();
    tasks.addTask(1, 'Description', false);
  });
  it('should be able to update the task description', () =>{
    let newvalue = 'New Description'; 
    let oldValue = tasks.getTasks()[0][1];
    tasks.updateDesc(0, newvalue);
    expect(oldValue).not.toBe(newvalue);
  });
  it('the new value should be equal to the new description', () =>{
    let newDescription = 'New Description'
    tasks.updateDesc(0, newDescription);
    let newValue = tasks.getTasks()[0][1];
    expect(newValue).toBe(newDescription);
  })
})

//test Task update function

describe('the update method', () => {
  beforeEach(() => {
    tasks = new Tasks();
    tasks.addTask(1, 'Description', false);
  });

})
