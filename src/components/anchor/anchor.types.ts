export interface AnchorProps {
  /* link content */
  children: React.ReactNode;

  /* Link URL */
  href: string;

  /* Use Anchor as a Button? */
  asButton?: boolean;

  /* Open link in new tab? */
  asNew?: boolean;
}
