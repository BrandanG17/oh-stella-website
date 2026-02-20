export const InstagramIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='2' width='20' height='20' rx='5' />
    <circle cx='12' cy='12' r='4' />
    <circle cx='18' cy='6' r='1' />
  </svg>
);

export const FacebookIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
    <path d='M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.5c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.2c-1.2 0-1.6.7-1.6 1.5V12H16l-.4 3h-2.3v7A10 10 0 0 0 22 12z' />
  </svg>
);

export const TikTokIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
    <path d='M12.7 2v12.2a3.2 3.2 0 1 1-3-3.2v-2.2a5.5 5.5 0 1 0 5.5 5.5V8.5a6.5 6.5 0 0 0 3.8 1.2V7.4a4.3 4.3 0 0 1-3.8-3.8H12.7z' />
  </svg>
);

export const YouTubeIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
    <path d='M23 12s0-3.5-.5-5a3.1 3.1 0 0 0-2.2-2.2C18.8 4 12 4 12 4s-6.8 0-8.3.8A3.1 3.1 0 0 0 1.5 7C1 8.5 1 12 1 12s0 3.5.5 5a3.1 3.1 0 0 0 2.2 2.2C5.2 20 12 20 12 20s6.8 0 8.3-.8a3.1 3.1 0 0 0 2.2-2.2c.5-1.5.5-5 .5-5z' />
    <polygon points='9.5 15.5 15.5 12 9.5 8.5 9.5 15.5' fill='black' />
  </svg>
);
