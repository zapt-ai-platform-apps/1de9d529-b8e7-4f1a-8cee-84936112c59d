import React from 'react';

export default function Results({ results }) {
  return (
    <div className="w-full max-w-4xl mt-8">
      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white rounded-md border border-gray-200"
            >
              <h2 className="font-bold text-lg text-gray-800">{item.college}</h2>
              <p className="text-gray-600">{item.course}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}