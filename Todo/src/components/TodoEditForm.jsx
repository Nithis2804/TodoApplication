import React, { useState } from "react";

const TodoEditForm = ({ todo, updateTodo, setIsEditing }) => {
  const [editedTask, setEditedTask] = useState(todo.task);
  const [editedDeadline, setEditedDeadline] = useState(todo.deadline);
  const [editedStatus, setEditedStatus] = useState(todo.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo._id, {
      task: editedTask,
      deadline: editedDeadline,
      status: editedStatus,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={editedDeadline}
          onChange={(e) => setEditedDeadline(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={editedStatus}
          onChange={(e) => setEditedStatus(e.target.value)}
        />
      </td>
      <td>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={handleCancel}>Reset</button>
      </td>
    </tr>
  );
};

export default TodoEditForm;
