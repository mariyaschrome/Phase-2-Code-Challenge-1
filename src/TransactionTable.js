import React from "react";

// Define the TransactionTable Component
// that takes an array of transactions as a prop
function TransactionTable({ transactions }) {
    return (
        <div className="transaction-table-container">
            {transactions.length > 0 ? (
        <table className="transaction-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {/*Map through transactions array to render each transaction */}
                {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <p>No transactions available</p>
    )}
        </div>
    );
}

export default TransactionTable;
