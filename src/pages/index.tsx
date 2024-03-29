import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';
import Services from '../components/Services';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <Services />
    </Layout>
  );
};

export default IndexPage;
