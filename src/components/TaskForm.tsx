import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';
import { PlusCircle } from 'lucide-react';

export function TaskForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    dispatch(addTask(newTask));
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-[#242632] p-6 rounded-xl shadow-lg">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full bg-[#1a1b23] text-white rounded-lg border-transparent focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6] text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full bg-[#1a1b23] text-white rounded-lg border-transparent focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6] text-sm"
          rows={3}
        />
      </div>
      <div>
        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-300">
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="mt-1 block w-full bg-[#1a1b23] text-white rounded-lg border-transparent focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6] text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#8b5cf6] hover:bg-[#7c3aed] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8b5cf6]"
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        Add Task
      </button>
    </form>
  );
}