import React, { ReactNode } from 'react';
import Day from '../model/day';
import moment from 'moment';

interface IDayProps {
  day: Day;
  // Set to true if an empty day should be rendered
  isEmpty: boolean;
}

const dayButtonClicked = (event: any) => {
  console.log(event.target);
};

const DayElement: React.FC<IDayProps> = ({ day, isEmpty }) => {
  return (
    <td className="xcol">
      {!isEmpty ? (
        <button onClick={dayButtonClicked}>
          <span>{moment(day.date).format('D')}</span>
        </button>
      ) : (
        <span>E</span>
      )}
    </td>
  );
};

export default DayElement;
