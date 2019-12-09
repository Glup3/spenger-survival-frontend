import React, { useState, useEffect } from 'react';

import { useData } from '../context/dataContext';

const TodoPage = () => {
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
    <main className="container">
      <div className="border rounded p-4 mb-5 shadow">
        <h1>Roadmap</h1>
        <p>
          Features, die noch implementiert werden. Bugs, die noch gefixt werden müssen. Hier sieht man, was noch alles
          gemacht werden muss.
        </p>
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
      </div>
    </main>
  );
};

export default TodoPage;
