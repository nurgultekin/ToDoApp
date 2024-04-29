import React, { useState, useEffect } from 'react';
import './Todo.css';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [allCompleted, setAllCompleted] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
    updateAllCompleted(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    updateAllCompleted(todos);
  }, [todos]);

  const updateAllCompleted = (todosArray) => {
    const allCompleted = todosArray.every(todo => todo.completed);
    setAllCompleted(allCompleted);
  };

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
      <h1>Make your list, and track your daily tasks!</h1>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={addTodo}>Add to-do</button>
      <ul>
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
            </label>
            <span className="delete-icon" onClick={() => deleteTodo(index)}>
              X
            </span>
          </li>
        ))}
      </ul>
      {todos.length > 0 && <button onClick={clearTodos}>Clear All</button>}
      {todos.length === 0 && (
        <div className="no-todos-message">
          <div className="fade-in-animation">No todos remaining. Type to start!</div>
        </div>
      )}
      {allCompleted && todos.length > 0 && (
        <div className="all-completed-message fade-in-animation">
          All tasks completed!
        </div>
      )}
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
      {completedTodos.length > 0 && <button onClick={handleSaveCompleted}>Save Completed</button>}
    </div>
  );
};

export default TodoPage;
