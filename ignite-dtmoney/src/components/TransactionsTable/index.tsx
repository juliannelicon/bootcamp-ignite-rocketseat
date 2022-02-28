import { useTransactions } from '../../Hooks/useTransactions';

import { Container } from './styles';

export function TransactionsTable () {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'outcome' && '-'}
                {new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'brl'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
              {new Intl.DateTimeFormat('pt-br').format(
                new Date( transaction.createdAt)
              )}
              </td>
          </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
