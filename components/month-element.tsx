import React from 'react';
import Month from '../model/month';
import WeekElement from './week-element';

interface IMonthsProps {
  month: Month;
}

const MonthElement: React.FC<{ month: Month }> = ({ month }) => {
  return (
    <div>
      {month.weeks.map((week, index) => {
        return <WeekElement key={index} week={week} />;
      })}
    </div>
  );
};

export default MonthElement;
