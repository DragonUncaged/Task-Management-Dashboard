import React from 'react';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { TaskFilter } from '../components/TaskFilter';

export function TaskDashboard() {
  return (
    <div className="space-y-6">
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
}