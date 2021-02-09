import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, content, linkTo, linkText }) => (
  <section className="bg-gray-100 dark:bg-gray-800 border-b border-indigo-100 dark:border-gray-600">
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <p className="mb-8">{content}</p>
      <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
    </Container>
  </section>
);

export default Banner;
