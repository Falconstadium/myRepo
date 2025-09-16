import {
  type AuthResponse,
  type Session,
  type User,
} from '@supabase/supabase-js';
import { create } from 'zustand';
import { supabase } from '../supabaseClient';

// --- Type Definitions ---
// Define the shape of the store's state
interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

// Define the shape of the store's actions
interface AuthActions {
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  fetchUserSession: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<AuthResponse>;
  signIn: (email: string, password: string) => Promise<AuthResponse>;
  googleSign: () => void;
  signOut: () => Promise<void>;
}

// Combine the state and actions into a single type for the store
type AuthStore = AuthState & AuthActions;

// --- Zustand Store Creation ---
export const useAuthStore = create<AuthStore>((set) => ({
  // Initial state
  user: null,
  session: null,
  loading: false,

  // Actions
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),

  // Action to fetch user session from Supabase
  fetchUserSession: async () => {
    set({ loading: true });
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.error('Error fetching session:', error.message);
        set({ user: null });
      } else {
        // The session object contains a user object.
        set({ user: session?.user || null });
        console.log(session);
      }
    } catch (e) {
      console.error('An unexpected error occurred:', e);
      set({ user: null });
    } finally {
      // Ensure loading is set to false regardless of the outcome
      set({ loading: false });
    }
  },

  // Action for user signup
  signUp: async (email, password) => {
    // Return the full AuthResponse for error handling in components
    const response = await supabase.auth.signUp({ email, password });
    if (response.error) {
      console.error('Sign up error:', response.error.message);
    }
    return response;
  },

  // Action for user login
  signIn: async (email, password) => {
    // Return the full AuthResponse for error handling in components
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (response.error) {
      console.error('Sign in error:', response.error.message);
    }
    return response;
  },

  //Google Sign in
  googleSign: async () => {
    const response = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });
    if (response.error) {
      console.error('Error sign in with Google:', response.error.message);
    }
    return response;
  },

  // Action for user logout
  signOut: async () => {
    set({ loading: true });
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Sign out error:', error.message);
      }
    } catch (e) {
      console.error('An unexpected error occurred during sign out:', e);
    } finally {
      set({ loading: false });
    }
  },
}));

supabase.auth.onAuthStateChange((event, session) => {
  useAuthStore.setState({
    user: session?.user || null,
    session: session || null,
  });
});
