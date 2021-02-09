import React from 'react';

import cx from 'classnames';

interface Props {
  children: React.ReactNode;
  primary?: boolean;
  block?: boolean;
}

const Button: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  primary = false,
  block = false,
  children
}) => (
  <button
    className={cx('py-2 px-8 rounded-full border border-blue-300 text-indigo-900 outline-none', {
      'bg-blue-300': primary,
      'text-indigo-600': !primary,
      'w-full': block
    })}
  >
    {children}
  </button>
);

export default Button;
