import { useGlobalState } from "../context/Globalstate";

function IncomeExpenses() {

    const {transactions} = useGlobalState();

    const amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc + item), 0);

    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc + item), 0)*-1;
    
    
  return (
    <div className="text-center">
      <div>
        <h4 className="">Income</h4>
        <p className="text-success">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="text-danger">${expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
