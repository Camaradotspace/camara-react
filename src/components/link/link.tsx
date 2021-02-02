import styled, { css } from 'styled-components';

interface LinkProps {
  /**
   * Color of the link
   */
  color?: string;
  /**
   * Use link as a Button?
   */
  asButton?: boolean;
}

const Link = styled.a<LinkProps>`
  text-decoration: none;
  color: ${(props) => props.color};
  cursor: pointer;
  /* unvisited link */
  &:link {
  }
  /* visited link */
  &:visited {
  }
  /* mouse over link */
  &:hover {
  }
  /* selected link */
  &:active {
  }
  ${(props) =>
    props.asButton &&
    css`
      background-color: ${props.color};
      color: #fff;
      padding: 0.5rem 1rem;
      text-align: center;
      text-decoration: none;
      display: inline-block;
    `}
`;

Link.defaultProps = {
  color: '#4285F4',
  asButton: false,
};

export default Link;
