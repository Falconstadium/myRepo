interface Transaction {
  id: string;
  amount: number;
}

interface State {
  transactions: Transaction[];
}

interface Action {
  type: 'DELETE_TRANSACTION' | 'ADD_TRANSACTION';
  payload: any;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default reducer;
