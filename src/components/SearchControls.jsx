import React from 'react';

export default function SearchControls({ keyword, setKeyword, trade, setTrade, handleSearch, loading }) {
  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search for colleges or courses..."
        className="box-border p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 flex-1"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        disabled={loading}
      />
      <select
        className="box-border p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
        value={trade}
        onChange={(e) => setTrade(e.target.value)}
        disabled={loading}
      >
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Operations">Operations</option>
        <option value="IT">Information Technology</option>
      </select>
      <button
        className="cursor-pointer bg-gray-800 text-white px-5 py-3 rounded-md transition-colors hover:bg-gray-700 disabled:opacity-50"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
}