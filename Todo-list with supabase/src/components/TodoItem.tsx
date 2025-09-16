import { useState } from 'react';
import { useTodoStore } from '../store/store';
import EditTodo from './EditTodo';
import Loading from './Loading';

function TodoItem() {
  const { todos, deleteTodo, toggleTodo, loading } = useTodoStore();

  const [isEditing, setIsEditing] = useState(false);

  if (loading) {
    return (
      <div className="grid place-content-center bg-neutral-950 opacity-75 min-h-dvh w-full right-0 mx-auto z-50 absolute top-0 left-0">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <ul className="grid gap-2 px-4 md:px-0">
        {todos?.map((todo) => (
          <div key={todo.id}>
            <li
              key={todo.id}
              className="flex items-center justify-between bg-neutral-800 text-neutral-100 py-2 px-3 rounded break-words">
              <div className="flex items-center gap-1.5">
                {/* <input
                  type="checkbox"
                  className={`${todo.is_complete ? 'accent-indigo-700' : ''}`}
                  onClick={() => toggleTodo(todo.id, todo.is_complete)}
                /> */}
                <p
                  className={`text-neutral-100 text-sm ${
                    todo.is_complete
                      ? 'line-through text-neutral-400 cursor-not-allowed'
                      : ''
                  }`}>
                  {todo.task}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  title="check todo"
                  className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300 hover:bg-blue-700 p-0.5 rounded"
                  onClick={() => toggleTodo(todo.id, todo.is_complete)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check-icon lucide-check">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </button>

                <button
                  type="button"
                  title="update todo"
                  className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300 hover:bg-green-700 p-0.5 rounded"
                  onClick={() => setIsEditing(!isEditing)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-square-pen-icon lucide-square-pen">
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                  </svg>
                </button>

                <button
                  type="button"
                  title="delete todo"
                  className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300 hover:bg-red-700  p-0.5 rounded"
                  onClick={() => deleteTodo(todo.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trash2-icon lucide-trash-2">
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M3 6h18" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </div>
            </li>
            {isEditing ? (
              <EditTodo todo={todo} setIsEditing={setIsEditing} />
            ) : null}
          </div>
        ))}
      </ul>
    </>
  );
}

export default TodoItem;
