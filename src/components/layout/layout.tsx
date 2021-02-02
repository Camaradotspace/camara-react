import styled from 'styled-components';

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  background-color: #f2f2f2;
  width: 100%;
  padding: 1rem;
`;

Layout.defaultProps = {};

Layout.displayName = 'Layout';

export default Layout;
