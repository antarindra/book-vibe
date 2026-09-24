import { Ibook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

const BookCard = ({ book }: { book: Ibook }) => {
    return (
       <article
                        
                        className="group bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        
                        <div className="relative m-4 h-[250px] rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                            <Image
                                src={book.image}
                                alt={book.bookName}
                                width={170}
                                height={215}
                                unoptimized
                                className="h-[215px] w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                            />

                            
                            <span className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                                {book.category}
                            </span>
                        </div>

                        
                        <div className="px-6 pb-6">
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {book.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            
                            <h3 className="text-xl font-bold text-[#131313] font-serif line-clamp-1 group-hover:text-green-600 transition-colors">
                                {book.bookName}
                            </h3>

                            
                            <p className="mt-2 text-sm text-gray-500">
                                By{" "}
                                <span className="font-medium text-gray-700">
                                    {book.author}
                                </span>
                            </p>

                        
                            <div className="my-5 border-t border-dashed border-gray-200" />

                        
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                                        Published
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-gray-700">
                                        {book.yearOfPublishing}
                                    </p>
                                </div>

                                
                                <div className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-4 w-4 text-amber-500"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.31l-4.117 3.552 1.257 5.315c.271 1.147-.964 2.056-1.96 1.442L12 18.19l-4.627 3.079c-.996.614-2.231-.295-1.96-1.442l1.257-5.315-4.117-3.552c-.887-.765-.415-2.217.749-2.31l5.404-.434 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <span className="text-sm font-bold text-gray-700">
                                        {book.rating.toFixed(1)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
    );
};

export default BookCard;