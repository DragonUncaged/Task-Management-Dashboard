import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { TaskItem } from './TaskItem';
import { Task } from '../types/task';
import { isAfter, parseISO } from 'date-fns';

export function TaskList() {
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = tasks.filter((task: Task) => {
    switch (filter) {
      case 'completed':
        return task.completed;
      case 'pending':
        return !task.completed;
      case 'overdue':
        return (
          !task.completed &&
          task.dueDate &&
          isAfter(new Date(), parseISO(task.dueDate))
        );
      default:
        return true;
    }
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks found for the selected filter.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}