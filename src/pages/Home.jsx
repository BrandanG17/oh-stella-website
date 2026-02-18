import { About } from '@/sections/About';
import { Hero } from '@/sections/Hero';
import { TopSong } from '@/sections/TopSong';
import { Events } from '../sections/Events';

export const Home = () => {
  return (
    <main>
      <div className='min-h-screen overflow-x-hidden'>
        <Hero />
        <TopSong />
        <About />
        <Events />
      </div>
    </main>
  );
};
