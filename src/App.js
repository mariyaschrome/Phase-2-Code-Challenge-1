import React, { useState } from "react";
import './style.css'
import TransactionTable from "./TransactionTable";
import SearchBar from "./SearchBar";
import NewTransactionForm from "./NewTransactionForm";


// Define the App component
function App() {
  // Define an array of sample transactions
  const initialTransactions = [
    { date: "Wed Apr 01 2020", description: "Groceries", category: "Food", amount: 50},
    { date: "Thur Apr 02 2020", description: "Movies", category: "Entertainment", amount: 600},
    { date: "Fri Apr 03  2020", description: "Fuel", category: "Transportation", amount: 5000},
    { date: "Sat Apr 04 2020", description: "Phone Bill", category: "Utilities", amount: 80},
  ]
  // Set variables for transactions and filtered transactions
  const [transactions, setTransactions] = useState(initialTransactions);
  const [filteredTransactions, setFilteredTransactions] = useState(initialTransactions);

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

console.log(initialTransactions);
console.log(transactions);

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
