import { useTodoStore } from '../store/store';

function TodoBarCount() {
  const { todos } = useTodoStore();

  const nbrOfTodos = todos.length;

  return (
    <section className="grid gap-4 px-8 lg:px-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <h3 className="text-cyan-500">Todos created</h3>
          <span className="bg-neutral-800 py-0.5 px-2 rounded-full">
            {nbrOfTodos}
          </span>
        </div>
      </div>
      <div className="w-full h-0.5 bg-neutral-800"></div>
    </section>
  );
}

export default TodoBarCount;
