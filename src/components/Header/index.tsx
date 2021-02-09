import React from 'react';

import Container from 'components/ui/Container';
import MainNav from './MainNav';
import Logo from './Logo';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 -mb-px dark:text-white">
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
