import Navbar from '../components/Navbar';
import TodoBarCount from '../components/TodoBarCount';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

const Home = () => {
  // const nbrOfTodos = todos.length;

  return (
    <main className="bg-neutral-900 text-neutral-100 min-h-dvh w-full font-main grid-rows-[auto_1fr]">
      <Navbar />
      <article className="max-w-xl mx-auto pt-8 grid gap-12">
        <h1 className="font-bold text-4xl text-center">todo</h1>
        <TodoForm />
        <TodoBarCount />
        <TodoItem />
      </article>
    </main>
  );
};

export default Home;
