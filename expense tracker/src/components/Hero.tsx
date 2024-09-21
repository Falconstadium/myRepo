import { useTranslation } from 'react-i18next';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

const Hero = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <section className="mx-auto min-h-[100dvh] pt-24 px-4 w-full sm:w-[600px] lg:w-2/3">
        <h2 className="capitalize font-bold text-sm lg:text-base text-center">
          {t('hero.title')}
        </h2>
        <div className="lg:grid w-full lg:grid-cols-2 lg:gap-12 lg:pt-8">
          <div>
            <Balance />
            <IncomeExpenses />
            <TransactionForm />
          </div>
          <div>
            <TransactionList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
