export function addTask(tasks, title) {
  const cleanTitle = title.trim();
  if (!cleanTitle) return tasks;

  return [...tasks, { title: cleanTitle, completed: false }];
}

export function toggleTask(tasks, index) {
  return tasks.map((task, taskIndex) =>
    taskIndex === index ? { ...task, completed: !task.completed } : task,
  );
}

export function countOpenTasks(tasks) {
  return tasks.filter((task) => !task.completed).length;
}
