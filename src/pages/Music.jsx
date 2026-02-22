import { motion } from 'framer-motion';
import { featured, singles } from '@/data/music';
import {
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  YouTubeIcon,
} from '@/components/icons/SocialIcons';

export const Music = () => {
  return (
    <section className='bg-black text-white min-h-screen px-6 md:px-20 py-24'>
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-center mb-24'
      >
        <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>Music</h1>
      </motion.div>

      {/* 🔥 Featured Release */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className='mb-32 grid md:grid-cols-2 gap-16 items-center'
      >
        <img src={featured.cover} alt={featured.title} className='w-full rounded-2xl shadow-2xl' />

        <div className='space-y-6'>
          <p className='text-sm uppercase tracking-widest text-white/60'>Latest Release</p>

          <h2 className='text-3xl md:text-5xl font-semibold'>{featured.title}</h2>

          <p className='text-white/60'>{featured.year}</p>

          {/* Buttons */}
          <div className='flex gap-6 pt-4'>
            <a
              href={featured.spotify}
              target='_blank'
              rel='noreferrer'
              className='px-6 py-3 border border-white hover:bg-white hover:text-black transition duration-300'
            >
              Spotify
            </a>

            <a
              href={featured.youtube}
              target='_blank'
              rel='noreferrer'
              className='px-6 py-3 border border-white hover:bg-white hover:text-black transition duration-300'
            >
              YouTube
            </a>
          </div>

          {/* Spotify Embed */}
          <div className='pt-6'>
            <iframe
              data-testid='embed-iframe'
              src='https://open.spotify.com/embed/track/5zjIStKOUrY4wlMdh1O1l0?utm_source=generator'
              width='100%'
              height='152'
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </motion.div>

      {/* 💿 Albums */}
      {/* <SectionGrid title='Albums' items={albums} /> */}

      {/* 🎵 Singles */}
      <SectionGrid title='Singles' items={singles} />
    </section>
  );
};

const SectionGrid = ({ title, items }) => (
  <div className='mb-32'>
    <h3 className='text-2xl md:text-3xl font-semibold mb-12'>{title}</h3>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          viewport={{ once: true }}
          className='group relative'
        >
          <img
            src={item.cover}
            alt={item.title}
            className='w-full aspect-square object-cover rounded-2xl transform group-hover:scale-105 transition duration-500'
          />

          <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-4 rounded-2xl'>
            <p className='text-xl md:text-5xl font-semibold'>{item.title}</p>
            {/* <div className='flex gap-6'>
                <YouTubeIcon size={24} />
              </div> */}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
