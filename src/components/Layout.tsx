import React from 'react';
import { Outlet } from 'react-router-dom';
import { CheckSquare, Search, Bell, Settings, Sun } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#1a1b23]">
      <header className="bg-[#242632] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <CheckSquare className="w-8 h-8 text-[#8b5cf6]" />
              <h1 className="text-2xl font-bold text-white">Task Manager</h1>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-[#1a1b23] text-gray-300 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-white">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white">
                  <Sun className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white">
                  <Settings className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 rounded-full bg-[#8b5cf6] flex items-center justify-center">
                  <span className="text-sm font-medium text-white">JD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}