export const Hero = () => {
  return (
    <section className='relative min-h-screen flex flex-col md:flex-row items-center bg-[#1B1D3C] text-white px-6 md:px-20 overflow-hidden'>
      {/* Bg */}
      <div className='absolute inset-0'>
        <img src='oh-stella-hero2.jpg' alt='Hero image' className='w-full h-full object-cover' />
      </div>

      {/* Left: Band Photo */}
      {/* <div className='md:w-1/2 w-full h-96 md:h-auto relative mb-10 md:mb-0'>
        <img
          src='/oh-stella-hero2.jpg'
          alt='Oh Stella Band'
          className='w-1/2 h-full object-cover rounded-xl shadow-2xl'
        />
      </div> */}

      {/* Right: Info + Music + Stats */}
      <div className='md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left gap-6'>
        {/* Band Name and Tagline */}
        <h1 className='text-5xl md:text-6xl font-bold text-primary'>Dito ka lang!</h1>
        <p className='text-white/80 text-lg md:text-xl'>oh stella!</p>

        {/* CTA Buttons */}
        {/* <div className='flex gap-4 mt-4'>
          <a
            href='#music'
            className='bg-primary text-[#1B1D3C] px-6 py-3 rounded-md font-semibold hover:bg-white transition'
          >
            Listen Now
          </a>
          <a
            href='#events'
            className='border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#1B1D3C] transition'
          >
            View Events
          </a>
        </div> */}

        {/* Embedded Player */}
        <div className='mt-6 w-full max-w-md'>
          {/* Spotify Embed Example */}
          {/* <iframe
            src='https://open.spotify.com/embed/track/YOUR_TRACK_ID?utm_source=generator&theme=0'
            width='100%'
            height='80'
            frameBorder='0'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
            title='Spotify Player'
          ></iframe> */}

          {/* Or YouTube Embed Example */}
          {/* <iframe
            width='100%'
            height='200'
            src='https://www.youtube.com/embed/bnQWVZy2V3k?start=127&autoplay=1'
            title='Dito Ka Lang'
            allow='autoplay; encrypted-media'
            className='rounded-md mt-4'
          ></iframe> */}
        </div>

        {/* Stats */}
        <div className='mt-4 flex items-center gap-4 text-white/90'>
          <span className='text-xl font-semibold'>1.2M</span>
          <span className='uppercase tracking-wide text-sm'>Monthly Stream Listeners</span>
        </div>
      </div>
    </section>
  );
};
