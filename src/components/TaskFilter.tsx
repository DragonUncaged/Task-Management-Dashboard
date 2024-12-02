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
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
      <ListFilter className="w-5 h-5 text-gray-500" />
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => dispatch(setFilter(filter.value as any))}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            currentFilter === filter.value
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}