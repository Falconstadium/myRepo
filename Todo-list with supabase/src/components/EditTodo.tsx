import { useState } from 'react';
import { useTodoStore } from '../store/store';

function editedTodo({ todo, setIsEditing }: any) {
  const { editTodo } = useTodoStore();

  const [editedText, setEditedText] = useState(todo.task);

  // Handle saving the edited text
  const handleSaveEdit = () => {
    if (editedText.trim() === '') return;
    editTodo(todo.id, editedText);
    setIsEditing(false);
  };

  // Handle canceling the edit
  const handleCancelEdit = () => {
    setEditedText(todo.task); // Reset the text to the original value
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-center min-h-dvh gap-2 max-w-lg mx-auto px-8 md:px-0 absolute top-0 left-0 right-0 bg-neutral-950 opacity-75 z-50">
      <input
        type="text"
        placeholder="Add new todo"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        className="bg-neutral-800 text-neutral-100 text-sm py-2 px-3 rounded w-full focus:outline-none"
      />
      <button
        type="submit"
        className="py-2 px-3 bg-cyan-700 hover:bg-cyan-600 transition-colors duration-200 text-neutral-50 font-medium text-sm rounded flex items-center gap-1"
        onClick={handleSaveEdit}>
        Save
      </button>
      <button
        type="submit"
        className="py-2 px-3 bg-cyan-700 hover:bg-cyan-600 transition-colors duration-200 text-neutral-50 font-medium text-sm rounded flex items-center gap-1"
        onClick={handleCancelEdit}>
        cancel
      </button>
    </div>
  );
}

export default editedTodo;
