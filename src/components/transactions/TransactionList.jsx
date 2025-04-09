import { useGlobalState } from "../../context/Globalstate";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useGlobalState();

  if (transactions.length === 0) {
    return (
      <div>
        <h3>No transactions yet</h3>
      </div>
    );
  }

  return (
    <div>
      <h4 className="text-center fw-bold">Transaction History</h4>
      <ul>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
      </ul>
    </div>
  );
}

export default TransactionList;
