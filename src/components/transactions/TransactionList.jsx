import { useGlobalState } from "../../context/Globalstate";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  if (transactions.length === 0) {
    return (
      <div>
        <h3>No transactions yet</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Transaction History</h3>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction-item">
          <p>{transaction.description}</p>
          <span>${transaction.amount}</span>
          <button onClick={() => deleteTransaction(transaction.id)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
