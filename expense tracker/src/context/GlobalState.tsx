import { createContext, ReactNode, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: JSON.parse(localStorage.getItem('transaction') || '[]'),
};

interface GlobalContextType {
  transactions: { id: number; text: string; amount: number }[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: []) => void;
}

export const GlobalContext = createContext<GlobalContextType>(
  initialState as any
);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState as any);

  function deleteTransaction(id: number) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  const addTransaction = (transaction: []) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  useEffect(() => {
    localStorage.setItem('transaction', JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <GlobalContext.Provider
      value={{
        transactions: (state as any).transactions,
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
