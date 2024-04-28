import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

function NewTransactionForm({ addTransaction }) {
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Create a new transaction object
        const newTransaction = {
            date: date.toDateString(),
            description,
            category,
            amount
        };
        // Call addTransaction function passed from parent
        addTransaction(newTransaction);
        // Clear form fields
        setDescription('');
        setCategory('');
        setAmount('');
    };

    return (
    <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
            <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="MMMM d, yyyy"
            placeholderText="Date"
            className="date-picker"
            popperPlacement="top-start"
           />

            <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            />
          
            <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            />

           <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            />
            </div>

            <button type="submit">Add Transaction</button>

        </form>
        
    );
}

export default NewTransactionForm;