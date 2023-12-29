// Task.js
import React, { useState } from 'react';

const Task = ({ task, toggleComplete, editTask, deleteTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // Check if either the title or description is empty before saving
    if (newTitle?.trim() === '' || newDescription?.trim() === '') {
      alert('Title and description cannot be empty');
      return;
    }

    // Update the task with the new title and description
    editTask({id: task.id, title: newTitle, description: newDescription});

    // Reset the state and exit editing mode
    setEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <span>{task.description}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
