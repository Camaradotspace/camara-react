import styled, { css } from 'styled-components';

export interface CardProps {
  /**
   * Padding top
   */
  pt?: number;
  /**
   * Padding bottom
   */
  pb?: number;
  /**
   * Padding left
   */
  pl?: number;
  /**
   * Padding right
   */
  pr?: number;
  /**
   * Padding horizontal axis
   */
  px?: number;
  /**
   * Padding vertical axis
   */
  py?: number;
  /**
   * Should the card elevate on the z-index?
   */
  elevate?: boolean;
  /**
   * Height of the card
   */
  height?: number;
  /**
   * Width of the card
   */
  width?: number;
}

export const Card = styled.div<CardProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: #fff;
  border: 1px solid #dadce0;
  border-radius: 8px;
  padding-top: ${(props) => props.pt}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
  padding: ${(props) => props.py}px ${(props) => props.px}px;
  ${(props) =>
    props.elevate &&
    css`
      box-shadow: 2px 4px 8px #dadce0;
    `}
`;

Card.defaultProps = {
  height: 400,
  width: 600,
  elevate: false,
};
