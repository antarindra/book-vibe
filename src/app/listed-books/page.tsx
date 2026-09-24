'use client';

import React, { useContext, useState } from 'react';
import { BooksContext } from '@/context/BooksProvider';
import { Ibook } from '@/types/books.type';

const ListedBookCard = ({ book }: { book: Ibook }) => (
  <article className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <img
      src={book.image}
      alt={book.bookName}
      className="h-40 w-28 rounded-lg object-cover"
    />
    <div className="flex flex-1 flex-col justify-center gap-2">
      <h2 className="text-xl font-bold text-[#131313]">{book.bookName}</h2>
      <p className="text-gray-600">By {book.author}</p>
      <p className="text-sm text-gray-500">
        {book.category} · {book.totalPages} pages · Published {book.yearOfPublishing}
      </p>
      <p className="font-semibold text-[#23BE0A]">Rating: {book.rating}</p>
    </div>
  </article>
);

const ListedBooksPage = () => {
  const context = useContext(BooksContext);
  const [activeTab, setActiveTab] = useState<'read' | 'wishlist'>('read');
  const [sortBy, setSortBy] = useState<string>('');

  if (!context) {
    return null;
  }

  const { readBooks, wishlist } = context;

 
  const sortBooks = (books: Ibook[]) => {
    if (!sortBy) return books;
    return [...books].sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'pages') return b.totalPages - a.totalPages;
      if (sortBy === 'year') return b.yearOfPublishing - a.yearOfPublishing;
      return 0;
    });
  };

  const currentBooks = activeTab === 'read' ? sortBooks(readBooks) : sortBooks(wishlist);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
   
      <div className="bg-gray-100/80 rounded-2xl py-8 text-center mb-6">
        <h1 className="text-3xl font-bold text-[#131313]">Listed Books</h1>
      </div>

     
      <div className="flex justify-center mb-10">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#23BE0A] text-white px-5 py-3 rounded-xl font-bold text-sm cursor-pointer outline-none hover:bg-[#1fa908] transition-colors"
        >
          <option value="" disabled className="bg-white text-black">
            Sort By
          </option>
          <option value="rating" className="bg-white text-black">
            Rating
          </option>
          <option value="pages" className="bg-white text-black">
            Number of pages
          </option>
          <option value="year" className="bg-white text-black">
            Publisher year
          </option>
        </select>
      </div>

    
      <div className="flex border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab('read')}
          className={`px-5 py-3 font-medium text-lg border-b-2 transition-all ${
            activeTab === 'read'
              ? 'border-gray-400 text-gray-900 border-t border-x rounded-t-lg bg-white'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Read Books
        </button>
        <button
          onClick={() => setActiveTab('wishlist')}
          className={`px-5 py-3 font-medium text-lg border-b-2 transition-all ${
            activeTab === 'wishlist'
              ? 'border-gray-400 text-gray-900 border-t border-x rounded-t-lg bg-white'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Wishlist Books
        </button>
      </div>

      
      <div className="space-y-6">
        {currentBooks && currentBooks.length > 0 ? (
          currentBooks.map((book: Ibook) => (
            <ListedBookCard key={book.bookId} book={book} />
          ))
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 font-medium">
              No books found in {activeTab === 'read' ? 'Read Books' : 'Wishlist'}!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedBooksPage;