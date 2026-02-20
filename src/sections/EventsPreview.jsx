import { events } from '@/data/events';

export const EventsPreview = () => {
  const previewEvents = events.slice(0, 4);

  return (
    <section className='min-h-screen bg-black text-white px-6 md:px-20 py-24'>
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl md:text-6xl font-bold tracking-tight'>Upcoming Events</h2>
        <div className='mt-6 h-[1px] w-32 bg-white/20 mx-auto'></div>
      </div>

      <div className='max-w-5xl mx-auto divide-y divide-white/10'>
        {previewEvents.map((event, index) => (
          <div
            key={index}
            className='group py-10 flex flex-col md:flex-row md:items-center md:justify-between transition duration-300 hover:bg-white/5 px-4 rounded-xl'
          >
            {/* Date */}
            <div className='text-2xl md:text-2xl font-semibold tracking-tight text-white/90'>
              {event.date}
            </div>

            {/* Venue + Address */}
            <div className='mt-4 md:mt-0 text-right'>
              <p className='text-xl font-medium group-hover:text-white transition'>{event.venue}</p>
              <p className='text-white/60 text-sm mt-1'>{event.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
