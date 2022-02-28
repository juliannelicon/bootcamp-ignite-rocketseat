import { useTransactions } from '../../Hooks/useTransactions';

import totalImg from '../../assets/total.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container } from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income'){
      acc.income += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.outcome += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;

  }, {
    income: 0,
    outcome: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>

        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'brl'
          }).format(summary.income)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>

        <strong>
          - {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'brl'
          }).format(summary.outcome)}
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>

        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'brl'
          }).format(summary.total)}
        </strong>
      </div>

    </Container>
  );
}
