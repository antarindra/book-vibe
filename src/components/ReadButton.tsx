"use client";

import React, { useContext } from 'react';
import { BooksContext } from '@/context/BooksProvider'; 
import { Ibook } from '@/types/books.type';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: Ibook }) => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { readBooks, setReadBooks } = context;

  const handleReadBook = () => {
    const isAlreadyExist = readBooks?.some((b: Ibook) => b.bookId === book.bookId);

    if (isAlreadyExist) {
      toast.error(`"${book.bookName}" is already in your read list!`);
      return;
    }

    setReadBooks((prevBooks: Ibook[]) => [...prevBooks, book]);
    toast.success(`You have read "${book.bookName}"!`);
  };

  return (
    <button
      className="px-7 py-3 rounded-xl border border-gray-300 bg-white font-bold text-[#131313] hover:bg-gray-50 transition-colors"
      onClick={handleReadBook}
    >
      Read
    </button>
  );
};

export default ReadButton;