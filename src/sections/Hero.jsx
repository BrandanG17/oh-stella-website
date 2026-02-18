import heroImage from '/hero3.jpg';

export const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background image */}
      <img
        src={heroImage}
        alt='OH STELLA Band'
        className='absolute inset-0 w-full h-full object-cover'
      />

      {/* Dark overlay */}
      {/* <div className='absolute inset-0 bg-black/40 backdrop-blur-sm'></div> */}
    </section>
  );
};
