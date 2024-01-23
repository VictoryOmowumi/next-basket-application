import React from 'react';
import Hero from '@/componenets/Hero';
import BestSeller from '@/componenets/BestSeller';
import FeaturedProducts from '@/componenets/FeaturedProducts';
import FeaturedPosts from '@/componenets/FeaturedPosts';
import Testimonials from '@/componenets/Testimonials';
import Cta from '@/componenets/Cta';
export default function Home() {
  return (
    <main className='h-auto flex flex-col gap-10'>
      <Hero />
      <BestSeller />
      <FeaturedProducts />
      <FeaturedPosts />
      <Testimonials />
      <Cta />
    </main>
  );
}
