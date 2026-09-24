"use client";

import { Ibook } from '@/types/books.type';
import React, { createContext, useState, ReactNode, useContext } from 'react';


export interface BooksContextType {
  readBooks: Ibook[];
  setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>;
  wishlist: Ibook[];
  setWishlist: React.Dispatch<React.SetStateAction<Ibook[]>>;
}


export const BooksContext = createContext<BooksContextType | null>(null);

interface BooksProviderProps {
  children: ReactNode;
}

const BooksProvider = ({ children }: BooksProviderProps) => {
  const [readBooks, setReadBooks] = useState<Ibook[]>([]);
  const [wishlist, setWishlist] = useState<Ibook[]>([]);

  const shareData: BooksContextType = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={shareData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;


export const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }
  return context;
};