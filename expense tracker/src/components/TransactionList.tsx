import { GlobalContext } from '@/context/GlobalState';
import { useContext } from 'react';
import Transaction from './Transaction';
import { useTranslation } from 'react-i18next';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  const { t } = useTranslation('global');

  return (
    <div className="grid pt-4">
      <h3 className="font-medium">{t('history.title')}</h3>
      <span className="w-full h-[1px] bg-stone-800 mt-1"></span>
      <ul className="grid gap-3 w-full pt-4">
        {transactions &&
          transactions.map &&
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        {/* {transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))} */}
      </ul>
    </div>
  );
};

export default TransactionList;
