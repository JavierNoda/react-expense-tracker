import { useState } from 'react';
import { useGlobalState } from '../../context/Globalstate';

function TransactionForm() {
    const { addTransaction } = useGlobalState();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (!description || !amount) {
            return;
        }

        setIsSubmitting(true);

        const transaction = {
            id: window.crypto.randomUUID(),
            description,
            amount: parseFloat(amount)
        };
        
        addTransaction(transaction);
        setDescription('');
        setAmount('');
        setIsSubmitting(false);
    }

    return (
        <div className={`text-center ${isSubmitting ? 'opacity-50' : ''}`}>
            <h3 className="mb-4">Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="d-flex justify-content-center">
                    <input 
                        type="text" 
                        className={`form-control bg-dark text-white mb-3 input-form ${!description ? 'border-danger' : ''}`}
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <input 
                        type="number" 
                        className={`form-control bg-dark text-white mb-3 input-form ${!amount ? 'border-danger' : ''}`}
                        placeholder="Enter amount"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button 
                    type="submit" 
                    className={`btn btn-primary ${isSubmitting ? 'disabled' : ''}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Adding...' : 'Add Transaction'}
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;
