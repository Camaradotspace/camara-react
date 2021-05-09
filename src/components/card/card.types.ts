export interface CardProps {
  /* Should the card elevate on the z-index? */
  elevate?: boolean;

  /* Height of the card */
  height?: string;

  /* Width of the card */
  width?: string;

  /* Should card have border around it or be entirely flat? */
  bordered?: boolean;

  /* Content of the card */
  children: React.ReactNode;
}
