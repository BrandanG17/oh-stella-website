export const UpcomingTeaser = () => {
  return (
    <section className='relative min-h-[50vh] flex items-center justify-center text-white overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-black'>
        <div
          className='absolute inset-0 bg-cover bg-center opacity-90'
          style={{
            backgroundImage: "url('/album-covers/sana.jpg')",
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black' />
      </div>
    </section>
  );
};
