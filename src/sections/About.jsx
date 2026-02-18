import backgroundImage from '/oh-stella-hero2.jpg';
// import { useState, useEffect } from 'react';

export const About = () => {
  // const [streams, setStreams] = useState(null);

  // useEffect(() => {
  //   const fetchStreamCount = async () => {
  //     const url =
  //       'https://spotify-stream-count.p.rapidapi.com/v1/spotify/tracks/5zjIStKOUrY4wlMdh1O1l0/streams/current';
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key': 'cbf5dbedecmsh141f82b0fb5cbdbp1a45a4jsnc4623d73bb8a',
  //         'x-rapidapi-host': 'spotify-stream-count.p.rapidapi.com',
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.text();
  //       console.log(result);
  //       // Ensure it’s a number
  //       const numeric = parseInt(result.replace(/\D/g, ''), 10);
  //       if (!isNaN(numeric)) {
  //         setStreams(numeric);
  //       } else {
  //         console.error('Invalid stream count:', result);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching stream count:', error);
  //     }
  //   };

  //   fetchStreamCount();
  // }, []);

  return (
    <section className='relative h-[50vh] flex items-start justify-center overflow-hidden'>
      {/* Background image */}
      <img
        src={backgroundImage}
        alt='OH STELLA Band'
        className='absolute inset-0 w-full h-full object-cover '
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* <div className='relative pt-2 flex gap-6'>
        <h2 className='text-4xl md:text-4xl font-bold text-foreground'>About Us</h2>
      </div> */}
    </section>
  );
};
