import { useGlobalState } from "../context/Globalstate";
import TransactionForm from "./transactions/TransactionForm";

function Balance() {
  const {transactions} = useGlobalState();

  const amount = transactions.map(transaction => transaction.amount);

  const total = amount.reduce((acc, item) => (acc + item), 0);

  return (
    <div className="balance-container row text-center">
      <h3 className="">Your Balance</h3>
      <h1 className="">{total}$</h1>
    </div>
  );
}

export default Balance;
