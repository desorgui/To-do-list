class Tasks {
  constructor() {
    this.index = 0;
    this.description = '';
    this.completed = false;
    this.tasks = [];
  }

  incrementIndex() {
    if (!this.latestIndex) this.latestIndex = 1;
    else this.latestIndex += 1;
    return this.latestIndex;
  }

  addTask(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
    this.tasks.push([this.index, this.description, this.completed]);
  }

  updateDesc(index, newValue) {
    this.tasks[index][1] = newValue;
  }

  updateStatus(index, newValue) {
    this.tasks[index][2] = newValue;
  }

  updateIndex(index, newValue) {
    this.tasks[index][0] = newValue;
  }

  getStatus(index) {
    return this.tasks[index][2];
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  clearCompleted() {
    this.tasks = this.tasks.filter((elem) => elem.find(() => (elem[2] === false)));
    return this.tasks;
  }

  getTasks() {
    return this.tasks;
  }

  setTasks(storage) {
    this.tasks = storage;
  }
}

module.exports = Tasks;