'use client'

import React, { useContext } from 'react';
import { BooksContext } from '@/context/BooksProvider'; 
import { Ibook } from '@/types/books.type';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: Ibook }) => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { wishlist, setWishlist, readBooks } = context;

  const handleWishListBook = () => {
   
    const isAlreadyRead = readBooks?.some((b: Ibook) => b.bookId === book.bookId);
    if (isAlreadyRead) {
      toast.error(`You have already read "${book.bookName}"!`);
      return;
    }

    const isAlreadyInWishlist = wishlist?.some((b: Ibook) => b.bookId === book.bookId);
    if (isAlreadyInWishlist) {
      toast.warn(`"${book.bookName}" is already in your wishlist!`);
      return;
    }

    setWishlist((prevWishlist: Ibook[]) => [...prevWishlist, book]);
    toast.success(`Added "${book.bookName}" to your wishlist!`);
  };

  return (
    <button
      className="px-7 py-3 rounded-xl bg-[#59C6D2] text-white font-bold hover:bg-[#43aeb9] transition-colors"
      onClick={handleWishListBook}
    >
      Add to Wishlist
    </button>
  );
};

export default WishListButton;