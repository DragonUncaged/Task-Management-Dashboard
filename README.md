# Task-Management-Dashboard

## Requirements:
### Task Functionality:
- Add Task: Allow users to add tasks with a title, description, and due date.
- Edit Task: Users should be able to edit task details.
- Delete Task: Users should be able to delete a task.
- Mark as Completed: Users should be able to mark tasks as completed.

### Task Filters:
- Provide filters to show tasks by:
- All Tasks
- Completed Tasks
- Pending Tasks
- Overdue Tasks (tasks with a due date before the current date).
- Redux Integration:
- Use Redux for state management.
- Store the list of tasks in the Redux store.
- Create actions and reducers to handle task CRUD operations and filtering.

### UI/UX Design:
- Use a modern UI library (like Material-UI, Ant Design, or styled-components) or design a custom UI.
- Create a responsive design that works well on desktop and mobile screens.
- The dashboard should have a clean and user-friendly layout.
- Additional Features (Optional for Extra Credit):
- Add search functionality to find tasks by title.
- Implement drag-and-drop to reorder tasks.
- Add a confirmation modal before deleting a task.


## Technical Specifications:
## Technology Stack:
- React
- Redux (with @reduxjs/toolkit preferred)
- JavaScript (ES6+ features)
- CSS or SCSS (optional: CSS-in-JS libraries like styled-components)

### Routing:
- Use React Router to create a basic route structure:
- /tasks - Task Dashboard
- /tasks/:id - Task Details Page (optional)

### State Management:
- Use Redux Toolkit to handle state and actions.
- Use middleware (e.g., Redux Thunk) if needed for asynchronous operations.
