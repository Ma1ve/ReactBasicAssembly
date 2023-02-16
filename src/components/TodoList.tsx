import { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: FC = () => {
  const { todos, loading, error, limit, page } = useTypedSelector((state) => state.todo);

  const { fetchTodos, SetTodoPage } = useActions();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1 style={{ marginLeft: '130px' }}>LOADING...</h1>;
  }

  if (error) {
    return <h1 style={{ marginLeft: '130px' }}>{error}</h1>;
  }

  return (
    <div>
      <div style={{ marginLeft: '130px' }}>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        ))}
        <div style={{ display: 'flex', marginTop: 10 }}>
          {pages.map((p) => (
            <div
              role="presentation"
              key={p}
              onClick={() => SetTodoPage(p)}
              style={{
                border: p === page ? '2px solid blue' : '1px solid blue',
                padding: 10,
                cursor: 'pointer',
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
