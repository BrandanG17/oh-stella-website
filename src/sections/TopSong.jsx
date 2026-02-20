export const TopSong = () => {
  return (
    <section className='relative py-14 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10  bg-black'>
      {/* Left: YouTube iframe */}
      <div className='w-full md:w-1/4'>
        <iframe
          width='100%'
          height='200'
          src='https://www.youtube.com/embed/bnQWVZy2V3k?start=127&autoplay=1'
          title='Dito Ka Lang'
          allow='autoplay; encrypted-media'
          className='rounded-md mt-4'
        ></iframe>
      </div>

      {/* Right: Caption/Title */}
      <div className='w-full md:w-3/4 flex flex-col items-center md:items-start text-center md:text-left gap-1'>
        <h2 className='mb-2 text-3xl md:text-6xl font-bold text-foreground'>Now Streaming!</h2>

        <p className='text-6xl text-foreground whisper-regular'>Dito ka lang</p>
        <p className='text-l md:text-xl text-foreground poppins-regular mt-6'>
          Total Streams:
          <span className='ml-2 text-[#51bb20] font-semibold'>80,330</span>
        </p>

        {/* <a
          href='https://open.spotify.com/track/5zjIStKOUrY4wlMdh1O1l0?si=f9621dfed96f459e'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 bg-[#51bb20] text-white px-6 py-3 rounded-md font-semibold hover:bg-white transition poppins-regular'
        >
          Listen on Spotify
        </a> */}
      </div>
    </section>
  );
};
