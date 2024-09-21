import { GlobalContext } from '@/context/GlobalState';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const Balance = () => {
  const { t } = useTranslation('global');

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions?.map((transaction) => transaction.amount);

  const total = amounts?.reduce((acc, item) => (acc += item), 0)?.toFixed(2);

  return (
    <>
      <div className="grid place-content-center text-center pt-7 gap-0">
        <h4 className="font-medium uppercase text-xs">{t('hero.balance')}</h4>
        <h1 className="font-semibold text-3xl text-muted-foreground">
          {total} DH
        </h1>
      </div>
    </>
  );
};

export default Balance;
