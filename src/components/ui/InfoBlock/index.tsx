import React from 'react';

import cx from 'classnames';
import Icon, { IconProps } from '../Icon';

interface Props {
  title: string;
  content: React.ReactNode;
  icon: IconProps;
  url?: string;
  center?: boolean;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, url, center = false }) => (
  <div
    className={cx('flex flex-col my-4 mx-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300', {
      'items-center': center
    })}
  >
    <span className="flex items-center justify-center w-10 h-10 text-indigo-500 dark:text-indigo-300 border border-blue-400 dark:border-blue-600 rounded-full mb-2">
      <Icon icon={icon} />
    </span>
    <div className={cx({ 'text-center': center })}>
      <h3 className="text-md mt-1 font-semibold">{title}</h3>
      {url ? (
        <a href={url}>
          <p className="mt-1">{content}</p>
        </a>
      ) : (
        <p className="mt-1">{content}</p>
      )}
    </div>
  </div>
);

export default InfoBlock;
