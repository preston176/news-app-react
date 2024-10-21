import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get('query');

  // Fetch results based on query (dummy example)
  const fetchResults = async () => {
    if (query) {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=YOUR_API_KEY`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Log the entire response
        setResults(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };
  
  React.useEffect(() => {
    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-2xl">Search Results for: {query}</h2>
      {/* Display search results here */}
    </div>
  );
};

export default SearchResults;
