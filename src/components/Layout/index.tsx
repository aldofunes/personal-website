import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';

import Header from '../Header';
import Footer from '../Footer';

import 'assets/styles/global.css';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <AnimatePresence exitBeforeEnter>
      <main className="flex flex-col min-h-screen">
        <Header siteTitle={data.site.siteMetadata.title} />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          {children}
          <Footer />
        </motion.div>
      </main>
    </AnimatePresence>
  );
};

export default Layout;
