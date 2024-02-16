import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import axios from "axios";

const TodoListApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoList = async () => {
    try {
      const response = await axios.get("/api/getTodoList");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todo list: ", error);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      await axios.post("/api/addTodoList", newTodo);
      fetchTodoList();
    } catch (error) {
      console.error("Error adding todo: ", error);
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      await axios.put(`/api/updateTodoList/${id}`, updatedTodo);
      fetchTodoList();
    } catch (error) {
      console.error("Error updating todo: ", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/deleteTodoList/${id}`);
      fetchTodoList();
    } catch (error) {
      console.error("Error deleting todo: ", error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoListApp;
