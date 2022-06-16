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

