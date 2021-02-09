import React from 'react';

import cx from 'classnames';

interface Props {
  content: string;
  className?: string;
}

const FormatHtml: React.FC<Props> = ({ content, className }) => (
  <div
    className={cx('format-html', className)}
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

export default FormatHtml;
