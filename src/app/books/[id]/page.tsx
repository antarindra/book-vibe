import { Ibook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

interface BooksPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const BooksPage = async ({ params }: BooksPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find((b: Ibook) => String(b.bookId) === String(id)) as Ibook;

  if (!book) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-red-500">Book not found!</h2>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
        <div className="lg:col-span-5 bg-gray-100/80 rounded-3xl p-10 flex items-center justify-center min-h-[500px]">
          <div className="relative w-full h-[400px]">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              unoptimized
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>

        
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
          
            <h1 className="text-4xl font-serif font-bold text-[#131313]">
              {book.bookName}
            </h1>
            <p className="mt-3 text-lg text-gray-600 font-medium">
              By : <span className="text-gray-800">{book.author}</span>
            </p>

            <div className="my-4 border-t border-gray-200" />

            <p className="text-[#131313CC] text-lg font-medium">
              {book.category}
            </p>

            <div className="my-4 border-t border-gray-200" />

            
            <p className="text-gray-600 leading-relaxed">
              <span className="font-bold text-[#131313]">Review : </span>
              {book.review}
            </p>

            
            <div className="flex items-center gap-3 mt-6">
              <span className="font-bold text-[#131313]">Tag</span>
              <div className="flex flex-wrap gap-2">
                {book.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-[#23BE0A]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="my-6 border-t border-gray-200" />

       
            <div className="space-y-3 max-w-xs text-sm">
              <div className="grid grid-cols-2">
                <span className="text-gray-500">Number of Pages:</span>
                <span className="font-bold text-[#131313]">{book.totalPages}</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-gray-500">Publisher:</span>
                <span className="font-bold text-[#131313]">{book.publisher}</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-gray-500">Year of Publishing:</span>
                <span className="font-bold text-[#131313]">{book.yearOfPublishing}</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-gray-500">Rating:</span>
                <span className="font-bold text-[#131313]">{book.rating}</span>
              </div>
            </div>
          </div>

          
          <div className="flex items-center gap-4 mt-8">
            <button className="px-7 py-3 rounded-xl border border-gray-300 bg-white font-bold text-[#131313] hover:bg-gray-50 transition-colors">
              Read
            </button>
            <button className="px-7 py-3 rounded-xl bg-[#59C6D2] hover:bg-[#43aeb9] text-white font-bold transition-colors">
              Wishlist
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BooksPage;