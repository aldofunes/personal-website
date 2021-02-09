import React from 'react';

import Container from 'components/ui/Container';
import MainNav from './MainNav';
import Logo from './Logo';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header className="bg-gray-100 border-b border-gray-200 -mb-px dark:bg-gray-900 dark:text-white">
    <Container className="items-center">
      <Logo />
      <MainNav />
    </Container>
  </header>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
