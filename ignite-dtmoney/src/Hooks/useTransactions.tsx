import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

// Omite id e createdAt
// type TansactionInput = Omit<ITransaction, 'id' | 'createdAt'>;

// Pick informa somente os campos que serão utilizado
type TansactionInput = Pick<ITransaction, 'title' | 'amount' | 'category' | 'type'>;

interface TransactionsContextProps {
  transactions: ITransaction[],
  createTransaction: (transaction: TansactionInput) => Promise<void>,
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api('transactions').then(response =>
      setTransactions(response.data.transactions)
    );
  },[]);

  async function createTransaction (transaction: TansactionInput) {
    const response = await api.post('/transactions', {
      ...transaction,
      createdAt: new Date(),
    })
    setTransactions([...transactions, response.data.transaction])
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction,
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext);

  return context;
}