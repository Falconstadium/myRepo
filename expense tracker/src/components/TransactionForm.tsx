import { useContext, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { GlobalContext } from '@/context/GlobalState';
import { useTranslation } from 'react-i18next';

const TransactionForm = () => {
  const { t } = useTranslation('global');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <div className="pt-6 grid">
      <h3 className="font-medium text-sm">{t('form.new')}</h3>
      <span className="w-full h-[1px] bg-stone-800 mt-1"></span>
      <form className="grid gap-3 pt-4" onSubmit={onSubmit}>
        <div className="grid gap-1">
          <label htmlFor="text" className="text-xs">
            {t('form.text')}
          </label>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t('form.textLabel')}
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="amount" className="text-xs">
            {t('form.amount')} <br /> ({t('form.negative')} -{' '}
            {t('hero.expense')}, {t('form.positive')} - {t('hero.income')})
          </label>
          <Input
            type="number"
            placeholder="Enter amount.."
            value={amount}
            onChange={(e: any) => setAmount(e.target.value)}
          />
        </div>
        <Button className="mx-auto">{t('form.add')}</Button>
      </form>
    </div>
  );
};

export default TransactionForm;
