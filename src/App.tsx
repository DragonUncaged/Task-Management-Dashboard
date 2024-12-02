import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskFilter } from './components/TaskFilter';
import { CheckSquare } from 'lucide-react';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center space-x-3">
              <CheckSquare className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
            </div>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <TaskForm />
            <TaskFilter />
            <TaskList />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;