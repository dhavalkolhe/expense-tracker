import Header from './components/Header.js'
import Balance from './components/Balance.js'
import IncomeExpenses from './components/IncomeExpenses.js'
import TransactionList from './components/TransactionList.js'
import AddTransactionList from './components/AddTransactionList.js'
import './App.css';

import GlobalProvider from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
