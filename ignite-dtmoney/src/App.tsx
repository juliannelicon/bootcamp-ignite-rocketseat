import { useState } from "react";

import { TransactionsProvider } from "./Hooks/useTransactions";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TransactionModal from "./components/TransactionModal";

import { GlobalStyle } from "./styles/global";


function App() {
  const [isOpenTransactionModal, setIsOpenTransactionModal] = useState(false);

  function handleOpenTransactionModal(){
    setIsOpenTransactionModal(true);
  }

  function handleCloseTransactionModal(){
    setIsOpenTransactionModal(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenModal={handleOpenTransactionModal}/>

      <Dashboard />

      <TransactionModal
        isOpen={isOpenTransactionModal}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
