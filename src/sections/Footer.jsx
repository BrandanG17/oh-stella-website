import {
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  YouTubeIcon,
} from '@/components/icons/SocialIcons';

export const Footer = () => {
  return (
    <footer className='bg-gray-950 text-white px-6 md:px-20 py-4 border-t border-white/10'>
      <div className='grid md:grid-cols-3 gap-12'>
        {/* Brand */}
        <div className='space-y-6'>
          <h3 className='text-2xl font-bold tracking-tight'>OH STELLA</h3>
          <p className='text-white/60 max-w-sm'>Sana.</p>
        </div>

        {/* Socials */}
        <div className='space-y-6'>
          <h4 className='uppercase text-sm tracking-widest text-white/60'>Follow</h4>

          <div className='flex gap-6'>
            <a
              href='https://www.instagram.com/thisisohstella/'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white/70 transition'
            >
              <InstagramIcon />
            </a>

            <a
              href='https://www.facebook.com/ThisIsOhStella'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white/70 transition'
            >
              <FacebookIcon />
            </a>

            <a
              href='https://www.tiktok.com/@ohstellaband'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white/70 transition'
            >
              <TikTokIcon />
            </a>

            <a
              href='https://www.youtube.com/@ohstella'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white/70 transition'
            >
              <YouTubeIcon />
            </a>
          </div>

          <p className='text-white/50 text-sm'>ohstellaband@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='mt-4 pt-4 border-t border-white/10 text-white/40 text-sm text-center'>
        © {new Date().getFullYear()} OH STELLA. All rights reserved.
      </div>
    </footer>
  );
};
