
import React from "react";
import Image from "next/image";
import BookCard from "@/components/shared/BookCard";
import { Ibook } from "@/types/books.type";

const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    return res.json();
};

const HomePageBooks = async () => {
    const booksData = await getBooks();

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            
            <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold tracking-wider uppercase text-green-600 mb-3">
                    Explore All Books
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-[#131313] font-serif">
                    All Books
                </h2>

                <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-base md:text-lg">
                    Discover timeless classics, exciting adventures, and
                    inspiring stories from our curated book collection.
                </p>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {booksData.map((book: Ibook) => (
                    <BookCard key={book.bookId} book={book} />
                ))}
            </div>
        </section>
    );
};

export default HomePageBooks;

