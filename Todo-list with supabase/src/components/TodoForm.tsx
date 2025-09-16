import { useEffect, useState, type FormEvent } from 'react';
import { useTodoStore } from '../store/store';

function TodoForm() {
  const { addTodo, fetchTodos }: any = useTodoStore();

  const [todoVal, setTodoVal] = useState('');

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();

    addTodo(todoVal.trim());

    setTodoVal('');
  };

  return (
    <form
      className="flex items-center justify-center gap-2 w-full px-8 md:px-0"
      onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Add new todo"
        value={todoVal}
        onChange={(e) => setTodoVal(e.target.value)}
        className="bg-neutral-800 text-neutral-100 text-sm py-2 px-3 rounded w-full focus:outline-none"
      />
      <button
        type="submit"
        className="py-2 px-3 bg-cyan-700 hover:bg-cyan-600 transition-colors duration-200 text-neutral-50 font-medium text-sm rounded flex items-center gap-1">
        <span>Create</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-plus-icon lucide-circle-plus">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      </button>
    </form>
  );
}

export default TodoForm;
