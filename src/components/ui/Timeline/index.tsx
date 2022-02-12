import React from 'react';

interface Props {
  title: string;
  subtitles: string[];
  content: React.ReactNode;
  startDate: string;
  endDate: string;
}

const Timeline: React.FC<Props> = ({ title, subtitles, content, startDate, endDate }) => (
  <div className="flex flex-col sm:flex-row w-full p-4 relative border-l border-indigo-200 last:pb-0">
    <span className="w-4 h-4 border border-indigo-200 bg-indigo-100 rounded-full absolute -left-2 top-4" />

    <div className="w-full sm:w-1/3">
      <div className="text-xs border  border-blue-400 rounded-full px-2 w-max">
        {startDate} - {endDate}
      </div>

      <div className="font-semibold mt-3">{title}</div>

      <div className="pr-3">
        {subtitles.map((subtitle) => (
          <div key={subtitle} className="text-xs">
            {subtitle}
          </div>
        ))}
      </div>
    </div>

    <div className="w-full sm:w-2/3 mt-4 sm:mt-0">{content}</div>
  </div>
);

export default Timeline;
