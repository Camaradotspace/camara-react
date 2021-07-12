import React from 'react';
import { ITheme } from '.';

export const Refresh = ({ theme }: ITheme) => {
  return (
    <svg
      width="11"
      height="14"
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.2832 6.61523C5.42969 6.61523 5.54102 6.56836 5.62305 6.48047L8.03711 4.05469C8.14258 3.95508 8.18359 3.83789 8.18359 3.70312C8.18359 3.57422 8.13086 3.44531 8.03711 3.35156L5.62305 0.902344C5.54102 0.808594 5.42383 0.761719 5.2832 0.761719C5.01953 0.761719 4.82031 0.972656 4.82031 1.24219C4.82031 1.36523 4.86719 1.48242 4.94922 1.57617L6.51367 3.11133C6.17969 3.05273 5.83984 3.01758 5.5 3.01758C2.62891 3.01758 0.320312 5.32031 0.320312 8.19141C0.320312 11.0684 2.62891 13.377 5.5 13.377C8.37109 13.377 10.6738 11.0684 10.6738 8.19141C10.6738 7.91016 10.4746 7.70508 10.1875 7.70508C9.91211 7.70508 9.73047 7.91016 9.73047 8.19141C9.73047 10.5469 7.84961 12.4336 5.5 12.4336C3.15039 12.4336 1.26367 10.5469 1.26367 8.19141C1.26367 5.8418 3.15039 3.96094 5.5 3.96094C5.94531 3.96094 6.35547 3.99609 6.70703 4.07227L4.95508 5.8125C4.86719 5.90625 4.82031 6.02344 4.82031 6.14648C4.82031 6.41602 5.01953 6.61523 5.2832 6.61523Z"
        fill={theme === 'dark' ? '#AEB4BA' : '#797979'}
      />
    </svg>
  );
};