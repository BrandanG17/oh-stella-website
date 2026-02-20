import { events } from '@/data/events';

export const Events = () => {
  return (
    <div className='min-h-screen bg-black text-white px-6 md:px-20 py-24'>
      <div className='text-center mb-20'>
        <h2 className='text-4xl md:text-6xl font-bold tracking-tight'>Upcoming Events</h2>
        <div className='mt-6 h-[1px] w-32 bg-white/20 mx-auto'></div>
      </div>

      <div className='max-w-5xl mx-auto divide-y divide-white/10'>
        {events.map((event, index) => (
          <div
            key={index}
            className='py-10 flex justify-between transition duration-300 hover:bg-white/5 px-4 rounded-xl'
          >
            {/* Date */}
            <div className='text-2xl font-semibold'>{event.date}</div>

            {/* Venue + Address */}
            <div className='text-right'>
              <p className='text-xl group-hover:text-white transition'>{event.venue}</p>
              <p className='text-white/60 text-sm'>{event.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
