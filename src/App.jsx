import { Routes, Route } from 'react-router';
import { Navbar } from '@/layout/Navbar';
import { Contact } from '@/pages/Contact';
import { Events } from '@/pages/Events';
import { Home } from '@/pages/Home';
import { Music } from '@/pages/Music';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='oh-stella-website/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/music' element={<Music />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}
