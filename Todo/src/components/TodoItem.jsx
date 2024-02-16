import React, { useState } from "react";
import TodoEditForm from "./TodoEditForm";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    deleteTodo(todo._id);
  };

  return (
    <tr>
      {isEditing ? (
        <TodoEditForm
          todo={todo}
          updateTodo={updateTodo}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <td>{todo.task}</td>
          <td>{todo.deadline}</td>
          <td>{todo.status}</td>
          <td>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default TodoItem;
