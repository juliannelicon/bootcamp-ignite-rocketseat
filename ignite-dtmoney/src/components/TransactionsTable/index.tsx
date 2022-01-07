import React, { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);

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

export default TransactionsTable;