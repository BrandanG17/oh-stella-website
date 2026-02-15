import { useState, useEffect } from 'react';

export const About = () => {
  const [streams, setStreams] = useState(null);

  useEffect(() => {
    const fetchStreamCount = async () => {
      const url =
        'https://spotify-stream-count.p.rapidapi.com/v1/spotify/tracks/5zjIStKOUrY4wlMdh1O1l0/streams/current';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'cbf5dbedecmsh141f82b0fb5cbdbp1a45a4jsnc4623d73bb8a',
          'x-rapidapi-host': 'spotify-stream-count.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();

        // Ensure it’s a number
        const numeric = parseInt(result.replace(/\D/g, ''), 10);
        if (!isNaN(numeric)) {
          setStreams(numeric);
        } else {
          console.error('Invalid stream count:', result);
        }
      } catch (error) {
        console.error('Error fetching stream count:', error);
      }
    };

    fetchStreamCount();
  }, []);

  return (
    <section className='relative bg-[#121218] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10'>
      {/* Left: YouTube iframe */}
      <div className='w-full md:w-1/2'>
        <iframe
          width='100%'
          height='200'
          src='https://www.youtube.com/embed/bnQWVZy2V3k?start=127&autoplay=1'
          title='Dito Ka Lang'
          allow='autoplay; encrypted-media'
          className='rounded-md mt-4'
        ></iframe>
      </div>

      {/* Right: Caption + Stats */}
      <div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6'>
        <h2 className='text-3xl md:text-5xl font-bold text-white'>
          <span className='whisper-regular'>Dito ka lang,</span> Now Streaming!
        </h2>
        <p className='text-xl md:text-2xl text-white/80'>
          Total Streams:
          <span className='ml-2 text-[#51bb20] font-semibold'>
            {streams !== null ? streams.toLocaleString() : '...'}
          </span>
        </p>

        <a
          href='https://open.spotify.com/track/7dsImih2L25fa6qjNphBI7'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 bg-[#51bb20] text-white px-6 py-3 rounded-md font-semibold hover:bg-white transition'
        >
          Listen on Spotify
        </a>
      </div>
    </section>
  );
};
