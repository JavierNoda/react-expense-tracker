import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { GlobalProvider } from "./context/Globalstate";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-6">
            <IncomeExpenses/>
            <Balance />
            <TransactionForm />
          </div>
          <div className="col-6 d-flex flex-column justify-content-between">
            <ExpenseChart />
            <TransactionList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
