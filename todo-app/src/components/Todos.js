import React, { useState, useEffect } from 'react';
import './Todo.css';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const handleSaveCompleted = () => {
    const completedTasks = todos.filter((todo) => todo.completed);
    setCompletedTodos([...completedTodos, ...completedTasks]);
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>Todo Page</h1>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <button onClick={clearTodos}>Clear All</button>
      )}
      {todos.length === 0 && <p>No todos remaining!</p>}
      {completedTodos.length > 0 && (
        <>
          <h2>Completed Tasks</h2>
          <ul>
            {completedTodos.map((todo, index) => (
              <li key={index}>{todo.text}</li>
            ))}
          </ul>
        </>
      )}
      {completedTodos.length > 0 && (
        <button onClick={handleSaveCompleted}>Save Completed</button>
      )}
    </div>
  );
};

export default TodoPage;
