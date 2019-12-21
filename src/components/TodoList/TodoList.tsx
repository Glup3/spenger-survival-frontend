import React, { useState, useEffect } from 'react';

import { useData } from '../../context/dataContext';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const data = useData();

  useEffect(() => {
    const fetch = async () => {
      setTodos(await data.getAllTodos());
    };

    fetch();
    // eslint-disable-next-line
  }, []);

  return (
    <ul>
      {todos.map((todo, index) => {
        if (todo.done) {
          return (
            <li key={`todo-${index}`}>
              <del>{todo.title}</del>
            </li>
          );
        }

        return <li key={`todo-${index}`}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
