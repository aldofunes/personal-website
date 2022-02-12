import React from 'react';

import Container from '../ui/Container';

const Footer: React.FC = () => (
  <footer className="border-t border-gray-200 dark:border-gray-600 py-4">
    <Container>
      <div className="flex items-center justify-center w-full">
        <a
          className="text-indigo-900 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-100 mx-2"
          href="https://github.com/aldofunes"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="text-indigo-900 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-100 mx-2"
          href="https://gitlab.com/users/aldofunes"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitLab
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
