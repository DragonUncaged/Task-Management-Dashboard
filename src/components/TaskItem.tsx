import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Task } from '../types/task';
import { deleteTask, toggleTaskComplete, updateTask } from '../store/taskSlice';
import { Pencil, Trash2, Check, X, ExternalLink } from 'lucide-react';
import { format, parseISO } from 'date-fns';

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      <div className="bg-[#242632] p-4 rounded-xl shadow-lg space-y-4">
        <input
          type="text"
          value={editedTask.title}
          onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          className="w-full p-2 bg-[#1a1b23] text-white rounded-lg border-transparent focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6]"
        />
        <textarea
          value={editedTask.description}
          onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          className="w-full p-2 bg-[#1a1b23] text-white rounded-lg border-transparent focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6]"
        />
        <input
          type="date"
          value={editedTask.dueDate}
          onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
          className="w-full p-2 bg-[#1a1b23] text-white rounded-lg border-transparent focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6]"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSave}
            className="p-2 text-green-400 hover:text-green-300"
          >
            <Check className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="p-2 text-red-400 hover:text-red-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-[#242632] p-4 rounded-xl shadow-lg ${task.completed ? 'opacity-75' : ''}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
            {task.title}
          </h3>
          <p className="text-gray-400 mt-1">{task.description}</p>
          <p className="text-sm text-gray-500 mt-2">Due: {formattedDueDate}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => navigate(`/tasks/${task.id}`)}
            className="p-2 text-gray-400 hover:text-white"
          >
            <ExternalLink className="w-5 h-5" />
          </button>
          <button
            onClick={() => dispatch(toggleTaskComplete(task.id))}
            className={`p-2 ${
              task.completed ? 'text-green-400' : 'text-gray-400'
            } hover:text-green-300`}
          >
            <Check className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-blue-400 hover:text-blue-300"
          >
            <Pencil className="w-5 h-5" />
          </button>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="p-2 text-red-400 hover:text-red-300"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}