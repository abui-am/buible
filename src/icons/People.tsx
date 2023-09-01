import * as React from 'react';
const People = (props: React.JSX.IntrinsicElements['svg']) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M16.5 6.6c0-2.4-2-4.4-4.5-4.4s-4.5 2-4.5 4.4S9.5 11 12 11s4.5-2 4.5-4.4zM4.6 16.3l-.5 1.9c-.3.9-.1 1.9.5 2.7C5.2 21.6 6 22 7 22h10c.9 0 1.8-.4 2.3-1.2.6-.8.8-1.8.5-2.7l-.5-1.9c-.6-2.5-2.8-4.2-5.3-4.2h-4c-2.5 0-4.7 1.7-5.4 4.3z'
    />
  </svg>
);
export default People;
