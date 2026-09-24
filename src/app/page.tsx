import HomePageBanner from '@/components/homepage/Banner';
import HomePageBooks from '@/components/homepage/Books';
import React from 'react';

const page = () => {
  return (
    <div>
      <HomePageBanner/>
      <HomePageBooks/>
      
    </div>
  );
};

export default page;