// App.js
import React from 'react';
import TaskList from './TaskList';
import '../src/style.css';

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList />
      
    </div>
  );
};

export default App;
