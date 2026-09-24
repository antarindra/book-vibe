'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Ibook } from '@/types/books.type';

const ListedBookCard = ({ book }: { book: Ibook }) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 flex flex-col lg:flex-row gap-6 items-center bg-white">
   
      <div className="w-full lg:w-60 h-56 bg-gray-100 rounded-2xl flex items-center justify-center p-4 relative shrink-0">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          unoptimized
          className="object-contain p-2"
        />
      </div>

     
      <div className="flex-1 w-full">
        <h3 className="text-2xl font-serif font-bold text-[#131313]">
          {book.bookName}
        </h3>
        <p className="text-gray-600 font-medium mt-1">
          By : {book.author}
        </p>

       
        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
          <span className="font-bold text-[#131313]">Tag</span>
          {book.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-green-50 text-[#23BE0A] px-3 py-1 rounded-full font-medium text-xs"
            >
              #{tag}
            </span>
          ))}
          <span className="text-gray-500 flex items-center gap-1 ml-auto lg:ml-4">
            📍 Year of Publishing: {book.yearOfPublishing}
          </span>
        </div>

     
        <div className="flex flex-wrap items-center gap-6 mt-3 text-sm text-gray-500 border-b border-gray-100 pb-4">
          <span className="flex items-center gap-2">
            👥 Publisher: {book.publisher}
          </span>
          <span className="flex items-center gap-2">
            📄 Page: {book.totalPages}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-4">
          <span className="px-4 py-2 rounded-full bg-blue-50 text-[#328EFF] text-sm font-medium">
            Category: {book.category}
          </span>
          <span className="px-4 py-2 rounded-full bg-orange-50 text-[#FFAC33] text-sm font-medium">
            Rating: {book.rating}
          </span>
          <Link
            href={`/books/${book.bookId}`}
            className="px-5 py-2 rounded-full bg-[#23BE0A] hover:bg-[#1fa908] text-white text-sm font-medium transition-colors ml-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;