import { create } from 'zustand';
import { supabase } from '../supabaseClient';
import { useAuthStore } from './supabase';

type Todo = {
  id: string;
  task: string;
  is_complete: boolean;
  email: string;
};

interface type {
  fetchTodos: () => Promise<void>;
  toggleTodo: (id: string, is_complete: boolean) => Promise<void>;
  editTodo: (id: string, task: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  todos: Todo[];
  loading: boolean;
}

export const useTodoStore = create<type>((set, get) => ({
  todos: [],
  loading: false,
  fetchTodos: async () => {
    set({ loading: true });
    try {
      const { data, error } = await supabase.from('todoList').select('*');
      if (error) {
        console.error('Error fetching todos:', error);
        return;
      }
      set({ todos: data });
    } finally {
      set({ loading: false });
    }
  },

  addTodo: async (task: string) => {
    const user = useAuthStore.getState().user;
    set({ loading: true });
    try {
      const { error } = await supabase
        .from('todoList')
        .insert([{ task, is_complete: false, email: user?.email }]);
      if (error) {
        console.error('Error adding todo:', error);
        return;
      }
      get().fetchTodos();
    } finally {
      set({ loading: false });
    }
  },

  toggleTodo: async (id: string, is_complete: boolean) => {
    set({ loading: true });
    try {
      const { error } = await supabase
        .from('todoList')
        .update({ is_complete: !is_complete })
        .eq('id', id);
      if (error) console.error('Error toggling todo:', error);
      get().fetchTodos();
    } finally {
      set({ loading: false });
    }
  },

  editTodo: async (id: string, newTask: string) => {
    set({ loading: true });
    try {
      const { error } = await supabase
        .from('todoList')
        .update({ task: newTask })
        .eq('id', id);
      if (error) {
        console.error('Error updating todo:', error);
        return;
      }
      get().fetchTodos();
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, task: newTask } : todo
        ),
      }));
    } catch (err) {
      console.error('An unexpected error occurred:', err);
    } finally {
      set({ loading: false });
    }
  },

  deleteTodo: async (id: string) => {
    set({ loading: true });
    try {
      const { error } = await supabase.from('todoList').delete().eq('id', id);
      if (error) console.error('Error deleting todo:', error);
      get().fetchTodos();
    } finally {
      set({ loading: false });
    }
  },
}));
