import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchTodos, SetTodoPage } from '../store/action-creators/todo';

const TodoList: React.FC = () => {
  const { page, limit, todos, error, loading } = useTypedSelector((state) => state.todo);
  const dispatch = useDispatch();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    dispatch(fetchTodos(page, limit) as any);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: 'flex' }}>
        {pages.map((p) => (
          <div
            onClick={() => dispatch(SetTodoPage(p))}
            style={{ border: p === page ? '2px solid green' : '1px solid grey', padding: '10px' }}>
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
