import { useGlobalState } from "../../context/Globalstate";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li
      key={transaction.id}
      className="bg-dark p-2 rounded-4 mb-2 list-group-item w-100"
    >
      <div className="d-flex justify-content-between align-items-center p-1 row">
        <span className="px-2 col-6">{transaction.description}</span>
        <div className="col-5 bg-black bg-opacity-25 rounded-4 d-flex justify-content-between align-items-center mx-1">
        <span className="w-25">{transaction.amount}$</span>
        <button
          className="btn btn-danger flex m-2"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
        </div>
      </div>
    </li>
  );
}

export default TransactionItem;
