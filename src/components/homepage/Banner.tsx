import Image from 'next/image';
import React from 'react';
import Banner from '@/assets/hero_img.jpg';

const HomePageBanner = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 my-6">
      <div className="bg-[#1313130D] rounded-3xl p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
     
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#131313] leading-tight font-serif">
            Books to freshen up <br className="hidden sm:inline" /> your bookshelf
          </h1>
          <div>
            <button className="bg-[#23BE0A] hover:bg-[#1ea209] text-white font-bold text-lg px-7 py-4 rounded-xl transition-colors">
              View The List
            </button>
          </div>
        </div>

       
        <div className="flex justify-center md:justify-end">
          <Image 
            src={Banner} 
            alt="Book Banner" 
            width={320}
            height={400}
            className="rounded-2xl object-cover shadow-sm"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default HomePageBanner;