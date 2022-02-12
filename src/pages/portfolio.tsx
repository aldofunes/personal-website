import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Projects from '../components/Projects';

const PortfolioPage: React.FC = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Projects />
  </Layout>
);

export default PortfolioPage;
