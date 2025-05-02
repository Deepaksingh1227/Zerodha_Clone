import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchResults() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("q");

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (searchTerm) {
            fetchSearchResults(searchTerm);
        }
    }, [searchTerm]);

    const fetchSearchResults = async (query) => {
        setLoading(true);
        setError(null);
    
        try {
            const response = await fetch(`http://localhost:8080/api/search?q=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setResults(data.results || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Search Results</h1>
            {searchTerm ? (
                <p>Showing results for: <strong>{searchTerm}</strong></p>
            ) : (
                <p>No search term provided.</p>
            )}

            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">Error: {error}</p>}

            {!loading && !error && results.length === 0 && (
                <p>No results found for "{searchTerm}".</p>
            )}

            {!loading && !error && results.length > 0 && (
                <ul className="list-group">
                    {results.map((result, index) => (
                        <li key={index} className="list-group-item">
                            <h5>{result.title}</h5>
                            <p>{result.description}</p>
                            <a href={result.link} target="_blank" rel="noopener noreferrer">
                                View More
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchResults;