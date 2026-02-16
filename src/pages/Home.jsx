import { About } from '../sections/About';
import { Hero } from '../sections/Hero';

export const Home = () => {
  return (
    <main>
      <div className='min-h-screen overflow-x-hidden'>
        <Hero />
        <About />
      </div>
    </main>
  );
};
