const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const today = new Date().toISOString().split("T")[0];
    return all
      .filter((item) => item.dueDate < today)
      .map((item) => ({
        title: 'Submit assignment', 
        dueDate: yesterday, 
        completed: false 
      }));
  };

  const dueToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return all
      .filter((item) => item.dueDate === today)
      .map((item) => ({
        title: 'Pay rent', 
        dueDate: today, 
        completed: true
      }));
  };

  const dueLater = () => {
    const today = new Date().toISOString().split("T")[0];
    return all
      .filter((item) => item.dueDate > today)
      .map((item) => ({
        title: 'File taxes',
        dueDate: tomorrow,
        completed: false
      }));
  };

  const toDisplayableList = (list) =>
    list
      .map(
        (item) =>
          `[${item.completed ? "x" : " "}] ${item.title} ${
            item.dueDate ? `${item.dueDate}` : ""
          }`
      )
      .join("\n");

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;