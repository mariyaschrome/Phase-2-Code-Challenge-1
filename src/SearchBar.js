import React, { useState } from "react";


// Define the SearchBar component
function SearchBar({ filterTransactions}) {
    // State to hold the search term
    let [searchTerm, setSearchTerm] = useState('');

    // Function to handle search input change
    function handleChange(event) {
        // Update search term state
        setSearchTerm(event.target.value);
        // Call filterTransactions fuction from parents with new search term
        filterTransactions(event.target.value);
    }

    return (
        <div className="search-bar">
        <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        // Call the handleChange function in the input
        onChange={handleChange}
        />
        <button className="search-button">🔍</button>
        </div>
    );
}

export default SearchBar;