import React, { useState } from 'react';

function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState("");

    function handleSearchQueryChange(event) {
        setSearchQuery(event.target.value);
    }

    function handleSearchSubmit(event) {
        event.preventDefault();
        props.onSearch(searchQuery);
    }

    return (
        <form onSubmit={handleSearchSubmit}>
            <input type='text' value={searchQuery} onChange={handleSearchQueryChange} />
            <button type='submit'>Search</button>
        </form>

    );
}

export default SearchBar