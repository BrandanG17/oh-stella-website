/* eslint-disable no-unused-vars */
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
              href='https://open.spotify.com/track/5RrDA3olSgav14H16vEmcg?si=6b89b7e143744365'
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center justify-center gap-2 
             bg-neutral-900 hover:bg-[#1DB954]
             text-white hover:text-black 
             transition-all duration-300 
             py-3 px-4 rounded-lg text-sm font-medium'
            >
              <svg
                role='img'
                viewBox='0 0 24 24'
                className='w-5 h-5 fill-current transition-colors duration-300'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Spotify</title>
                <path d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' />{' '}
              </svg>
              Spotify
            </a>
            <a
              href='https://youtu.be/1hMwLwl4tYg?si=FyosQhu7gP43mZjR'
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center justify-center gap-2 
             bg-neutral-900 hover:bg-[#FF0000]
             text-white hover:text-black 
             transition-all duration-300 
             py-3 px-4 rounded-lg text-sm font-medium'
            >
              <svg
                role='img'
                viewBox='0 0 24 24'
                className='w-5 h-5 fill-current transition-colors duration-300'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Youtube</title>
                <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />{' '}
              </svg>
              Youtube
            </a>
          </div>

          {/* Spotify Embed */}
          <div className='pt-6'>
            <iframe
              data-testid='embed-iframe'
              src='https://open.spotify.com/embed/track/5RrDA3olSgav14H16vEmcg?utm_source=generator&theme=0'
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
          className='relative rounded-2xl overflow-hidden'
        >
          {/* Hidden checkbox to track tap */}
          <input type='checkbox' className='peer hidden' id={`card-${index}`} />

          {/* Card label acts as clickable area */}
          <label htmlFor={`card-${index}`} className='block cursor-pointer group'>
            <img
              src={item.cover}
              alt={item.title}
              className='w-full aspect-square object-cover rounded-2xl transform transition duration-500 group-hover:scale-105 peer-checked:scale-105'
            />

            {/* Overlay */}
            <div
              className='absolute inset-0 bg-black/70 flex items-center justify-center rounded-2xl
                        opacity-0 transition duration-500
                        group-hover:opacity-100
                        peer-checked:opacity-100'
            >
              <p className='text-xl md:text-5xl font-semibold text-center'>{item.title}</p>
            </div>
          </label>
        </motion.div>
      ))}
    </div>
  </div>
);
