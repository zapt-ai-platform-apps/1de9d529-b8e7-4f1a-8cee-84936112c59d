import React, { useState } from 'react';
import SearchControls from './SearchControls';
import Results from './Results';

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [trade, setTrade] = useState('Finance');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    console.log('Initiating search with:', keyword, trade);
    setLoading(true);
    // In a real app, this is where you'd make an API call
    // For now, we simulate results:
    setTimeout(() => {
      setResults([
        { id: 1, college: 'Sample College 1', course: 'MBA in ' + trade },
        { id: 2, college: 'Sample College 2', course: 'MBA in ' + trade },
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col items-center p-8 space-y-6 bg-gray-100 h-full">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Find Top MBA Colleges and Courses
      </h1>
      <p className="text-gray-600 text-center max-w-xl">
        Search for colleges and specific MBA programs across different trades. Enter your keywords and choose your MBA specialization to get started.
      </p>

      {/* Search controls */}
      <SearchControls
        keyword={keyword}
        setKeyword={setKeyword}
        trade={trade}
        setTrade={setTrade}
        handleSearch={handleSearch}
        loading={loading}
      />

      {/* Results */}
      <Results results={results} />
    </div>
  );
}