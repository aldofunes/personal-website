import React from 'react';

interface Props {
  title: string;
  percentage: number;
}

const ProgressBar: React.FC<Props> = ({ title, percentage }) => (
  <div className="p-3">
    <div className="w-full flex justify-between">
      <h3 className="font-semibold">{title}</h3>
      <h3 className="font-semibold">{percentage}%</h3>
    </div>
    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden mt-1">
      <div className="h-2 bg-blue-400" style={{ width: `${percentage}%` }} />
    </div>
  </div>
);

export default ProgressBar;
