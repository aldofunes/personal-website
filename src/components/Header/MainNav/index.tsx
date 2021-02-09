import { Link } from 'gatsby';
import React, { useState } from 'react';

import cx from 'classnames';

interface MainNavItem {
  title: string;
  slug: string;
}

const mainNavItems: MainNavItem[] = [
  {
    title: 'About Me',
    slug: '/'
  },
  {
    title: 'Resume',
    slug: '/resume/'
  },
  {
    title: 'Blog',
    slug: '/blog/'
  },
  {
    title: 'Contact Me',
    slug: '/contact/'
  }
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={cx(
          { hidden: !open, flex: open },
          'sm:flex flex-col sm:flex-row sm:w-auto w-full order-last sm:order-none my-4 sm:my-0'
        )}
      >
        {mainNavItems.map((item, index) => (
          <Link
            className="text-indigo-900 dark:text-indigo-100 border-b border-transparent hover:text-indigo-800 dark:hover:text-indigo-200 ml-0 sm:ml-8 mt-3 sm:mt-0 w-max"
            key={`nav-item-${index}`}
            to={item.slug}
            activeClassName="border-blue-400"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className={cx('flex flex-col items-end justify-center cursor-pointer w-6 h-5 sm:hidden')}
        onClick={() => setOpen(!open)}
      >
        <span
          className={cx('bg-indigo-500 inline-block w-6 h-px transition duration-500 ease-in-out', {
            '-mb-px transform rotate-45': open,
            'mb-1': !open
          })}
        />
        <span
          className={cx('bg-blue-400 inline-block w-8 h-px transition duration-500 ease-in-out', {
            'opacity-0 transform translate-x-5': open,
            'opacity-1': !open
          })}
        />
        <span
          className={cx('bg-indigo-500 inline-block w-6 h-px transition duration-500 ease-in-out', {
            '-mt-px transform -rotate-45': open,
            'mt-1': !open
          })}
        />
      </button>
    </>
  );
};

export default MainNav;
