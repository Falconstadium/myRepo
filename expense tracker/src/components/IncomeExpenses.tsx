import { GlobalContext } from '@/context/GlobalState';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const IncomeExpenses = () => {
  const { t } = useTranslation('global');

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions?.map((transaction) => transaction.amount);

  const income = amounts
    ?.filter((item) => item > 0)
    ?.reduce((acc, item) => (acc += item), 0)
    ?.toFixed(2);

  const expense = (
    amounts
      ?.filter((item) => item < 0)
      ?.reduce((acc, item) => (acc += item), 0) * -1
  )?.toFixed(2);

  return (
    <div className="flex gap-8 items-center justify-center pt-8 uppercase">
      <div className="text-center">
        <h4 className="font-medium text-xs">{t('hero.income')}</h4>
        <p className="text-green font-semibold">{income}</p>
      </div>
      <span className="h-8 w-[1px] bg-stone-500"></span>
      <div className="text-center">
        <h4 className="font-medium text-xs">{t('hero.expense')}</h4>
        <p className="text-red-500 font-semibold">{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
