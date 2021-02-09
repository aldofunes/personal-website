import React from 'react';

import cx from 'classnames';

interface Props {
  children: React.ReactNode;
  section?: boolean;
  className?: string;
}

const Container: React.FC<Props> = ({ className, section = false, children }) => (
  <div className={cx(className, 'flex flex-wrap max-w-screen-md w-full mx-auto p-5', { 'py-8 sm:py-16': section })}>
    {children}
  </div>
);

export default Container;
