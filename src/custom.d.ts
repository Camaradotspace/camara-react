import { CSSProperties } from 'react';
declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProperties;
  }
}
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProperties;
    }
  }
}
