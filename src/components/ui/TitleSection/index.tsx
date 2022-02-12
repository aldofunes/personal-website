import React from 'react';

import cx from 'classnames';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const TitleSection: React.FC<Props> = ({ center = false, title, subtitle }) => (
  <div className="flex flex-col w-full">
    {subtitle && (
      <h4 className={cx('text-xs text-indigo-600 dark:text-indigo-400 w-full text-left', { 'text-center': center })}>
        {subtitle}
      </h4>
    )}
    <h2 className={cx('uppercase mb-4 text-lg font-bold w-full text-left', { 'text-center': center })}>{title}</h2>
    <div className={cx('relative w-2 h-8 mb-6 -mt-2', { 'mx-auto': center })}>
      <span className="bg-indigo-500 h-full w-px absolute left-0" />
      <span className="bg-blue-400 h-6 w-px absolute ml-1" />
    </div>
  </div>
);

export default TitleSection;
