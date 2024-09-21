import { GlobalContext } from '@/context/GlobalState';
import { useContext } from 'react';

const Transaction = ({ transaction }: any) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <li
          className="w-full border border-solid rounded-sm flex justify-between items-center text-xs font-medium py-1 px-2"
          key={transaction.id}>
          {transaction.text}
          <div className="flex items-center gap-1">
            <span>
              {sign}
              {Math.abs(transaction.amount)} DH
            </span>
            <span
              className={
                transaction.amount < 0
                  ? 'bg-red-500 w-1 h-4'
                  : 'bg-green w-1 h-4'
              }></span>
          </div>
        </li>
        <button
          className="bg-red-500 rounded-full"
          onClick={() => deleteTransaction(transaction.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Transaction;
