import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [],
};

interface GlobalContextType {
  transactions: { id: number; text: string; amount: number }[];
  deleteTransaction: (id: any) => void;
  addTransaction: (transaction: any) => void;
}

export const GlobalContext = createContext<GlobalContextType>(
  initialState as any
);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState as any);

  function deleteTransaction(id: any) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  const addTransaction = (transaction: any) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

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
