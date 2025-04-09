import { GlobalProvider } from "./context/Globalstate";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen">
        <Header />
        <IncomeExpenses />
        <Balance />
        <TransactionForm />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
