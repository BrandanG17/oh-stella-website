import { About } from '@/sections/About';
import { Hero } from '@/sections/Hero';
import { TopSong } from '@/sections/TopSong';
import { EventsPreview } from '@/sections/EventsPreview';

export const Home = () => {
  return (
    <main>
      <div className='min-h-screen overflow-x-hidden'>
        <Hero />
        <TopSong />
        <About />
        <EventsPreview />
      </div>
    </main>
  );
};
