import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { format, parseISO } from 'date-fns';
import { ArrowLeft, Calendar, CheckCircle2, Clock } from 'lucide-react';

export function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find((t) => t.id === id)
  );

  if (!task) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Task not found</h2>
        <button
          onClick={() => navigate('/tasks')}
          className="mt-4 inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-[#8b5cf6] hover:bg-[#7c3aed]"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Tasks
        </button>
      </div>
    );
  }

  const formattedDueDate = task.dueDate
    ? format(parseISO(task.dueDate), 'PPP')
    : 'No due date';
  const formattedCreatedDate = format(parseISO(task.createdAt), 'PPP');

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate('/tasks')}
        className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-300 bg-[#242632] hover:bg-[#2d2f3d]"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Tasks
      </button>

      <div className="bg-[#242632] shadow-lg rounded-xl p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">{task.title}</h2>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                task.completed
                  ? 'bg-green-900/30 text-green-400'
                  : 'bg-yellow-900/30 text-yellow-400'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 mr-1" />
              {task.completed ? 'Completed' : 'Pending'}
            </span>
          </div>

          <p className="text-gray-300 text-lg">{task.description}</p>

          <div className="border-t border-gray-700/50 pt-4 space-y-2">
            <div className="flex items-center text-gray-400">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Due: {formattedDueDate}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Clock className="w-5 h-5 mr-2" />
              <span>Created: {formattedCreatedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}