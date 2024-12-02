import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/taskSlice';
import { RootState } from '../store/store';
import { ListFilter } from 'lucide-react';

export function TaskFilter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.tasks.filter);

  const filters = [
    { value: 'all', label: 'All Tasks' },
    { value: 'pending', label: 'Pending' },
    { value: 'completed', label: 'Completed' },
    { value: 'overdue', label: 'Overdue' },
  ];

  return (
    <div className="flex items-center space-x-4 bg-[#242632] p-4 rounded-xl shadow-lg">
      <ListFilter className="w-5 h-5 text-gray-400" />
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => dispatch(setFilter(filter.value as any))}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentFilter === filter.value
              ? 'bg-[#8b5cf6] text-white'
              : 'text-gray-400 hover:bg-[#1a1b23] hover:text-white'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}