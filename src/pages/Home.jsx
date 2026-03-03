import { About } from '@/sections/About';
import { Hero } from '@/sections/Hero';
import { TopSong } from '@/sections/TopSong';
import { EventsPreview } from '@/sections/EventsPreview';
import { UpcomingTeaser } from '@/sections/UpcomingTeaser';
import { Footer } from '@/sections/Footer';

export const Home = () => {
  return (
    <main>
      <div className='min-h-screen overflow-x-hidden'>
        <UpcomingTeaser />
        <TopSong />
        {/* <Hero /> */}
        <EventsPreview />
        <About />
        <Footer />
      </div>
    </main>
  );
};
