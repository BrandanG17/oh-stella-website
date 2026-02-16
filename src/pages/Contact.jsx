import { Mail, Phone, Instagram, Facebook, Twitter, Music, Youtube } from 'lucide-react';
import contactImage from '/oh-stella-hero.jpg';
export const Contact = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-[#1B1D3C] via-[#23264A] to-[#2A2D42] text-white flex items-center justify-center px-6 py-16'>
      <div className='max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center'>
        {/* LEFT SIDE — BAND IMAGE */}
        <div className='relative group'>
          <img
            src={contactImage} // replace with your image path
            alt='Oh Stella Band'
            className='rounded-2xl shadow-2xl object-cover w-full h-[400px] transition duration-500 group-hover:scale-105'
          />
        </div>

        {/* RIGHT SIDE — CONTACT INFO */}
        <div className='bg-[#2A2D42]/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10'>
          <h1 className='text-4xl md:text-5xl font-bold text-primary mb-8'>Contact Us</h1>

          <div className='space-y-6 text-lg'>
            {/* Email */}
            <a className='flex items-center gap-4 hover:text-primary transition'>
              <Mail size={22} />
              ohstellaband@gmail.com
            </a>

            {/* Phone */}
            <a className='flex items-center gap-4 hover:text-primary transition'>
              <Phone size={22} />
              +63 912 345 6789
            </a>

            {/* Socials */}
            <div className='pt-6 border-t border-white/20 space-y-4'>
              <a
                href='https://www.instagram.com/thisisohstella/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 hover:text-primary hover:translate-x-1 transition duration-300'
              >
                <Instagram size={22} />
                Instagram
              </a>

              <a
                href='https://www.facebook.com/ThisIsOhStella'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 hover:text-primary hover:translate-x-1 transition duration-300'
              >
                <Facebook size={22} />
                Facebook
              </a>

              <a
                href='https://www.tiktok.com/@ohstellaband'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 hover:text-primary hover:translate-x-1 transition duration-300'
              >
                <Music size={22} />
                TikTok
              </a>

              <a
                href='https://www.youtube.com/@ohstella'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 hover:text-primary hover:translate-x-1 transition duration-300'
              >
                <Youtube size={22} />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
