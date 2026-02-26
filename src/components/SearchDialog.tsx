'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { searchItems } from '@/data/searchIndex';

export default function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ReturnType<typeof searchItems>>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle search
  useEffect(() => {
    if (query.trim()) {
      setResults(searchItems(query));
    } else {
      setResults([]);
    }
  }, [query]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      searchInputRef.current?.focus();
    }

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('');
  };

  return (
    <>
      {/* Search Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hover:text-blue-400 transition px-3 py-2 flex items-center justify-center"
        title="Search products and services"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      {/* Search Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 flex items-start justify-center pt-20"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-2xl mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="border-b border-gray-700 p-4">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products, services, brands..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:border-blue-400 text-lg"
              />
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {query.trim() === '' ? (
                <div className="p-8 text-center text-gray-500">
                  <p>Start typing to search...</p>
                </div>
              ) : results.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <p>No results found for "{query}"</p>
                </div>
              ) : (
                <div>
                  {/* Group by Category */}
                  {Object.entries(
                    results.reduce(
                      (acc, item) => {
                        if (!acc[item.category]) acc[item.category] = [];
                        acc[item.category].push(item);
                        return acc;
                      },
                      {} as Record<string, typeof results>
                    )
                  ).map(([category, items]) => (
                    <div key={category}>
                      <div className="px-4 pt-4 pb-2 text-xs font-semibold text-gray-500 uppercase">
                        {category}
                      </div>
                      {items.map((item) => (
                        <Link
                          key={item.id}
                          href={item.url}
                          onClick={handleResultClick}
                          className="block px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800 last:border-b-0"
                        >
                          <div className="font-semibold text-white">{item.title}</div>
                          <div className="text-sm text-gray-400">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {query.trim() !== '' && results.length > 0 && (
              <div className="border-t border-gray-700 px-4 py-3 bg-gray-950 text-xs text-gray-500 flex justify-between">
                <span>{results.length} result{results.length !== 1 ? 's' : ''} found</span>
                <span>Press <kbd className="px-2 py-1 bg-gray-800 rounded">ESC</kbd> to close</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
