import { describe, expect, it } from 'vitest';
import { addTask, countOpenTasks, toggleTask } from './tasks.js';

describe('task list behavior', () => {
  it('adds a trimmed, incomplete task', () => {
    expect(addTask([], '  Water the plants  ')).toEqual([
      { title: 'Water the plants', completed: false },
    ]);
  });

  it('does not add a blank task', () => {
    const existingTasks = [{ title: 'Read', completed: false }];
    expect(addTask(existingTasks, '   ')).toBe(existingTasks);
  });

  it('toggles completion and counts only open tasks', () => {
    const tasks = [
      { title: 'Read', completed: false },
      { title: 'Walk', completed: false },
    ];

    const updatedTasks = toggleTask(tasks, 0);

    expect(updatedTasks[0].completed).toBe(true);
    expect(updatedTasks[1].completed).toBe(false);
    expect(countOpenTasks(updatedTasks)).toBe(1);
  });
});
