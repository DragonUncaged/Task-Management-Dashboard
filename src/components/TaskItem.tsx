import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '../types/task';
import { deleteTask, toggleTaskComplete, updateTask } from '../store/taskSlice';
import { Pencil, Trash2, Check, X } from 'lucide-react';
import { format, parseISO } from 'date-fns';

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    dispatch(updateTask(editedTask));
    setIsEditing(false);
  };

  const formattedDueDate = task.dueDate
    ? format(parseISO(task.dueDate), 'MMM d, yyyy')
    : 'No due date';

  if (isEditing) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          value={editedTask.title}
          onChange={(e) =>
            setEditedTask({ ...editedTask, title: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
        <textarea
          value={editedTask.description}
          onChange={(e) =>
            setEditedTask({ ...editedTask, description: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          value={editedTask.dueDate}
          onChange={(e) =>
            setEditedTask({ ...editedTask, dueDate: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSave}
            className="p-2 text-green-600 hover:text-green-800"
          >
            <Check className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="p-2 text-red-600 hover:text-red-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md ${task.completed ? 'opacity-75' : ''}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </h3>
          <p className="text-gray-600 mt-1">{task.description}</p>
          <p className="text-sm text-gray-500 mt-2">Due: {formattedDueDate}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => dispatch(toggleTaskComplete(task.id))}
            className={`p-2 ${
              task.completed ? 'text-green-600' : 'text-gray-400'
            } hover:text-green-800`}
          >
            <Check className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-blue-600 hover:text-blue-800"
          >
            <Pencil className="w-5 h-5" />
          </button>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="p-2 text-red-600 hover:text-red-800"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}