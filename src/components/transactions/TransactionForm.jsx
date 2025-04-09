import { useState } from 'react';
import { useGlobalState } from '../../context/Globalstate';

function TransactionForm() {
    const { addTransaction } = useGlobalState();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (!description || !amount) {
            return;
        }

        const transaction = {
            id: window.crypto.randomUUID(),
            description,
            amount: parseFloat(amount)
        };

        console.log(transaction);
        
        addTransaction(transaction);
        setDescription('');
        setAmount('');
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        placeholder="Enter amount"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
}

export default TransactionForm;
