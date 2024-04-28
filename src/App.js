import React, { useState } from "react";
import './style.css'
import TransactionTable from "./TransactionTable";
import SearchBar from "./SearchBar";
import NewTransactionForm from "./NewTransactionForm";


// Define the App component
function App() {
  // Set variables for transactions and filtered transactions
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  // Function to add a new transaction
  function addTransactions(transaction) {
    setTransactions([...transactions, transaction]);
    setFilteredTransactions([...transactions, transaction]);
  }

  // Function to filter transactions based on the search term
  function filterTransactions(searchTerm) {
    const filtered = transactions.filter((transaction) =>
  transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
);
 setFilteredTransactions(filtered);
}

return (
  <div>
    {/* Header */}
    <h1>The Royal Bank of Flatiron</h1>

    {/* SearchBar component */}
    <SearchBar filterTransactions={filterTransactions} />

    {/* NewTransactionForm component */}
    <NewTransactionForm addTransaction={addTransactions} />

    {/* TransactionTable component */}
    <TransactionTable transactions={filteredTransactions} />
  </div>
);
}
export default App;
